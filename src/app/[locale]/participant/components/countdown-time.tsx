'use client';

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';

const targetTime = moment('2035-01-01');

const CountdownTime = () => {
  const { locale } = useParams();
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <>
        <div className='counter flex gap-5 mb-[15px] mt-[5px] lg:mb-[30px] lg:mt-[30px]'>

          {/* Days */}
          <div className={cn("bg-primary  items-center lg:h-[100px] lg:w-[106px] rounded-[10px] text-primary-normal pt-7 pr-[10px] lg:pr-[35px]", {
            ' pr-[10px] lg:pr-[25px] ': locale === 'ar',
            ' pl-[10px] lg:pl-6 ': locale === 'en',
          })}>
            <span className='text-secondary-500 lg:text-[50px] '>{String(timeBetween.days()).padStart(2, '0')}</span>
            <span className={cn('font-bold block text-white text-[8px] tracking-[0.20rem] uppercase', {
              'tracking-normal lg:pr-4': locale === 'ar',
              'tracking-[0.20rem] lg:pl-[14px] ': locale === 'en',
            })}>
              {t('days')}
            </span>
          </div>

          {/* Hours */}

          <div className={cn("bg-primary  items-center lg:h-[100px] lg:w-[106px] rounded-[10px] text-primary-normal pt-7 pr-[10px] lg:pr-[35px]", {
            ' pr-[10px] lg:pr-[25px] ': locale === 'ar',
            ' pl-[10px] lg:pl-6 ': locale === 'en',
          })}>
            <span className='text-secondary-500 lg:text-[50px] '>{String(timeBetween.hours()).padStart(2, '0')}</span>
            <span className={cn('font-medium block text-white text-[8px] tracking-[0.20rem] uppercase', {
              'tracking-normal lg:pr-2': locale === 'ar',
              'tracking-[0.20rem] lg:pl-3 ': locale === 'en',
            })}>
              {t('hours')}
            </span>
          </div>


          {/* Minutes */}
          <div className={cn("bg-primary  items-center lg:h-[100px] lg:w-[106px] rounded-[10px] text-primary-normal pt-7 pr-[10px] lg:pr-[35px]", {
            ' pr-[10px] lg:pr-[25px] ': locale === 'ar',
            ' pl-[10px] lg:pl-6 ': locale === 'en',
          })}>
            <span className='text-secondary-500 lg:text-[50px] '>{String(timeBetween.minutes()).padStart(2, '0')}</span>
            <span className={cn('font-bold block text-white text-[8px] tracking-[0.20rem] uppercase', {
              'tracking-normal lg:pr-3': locale === 'ar',
              'tracking-[0.20rem] lg:pl-2': locale === 'en',
            })}>
              {t('minute')}
            </span>
          </div>

          {/* Second */}
          <div className={cn("bg-primary  items-center lg:h-[100px] lg:w-[106px] rounded-[10px] text-primary-normal pt-7 pr-[10px] lg:pr-[35px]", {
            ' pr-[10px] lg:pr-[25px] ': locale === 'ar',
            ' pl-[10px] lg:pl-6 ': locale === 'en',
          })}>
            <span className='text-secondary-500 lg:text-[50px] '>{String(timeBetween.seconds()).padStart(2, '0')}</span>
            <span className={cn('font-bold block text-white text-[8px] tracking-[0.20rem] uppercase', {
              'tracking-normal lg:pr-2': locale === 'ar',
              'tracking-[0.20rem] lg:pl-1': locale === 'en',
            })}>
              {t('second')}
            </span>
          </div>
        </div>
      </>
    </div>
  );
};

export default CountdownTime;
