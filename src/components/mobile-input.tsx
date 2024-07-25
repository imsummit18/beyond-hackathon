import React from 'react';
import { Input } from './ui/input';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const MobileInput = (props: any) => {
  const { locale } = useParams();
  const { t } = useTranslation();

  return (
    <div className='relative'>
      <p
        className={cn('absolute top-[13px] text-primary-medium', {
          'right-4': locale === 'ar',
          'left-4': locale === 'en',
        })}
      >
        +966
      </p>

      <Input
        placeholder={t('Mobile_Number')}
        type='number'
        pattern='^(\+)?[0-9\s]*$'
        className={cn('', {
          'pr-[60px]': locale === 'ar',
          'pl-[60px]': locale === 'en',
        })}
        {...props}
      />
    </div>
  );
};

export default MobileInput;
