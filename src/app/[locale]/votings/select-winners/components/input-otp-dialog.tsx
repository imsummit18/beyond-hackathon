import { participantVotingAction } from '@/actions/participant-voting-action';
import { verifyOtpVotingAction } from '@/actions/verify-otp-voting-action';
import ButtonLoading from '@/components/ui/button-loading';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { InputAnimated } from '@/components/ui/input-animated';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useVotingContext } from './voting-context';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
  otp: z.string({
    required_error: 'Please enter OTP.',
  }),
});

const InputOtpDialog = ({
  open,
  handleClose,
  email,
}: {
  open: boolean;
  handleClose: () => void;
  email: string;
}) => {
  const { selectedParticipants } = useVotingContext();
  const [isPending, startTransition] = useTransition();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const otpResponse = await verifyOtpVotingAction({
        otp: data.otp,
        email: email,
      });

      if (otpResponse.success) {
        const participantResponse = await participantVotingAction({
          competition_id: 1,
          user_voting_id: otpResponse.data!,
          voting: [
            {
              participant_id: selectedParticipants?.fifth?.value!,
              score: 5,
            },
            {
              participant_id: selectedParticipants?.fourth?.value!,
              score: 4,
            },
            {
              participant_id: selectedParticipants?.third?.value!,
              score: 3,
            },
            {
              participant_id: selectedParticipants?.second?.value!,
              score: 2,
            },
            {
              participant_id: selectedParticipants?.first?.value!,
              score: 1,
            },
          ],
        });

        if (participantResponse.success) {
          toast({
            title: participantResponse.message,
          });
          setOpenSuccessModal(true);
        } else {
          toast({
            title: participantResponse.message,
            variant: 'destructive',
          });
        }
      } else {
        toast({
          title: otpResponse.message,
          variant: 'destructive',
        });
      }
    });
  }

  function handleCloseDialog() {
    handleClose();
    form.clearErrors();
    form.reset();
  }

  function handleCloseSuccessModal() {
    handleCloseDialog();
    setOpenSuccessModal(false);
    router.push('/');
  }

  return (
    <>
      <Dialog open={open} onOpenChange={handleCloseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-primary'>OTP</DialogTitle>
            <DialogDescription className='text-gray pt-2'>
              Please enter the 4 digit OTP recieved in your Email.
            </DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name='otp'
                  render={({ field }) => (
                    <FormItem className='mt-[30px]'>
                      <InputAnimated
                        className='rounded-none p-0 border-t-0 border-r-0 border-l-0 border-b-1 bg-transparent outline-none shadow-none focus-visible:ring-transparent'
                        type='string'
                        label='Enter OTP'
                        placeholder='Email OTP'
                        {...field}
                      />

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='flex justify-end mt-5'>
                  <ButtonLoading isLoading={isPending}>Submit</ButtonLoading>
                </div>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={openSuccessModal} onOpenChange={handleCloseSuccessModal}>
        <DialogContent className='gap-0'>
          <DialogHeader className='!items-center'>
            <Icons.votingSuccess />
          </DialogHeader>

          <div>
            <h4 className='text-center font-medium text-2xl text-primary'>
              Congratulations!
            </h4>
            <p className='text-center text-gray pt-1 pb-5'>
              Your has been successfully submitted public Voting
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InputOtpDialog;
