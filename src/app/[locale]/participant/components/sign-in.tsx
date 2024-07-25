'use client';

import { loginAction } from '@/actions/login-action';
import ButtonLoading from '@/components/ui/button-loading';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { InputAnimated } from '@/components/ui/input-animated';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

function SignIn() {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useParams();
  const [isPending, startTransition] = useTransition();

  const formSchema = z.object({
    email: z.string().email({
      message: t('Please_enter_a_valid_email_address'),
    }),
    password: z.string().min(6, {
      message: t('Password_must_be_at_least_6_characters_long'),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await loginAction(values);
      if (result?.success) {
        toast({
          title: t(result?.message ?? ''),
        });
        // router.refresh();
        // router.push('/');
        window.location.href = '/participant/details';
      } else {
        toast({
          title: t(result?.message ?? ''),
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <div className='signIn pb-[80px] pt-[80px] bg-white' id='login'>
      <div className='container'>
        <div className='flex flex-col md:flex-row gap-[30px] lg:gap-[100px]'>
          <div className='w-full md:w-1/2 lg:w-2/3'>
            <h2
              className={cn(
                'uppercase mb-[25px] font-medium text-primary-normal text-[14px] tracking-[0.3em]',
                {
                  'tracking-normal': locale === 'ar',
                  'tracking-[0.3em]': locale === 'en',
                }
              )}
            >
              {t('sign_in_your_account')}
            </h2>
            <p className='text-[16px] text-accent'>

              {t("Lorem_Text")}
              {/* TODO: use lorem from  */}
            </p>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='hidden'>{t('email')}</FormLabel>
                      <FormControl>
                        <InputAnimated
                          className='rounded-none p-0 border-t-0 border-r-0 border-l-0 border-b-1 bg-transparent outline-none shadow-none focus-visible:ring-transparent'
                          type='email'
                          placeholder={t('email')}
                          label={t('email')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='hidden'>{t('password')}</FormLabel>
                      <FormControl>
                        <InputAnimated
                          className='rounded-none p-0 border-t-0 border-r-0 border-l-0 border-b-1 bg-transparent outline-none'
                          type='password'
                          placeholder={t('password')}
                          label={t('password')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <div className='space-x-2 flex items-center'>
                    <Checkbox
                      className='mr-1 h-[15px] w-[15px] border-gray rounded-sm'
                      id='terms'
                    />
                    <label
                      htmlFor='terms'
                      className='text-[10px] font-normal uppercase tracking-[0.25em]'
                    >
                      {t('remember_me')}
                    </label>
                  </div> */}
                <div className='space-x-2'>
                  <p className='text-muted-foreground text-[10px] text-garkgray'>
                    {t('login_description')}
                  </p>
                </div>

                <ButtonLoading
                  type='submit'
                  className={cn(
                    'uppercase font-normal text-xs/[10px] tracking-[0.3em]',
                    {
                      'tracking-normal': locale === 'ar',
                      'tracking-[0.3em]': locale === 'en',
                    }
                  )}
                  variant='outline'
                  isLoading={isPending}
                >
                  {t('sign_in')}
                </ButtonLoading>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
