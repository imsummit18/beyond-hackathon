
"use client";
import { inviteTeamMember } from "@/actions/invite-member-action";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";


export const useInviteTeamMember = (setOpen: Dispatch<SetStateAction<boolean>>) => {

    const { t } = useTranslation()

    const formSchema = z.object({
        email: z.string().email({
            message: t('participant:Please_enter_a_valid_email_address'),
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    });


    const onSubmit = async (values: { email: string }) => {
        const { success, message } = await inviteTeamMember(values);
        if (success) {
            toast({
                title: message,
            });
            setOpen(false)
        } else {
            toast({
                title: message,
                variant: 'destructive',
            });
        }
    }


    return {
        form,
        onSubmit,
    }
}
