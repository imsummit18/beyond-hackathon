'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';
import { LabelValue } from './label-value';
import { TeamMemberInformation } from './team-info-card';
import { Response } from '@/actions/participant-details-action';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const ProfileTabContent = ({ data }: { data: Response }) => {
  const { locale } = useParams();
  const { t } = useTranslation();

  return (
    <Accordion
      type='single'
      collapsible
      className='w-full '
      defaultValue='item-1'
    >
      <AccordionItem
        value='item-1'
        className='rounded-t-[20px] mb-[4px] !border-none !bg-white'
      >
        <AccordionTrigger
          className={cn(
            'rounded-t-[20px] text-sm sm:text-base lg:px-[11px] pb-[8px] data-[state=open]:bg-white data-[state=open]:text-primary pt-[28px] font-extrabold uppercase tracking-[4.2px] text-primary hover:no-underline',
            {
              'flex-row-reverse tracking-normal': locale === 'ar',
              'tracking-[4.2px]': locale === 'en',
            }
          )}
        >
          {t('participant:personal_detail')}
        </AccordionTrigger>
        <AccordionContent className='pb-0'>
          <div
            className={cn(
              'px-0 lg:px-[31px] pt-[25px] pb-[28px] bg-white grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-0 gap-y-8 text-sm sm:text-base  ',
              {
                'justify-items-end flex flex-row-reverse flex-wrap':
                  locale === 'ar',
              }
            )}
          >
            <LabelValue label={'name'} value={data.data.name} />
            <LabelValue label={'phone'} value={data.data.mobile ?? '-'} />
            <LabelValue
              label={'email'}
              type='email'
              value={data.data.email ?? '-'}
            />
            <LabelValue
              label={'nationality'}
              value={data?.data.national ?? '-'}
            />
            {data.data.national.toLowerCase() === 'saudi' ? (
              <LabelValue
                label={'city'}
                value={data?.data?.city ?? data?.data?.city_other ?? '-'}
              />
            ) : (
              <LabelValue
                label={'country'}
                value={data?.data?.country_other ?? data?.data?.country ?? '-'}
              />
            )}
            <LabelValue label={'gender'} value={data?.data.gender ?? '-'} />
            <LabelValue label={'age'} value={data?.data.age ?? '-'} />
            <LabelValue
              label={'occupation'}
              value={
                data?.data.occupation ?? data?.data.occupation_other ?? '-'
              }
            />
            <LabelValue
              label={'institution'}
              value={
                data?.data.institution_other ?? data?.data.institution ?? '-'
              }
            />
            <LabelValue
              label={'education'}
              value={
                data?.data.qualification ??
                data?.data.qualification_other ??
                '-'
              }
            />
            {/* <LabelValue
              label={'university'}
              value={data?.data.university ?? '-'}
            /> */}
            {/* <LabelValue label={'major'} value={data?.data.major ?? '-'} /> */}
            {/* <LabelValue
              label={'completed_university'}
              value={
                data?.data?.has_university_completed
                  ? 'Completed University'
                  : 'Currently at University'
              }
            /> */}
            <LabelValue
              label={'years_of_experience'}
              value={data?.data?.years_of_experience ?? '-'}
            />{' '}
            <LabelValue
              label={'area_of_expertise'}
              value={
                data?.data?.detail?.area_of_expertise
                  .filter((val) => val.toLowerCase() !== 'other')
                  .join(', ') +
                (data?.data?.detail?.area_of_expertise_other
                  ? `, ${data?.data?.detail?.area_of_expertise_other}`
                  : '')
              }
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      {data?.data?.members?.length > 0
        ? data?.data?.members?.map((member, idx) => (
          <TeamMemberInformation
            key={member.id}
            id={idx + 1}
            member={member}
          />
        ))
        : null}

      <AccordionItem
        value='item-99'
        className='rounded-b-[20px] !border-none !bg-white'
      >
        <AccordionTrigger
          className={cn(
            'rounded-b-[20px]  lg:px-[11px] pb-[8px] data-[state=open]:bg-white data-[state=open]:rounded-[0] data-[state=open]:text-primary pt-[28px] font-extrabold uppercase tracking-[4.2px] text-primary hover:no-underline whitespace-nowrap  text-sm sm:text-base',
            {
              'flex-row-reverse': typeof locale === 'string' && locale === 'ar',
              'tracking-normal': locale === 'ar',
              'tracking-[2.4px]': locale === 'en',
            }
          )}
        >
          {t('participant:Technical_Information')}
        </AccordionTrigger>
        <AccordionContent className='pb-0  text-sm sm:text-base '>
          <div className='pt-[25px] rounded-b-[20px]  lg:px-[31px] pb-[28px] bg-white flex flex-col gap-y-8 '>
            <LabelValue
              label={'team_expertise'}
              value={
                data?.data?.detail?.combined_areas_of_expertise
                  .filter((val) => val.toLowerCase() !== 'other')
                  .join(', ') +
                (data?.data?.detail?.combined_areas_of_expertise_other
                  ? data?.data?.detail?.combined_areas_of_expertise_other
                  : '')
              }
            ></LabelValue>
            <LabelValue
              label={'work_in_technical_projects'}
              value={
                data?.data?.detail?.has_technical_experience === '1'
                  ? 'Yes'
                  : 'No'
              }
            ></LabelValue>
            <LabelValue
              label={'work_in_film_projects'}
              value={
                data?.data?.detail?.film_industry_projects === '1'
                  ? 'Yes'
                  : 'No'
              }
            ></LabelValue>
            <LabelValue
              label={'why_join_Industrial_Hackathon'}
              value={data?.data?.detail?.filimathon_reason}
            ></LabelValue>
            <LabelValue
              label={'how_you_hear_Industrial_Hackathon'}
              value={data?.data?.detail?.heard_about_filimathon}
            ></LabelValue>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProfileTabContent;
