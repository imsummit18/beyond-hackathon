'use client';

import ButtonLoading from '@/components/ui/button-loading';
import { Form } from '@/components/ui/form';
import PersonalDetail from './components/personalDetail';
import SuccessDialog from './components/success-dialog';
import TeamSection from './components/team-section';
import TeamInfo from './components/teamInfo';
import useRegisterForm from './hooks/use-register-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const RegisterForm = () => {
  const { locale } = useParams()
  const { form, onSubmit, isPending, showSuccess, setShowSuccess } =
    useRegisterForm();



  const { t } = useTranslation();

  return (
    <div className='formRegister pb-[30px] lg:pb-[60px]'>
      <div className='container'>
        <h1 className={cn("my-5 lg:mt-8 lg:mb-10 text-primary font-bold uppercase tracking-[.3em]", {
          'tracking-[0.3em]': locale === 'en',
          'tracking-normal': locale === 'ar'
        })}>
          {t('REGISTRATION_FORM')}
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <PersonalDetail form={form} />
            <TeamInfo form={form} />
            <TeamSection form={form} />
            <div className='flex justify-end mt-[30px]'>
              <ButtonLoading
                isLoading={isPending}
                type='submit'
                className={cn("rounded-[3px] min-w-[120px] uppercase tracking-[.3em] mb-2 text-[10px]", {
                  'tracking-[0.3em]': locale === 'en',
                  'tracking-normal': locale === 'ar'
                })}
              >{
                  t('Send')
                }
              </ButtonLoading>
            </div>
          </form>
        </Form>
      </div>

      <SuccessDialog
        open={showSuccess}
        handleClose={() => setShowSuccess(false)}
      />
    </div >
  );
};

export default RegisterForm;
