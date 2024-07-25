'use client';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LabelValue } from './label-value';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

type MemberType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  country: string;
  nationality: string;
  city: string;
  city_other: string;
  country_other: string;
};

export const TeamMemberInformation = ({
  id,
  member,
}: {
  id: number;
  member: MemberType;
}) => {
  const { locale } = useParams();
  const { t } = useTranslation();
  return (
    <AccordionItem
      value={`item-${id + 1}`}
      className='mb-[4px] !border-none  !bg-white'
    >
      <AccordionTrigger
        className={cn(
          'data-[state=open]:bg-white pb-[8px] lg:px-[11px] data-[state=open]:text-primary pt-[28px] font-extrabold uppercase tracking-[4.2px] text-primary hover:no-underline text-sm sm:text-base',
          {
            'flex-row-reverse': typeof locale === 'string' && locale === 'ar',
            'tracking-normal': locale === 'ar',
            'tracking-[4.2px]': locale === 'en',
          }
        )}
      >
        {t('participant:team_info')}
      </AccordionTrigger>
      <AccordionContent className='pb-0'>
        <div
          className={cn(
            ' lg:px-[28px] pt-[25px] pb-[18px] font-medium text-[15px] text-secondary bg-white  text-sm sm:text-base',
            {
              'text-end': typeof locale === 'string' && locale === 'ar',
              'tracking-normal': locale === 'ar',
            }
          )}
        >
          {t('participant:team_member')} {id}
        </div>
        <div
          className={cn(
            ' lg:px-[31px] pb-[28px]  bg-white grid  grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-0 gap-y-8  text-sm sm:text-base ',
            {
              'justify-items-end flex flex-row-reverse flex-wrap':
                locale === 'ar',
            }
          )}
        >
          <LabelValue label='name' value={member.name} />
          <LabelValue label='phone' value={member.phone} />
          <LabelValue label='email' value={member.email} type='email' />
          <LabelValue label='nationality' value={member.nationality} />
          {member.nationality === 'non-saudi' ? (
            <LabelValue
              label='country'
              value={member.country_other || (member.country ?? '-')}
            />
          ) : (
            <LabelValue
              label={'city'}
              value={member.city_other || (member.city ?? '-')}
            />
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
