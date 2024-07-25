import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export const LabelValue = ({
  label,
  value,
  type,
}: {
  label: string;
  value: string;
  type?: 'email' | string;
}) => {
  const { t } = useTranslation();
  const { locale } = useParams();
  return (
    <div
      className={cn('', {
        'basis-1/2': locale === 'ar',
      })}
    >
      <p
        className={cn('text:sm sm:text-base text-input', {
          'text-end': locale === 'ar',
        })}
      >
        {t(`participant:${label}`)}
      </p>
      <p
        className={cn('text-input_value capitalize', {
          'text-end': locale === 'ar',
          'normal-case': type === 'email',
        })}
      >
        {value}
      </p>
    </div>
  );
};
