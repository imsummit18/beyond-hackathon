"use client";

import ButtonLoading from "@/components/ui/button-loading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { InputAnimated } from "@/components/ui/input-animated";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputOtpDialog from "./input-otp-dialog";
import { useTranslation } from "react-i18next";
import { verifyEmailVotingAction } from "@/actions/verify-email-voting-action";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please enter an email.",
    })
    .email(),
});

const InputEmailDialog = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation();
  const [openOtp, setOpenOtp] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const res = await verifyEmailVotingAction({ email: data.email });

      if (res.success) {
        toast({
          title: res.message,
        });
        setOpenOtp(true);
      } else {
        toast({
          title: res.message,
          variant: "destructive",
        });
      }
    });
  }

  const handleCloseDialog = () => {
    handleClose();
    form.clearErrors();
    form.reset();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleCloseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">{t("email")}</DialogTitle>
            <DialogDescription className="text-gray pt-2">
              {t("enter_registered_email")}
            </DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mt-[30px]">
                      <InputAnimated
                        className="rounded-none p-0 border-t-0 border-r-0 border-l-0 border-b-1 bg-transparent outline-none shadow-none focus-visible:ring-transparent"
                        type="email"
                        label={t("email")}
                        placeholder={t("email_address")}
                        {...field}
                      />

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end mt-5">
                  <ButtonLoading isLoading={isPending}>
                    {t("submit")}
                  </ButtonLoading>
                </div>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <InputOtpDialog
        open={openOtp}
        handleClose={() => {
          setOpenOtp(false);
          handleCloseDialog();
        }}
        email={form.watch("email")}
      />
    </>
  );
};

export default InputEmailDialog;
