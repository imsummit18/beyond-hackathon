'use client';

import { Button } from '@/components/ui/button';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { VotingSchemaType } from '../hooks/use-select-winner-form';
import InputEmailDialog from './input-email-dialog';
import { useVotingContext } from './voting-context';

interface Props {
  form: UseFormReturn<VotingSchemaType, any, undefined>;
}

const HeaderBtn = ({ form }: Props) => {
  const { t } = useTranslation();

  const { openEmail, setOpenEmail } = useVotingContext();

  return (
    <div className='flex justify-end gap-[10px] md:gap-[25px] mt-[20px]'>
      <Button
        type='submit'
        className='uppercase min-w-[155px] lg:min-w-[180px] my-[8px] mr-[10px] sm:mr-[0] bg-primary text-white font-bold text-xs/[10px] tracking-[0.3em]'
        // onClick={onSubmit}
      >
        {t('submit')}
      </Button>

      <Button
        type='reset'
        className='uppercase min-w-[155px] lg:min-w-[180px] my-[8px] mr-[10px] sm:mr-[0] text-primary-normal font-bold text-xs/[10px] tracking-[0.3em]'
        variant='outline'
        onClick={() => {
          form.reset();
          form.clearErrors();
        }}
      >
        {t('reset')}
      </Button>

      <InputEmailDialog
        open={openEmail}
        handleClose={() => setOpenEmail(false)}
      />
    </div>
  );
};

export default HeaderBtn;
