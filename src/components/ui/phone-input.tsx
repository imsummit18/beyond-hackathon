import * as React from 'react';

import { Input, InputProps } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const PhoneInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { locale } = useParams();
    const { t } = useTranslation();

    return (
      <div className='relative w-full'>
        <p
          className={cn('absolute top-[13px] text-primary-medium text-base', {
            'right-4': locale === 'ar',
            'left-4': locale === 'en',
          })}
        >
          +966
        </p>

        <Input
          // placeholder={t('Mobile_Number')}
          type='number'
          pattern='^(\+)?[0-9\s]*$'
          className={cn('[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none', {
            'pr-[60px]': locale === 'ar',
            'pl-[60px]': locale === 'en',
          })}
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
          {...props}
          ref={ref}
        />
        {/* <span className='absolute text-sm top-[15.5px] left-3'>+966</span>
      <Input className={cn('pl-[50px]', className)} {...props} ref={ref} /> */}
      </div>
    );
  }
);
PhoneInput.displayName = 'PhoneInput';

export { PhoneInput };
