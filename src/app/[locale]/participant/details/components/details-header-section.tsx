'use client';

import React from 'react';
import LogoutModal from './logout';
import { ParticipantCard } from './participant-card';
import { cn } from '@/lib/utils';
import { Response } from '@/actions/participant-details-action';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

export interface SessionProps {
  id: number;
  email: string;
  name: string;
  user_type?: string;
  team_member_details?: {
    id: number;
    name: string;
    email: string;
    phone: string;
    country: string;
    country_other: string;
    city: string | null;
    city_other: string | null;
    nationality: string;
  };
  user?: {};
  access_token: string;
  refresh_token: string;
}

const DetailsHeaderSection = ({ data, memberName }: { data: Response, memberName?: string }) => {
  const { locale } = useParams();
  const { t } = useTranslation();
  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-12'>
          <div
            className={cn(
              'font-extrabold uppercase tracking-[4.2px] text-primary',
              {
                'tracking-normal': locale === 'ar',
                'tracking-[4.2px]': locale === 'en',
              }
            )}
          >
            {
              memberName ?
                <> {t('participant:welcome')} {memberName}</> :
                <>
                  {t('participant:welcome')} {data.data.name} ({data.data.uuid})
                </>
            }
          </div>
        </div>

        <LogoutModal />
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2'>
        {data.data.evaluation.map((evaluation, idx) =>
          evaluation.name !== 'Public Voting' ? (
            <ParticipantCard
              key={idx}
              title={evaluation.name}
              score={
                typeof evaluation.score === 'number'
                  ? evaluation.score?.toString()
                  : evaluation.score.avg_score?.toString()
              }
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default DetailsHeaderSection;
