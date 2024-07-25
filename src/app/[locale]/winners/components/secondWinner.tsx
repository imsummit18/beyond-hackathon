'use client';
import React from 'react';
import { WinnersType } from './firstWinner';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
const SecondWinner = ({ winners }: { winners: WinnersType | undefined }) => {
  const { t } = useTranslation();
  const { locale } = useParams();
  return (
    <div className='mb-6'>
      <div className='container'>
        <h2 className={cn('text-primary-medium text-[10px] font-bold uppercase tracking-[.3em]', {
          'tracking-normal': locale === 'ar',
          'tracking-[.3em]': locale === 'en',
        })}>
          {t('secondwinners')}
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {winners?.map((winner, index) => (
            <div key={winner.id} className=''>
              <div className='bg-secondary p-4 rounded-[15px] text-white lg:min-h-[137px]'>
                <div
                  className={`min-h-[33px] title-block title-block-${index + 1
                    }`}
                >
                  <h3 className='text-[12px] font-bold uppercase tracking-[.3em] mb-0.5'>
                    {winner.participant.name}
                  </h3>
                  <span className='block text-[11px] font-normal leading-none'>
                    {winner.participant.uuid}
                  </span>
                </div>
                <div className='flex'>
                  <div className='basis-1/2 lg:basis-1/3 mt-2.5'>
                    <h4 className='text-[11px] font-medium mb-0.5'>
                      {t('nationality')}
                    </h4>
                    <span className='block text-[11px] font-normal leading-none uppercase'>
                      {winner.participant.national}
                    </span>
                  </div>
                  <div className='basis-1/2 lg:basis-1/3 mt-2.5'>
                    {
                      winner?.participant?.members?.length > 0 && (
                        <>
                          <h4 className='text-[11px] font-medium mb-0.5'>
                            {' '}
                            {t('members')}
                          </h4>
                          <ol>
                            {winner?.participant?.members?.map((member, index) => (
                              <li
                                key={index}
                                className='list-decimal list-inside text-[11px] font-light uppercase'
                              >
                                {member.name}
                              </li>
                            ))}
                          </ol>
                        </>
                      )
                    }

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondWinner;
