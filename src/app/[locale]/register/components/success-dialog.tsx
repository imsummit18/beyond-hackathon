'use client';

import { Icons } from '@/components/icons';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  open: boolean;
  handleClose: () => void;
}

const SuccessDialog = ({ open, handleClose }: Props) => {
  const router = useRouter();

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className='bg-primary max-w-[585px] border-none p-[30px] px-[40px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className='flex justify-center'>
              <Icons.registerSuccess />
            </div>

            <h4 className='text-white text-center font-normal text-[24px] leading-[24px] mb-[18px] mt-[24px]'>
              Congratulations!
            </h4>
          </AlertDialogTitle>
          <AlertDialogDescription className='text-center text-white tracking-wide text-[14px] font-normal'>
            Thank you for your interest in the Industrial Hackathon initiative,
            your registration was successfully completed, we will be in contact
            with you soon.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex !justify-center mt-7 mb-3'>
          <Button
            variant={'input'}
            onClick={() => {
              handleClose();
              router.push('/');
            }}
          >
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessDialog;
