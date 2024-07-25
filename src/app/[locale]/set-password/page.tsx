'use client';
import React from 'react';
import useResetPassword from './hooks/use-set-password';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useTranslation } from 'react-i18next';
import ButtonLoading from '@/components/ui/button-loading';
import { InputAnimated } from '@/components/ui/input-animated';
import Image from 'next/image';
import WhiteLogo from '@/images/logo-white.svg';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import MainLogo from '/public/images/gray-logo.svg';
import background from '/public/images/background.svg';

const ResetPassword = () => {
    const { locale } = useParams()
    const { t } = useTranslation()
    const { form, onSubmit, isLoading } = useResetPassword()

    return (
        <div className='px-4 lg:px-[100px] pt-[37px]'>
            <Image
                src={WhiteLogo}
                alt='logo'
                width={223}
                height={53}
            />
            <div
                className="relative grid grid-cols-1 xl:grid-cols-2 items-center h-[400px] lg:h-[725px] mt-7 rounded-[20px] mb-14 lg:mb-[120px]"
            >
                <Image
                    src={background}
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    className='absolute inset-0 z-[-1] rounded-[20px]'
                />

                <div className='hidden xl:flex w-full items-center justify-center'>
                    <Image
                        className='w-auto'
                        src={MainLogo}
                        alt='Picture of the author'
                    />
                </div>
                <div className='container w-full lg:w-[512px] '>
                    <div className='p-[20px] lg:p-8 mb-5 lg:mb-14 bg-white rounded-2xl '>
                        <h1 className={cn('text-primary font-bold uppercase mb-4 tracking-[.3em]', {
                            'tracking-normal': locale === 'ar',
                            'tracking-[.3em]': locale === 'en',
                        })}>
                            {t("Reset_Password")}
                        </h1>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className='flex flex-col gap-y-7'>
                                    <FormField
                                        control={form.control}
                                        name='password'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <InputAnimated
                                                        className='rounded-none p-0 border-t-0 border-r-0 border-l-0 border-b-1 bg-transparent outline-none'
                                                        type='password'
                                                        placeholder={t('New_Password')}
                                                        label={t('New_Password')}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='confirm_password'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <InputAnimated
                                                        className='rounded-none p-0 b-2 border-t-0 border-r-0 border-l-0 border-b-1 bg-transparent outline-none'
                                                        type='password'
                                                        placeholder={t('Confirm_Password')}
                                                        label={t('Confirm_Password')}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className='flex justify-end mt-[30px]'>
                                    <ButtonLoading
                                        isLoading={isLoading}
                                        type='submit'
                                        className='rounded-[3px] min-w-[120px] uppercase tracking-[.3em] mb-2 text-[10px]'
                                    >
                                        {t("Submit")}
                                    </ButtonLoading>
                                </div>

                            </form>
                        </Form>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ResetPassword;
