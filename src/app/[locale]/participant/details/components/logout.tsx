'use client';

import { logoutAction } from '@/actions/logout-action';
import { Button } from '@/components/ui/button';
import ButtonLoading from '@/components/ui/button-loading';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { useParams, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';

const LogoutBtn = () => {
  const { locale } = useParams()
  const { t } = useTranslation();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function onSubmit() {
    startTransition(async () => {
      const result = await logoutAction();

      if (result?.success) {
        toast({
          title: t(result?.message),
        });
        // router.refresh();
        // router.push('/');
        window.location.href = '/';
      } else {
        toast({
          title: t(result?.message),
          variant: 'destructive',
        });
      }
    });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='uppercase px-[30px] text-[10px] border-primary-foreground rounded-[9px] font-bold'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={14}
            height={15}
            fill='none'
          >
            <path
              fill='#21232C'
              d='M7 0a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V.75A.75.75 0 0 0 7 0Z'
            />
            <path
              fill='#21232C'
              d='M3.86 3.404a.75.75 0 1 0-.862-1.228A7.048 7.048 0 0 0 0 7.956c0 3.884 3.13 7.042 7 7.042s7-3.158 7-7.043a7.048 7.048 0 0 0-2.998-5.779.75.75 0 1 0-.862 1.228 5.548 5.548 0 0 1 2.36 4.551c0 3.066-2.467 5.543-5.5 5.543s-5.5-2.477-5.5-5.543c0-1.885.933-3.55 2.36-4.551Z'
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className={cn("text-center ", {
            'tracking-normal': locale === 'ar',

          })}>
            {t('participant:Logout')}
          </DialogTitle>
        </DialogHeader>
        <div className={cn("text-center", {
          'tracking-normal': locale === 'ar',

        })}>
          {t('participant:Are_you_sure_want_to_logout')}
        </div>
        <DialogFooter className='sm:justify-center flex gap-x-2 gap-y-1 text-center'>
          <DialogClose asChild>
            <Button
              className={cn("", {
                'tracking-normal': locale === 'ar',

              })}
              type='button' variant='secondary'>
              {t('participant:Close')}
            </Button>
          </DialogClose>
          <ButtonLoading
            type='button'
            isLoading={isPending}
            onClick={onSubmit}
            className={cn(" w-full sm:w-fit ", {
              'tracking-normal': locale === 'ar',

            })}
          >
            {t('participant:Logout')}
          </ButtonLoading>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  );
};

export default LogoutBtn;
