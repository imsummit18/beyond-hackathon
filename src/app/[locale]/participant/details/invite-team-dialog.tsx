"use client";

import React from 'react'
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import ButtonLoading from '@/components/ui/button-loading';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useInviteTeamMember } from './hooks/use-invite-team';
import { useSession } from 'next-auth/react';


export const InviteMemberDialogBox = () => {
    const [open, setOpen] = useState(false);
    const { form, onSubmit } = useInviteTeamMember(setOpen)
    const { locale } = useParams()
    const { t } = useTranslation();

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Button
                variant='outline'
                size='sm'
                className={cn("uppercase  text-white px-[30px] text-[10px] bg-primary  hover:bg-primary/80 rounded-[9px] font-bold", {
                    "tracking-normal": locale === 'ar'
                })}
                onClick={() => setOpen(true)}
            >
                {t("participant:Invite_Team_Member")}
            </Button>

            <Dialog
                open={open} onOpenChange={handleClose}>
                <DialogContent className='max-w-[600px] w-full'>
                    <DialogHeader className='text-left'>
                        <DialogTitle className={cn('uppercase', {
                            "tracking-[0.2em]": locale === 'en',
                            "tracking-normal": locale === 'ar'
                        })}>
                            {t("participant:Invite_Team_Member")}
                        </DialogTitle>
                        <div className='pt-4'>
                            <Form {...form}>
                                <form onSubmit={form?.handleSubmit(onSubmit)}>
                                    <FormField
                                        control={form?.control}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='font-semibold'>
                                                    {t('participant:email')}
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type='email'
                                                        placeholder={t('register:Enter_your_email')}
                                                        // placeholder={t('Enter_your_email')}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className=' mt-8 flex justify-end gap-5 '>
                                        <ButtonLoading
                                            type='button'
                                            variant={"outline"}
                                            onClick={() => setOpen(false)}
                                        >
                                            {t("participant:cancel")}
                                        </ButtonLoading>
                                        <ButtonLoading
                                            isLoading={form?.formState.isSubmitting}
                                        >
                                            {t("participant:submit")}
                                        </ButtonLoading>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>

    )
}
