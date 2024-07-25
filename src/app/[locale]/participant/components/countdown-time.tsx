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
        <div className='counter flex mb-[15px] mt-[5px] lg:mb-[30px] lg:mt-[30px]'>
          {/* <span>{timeBetween.years()}yr </span>
        <span>{timeBetween.months()}m </span> */}
          <div className='item text-center text-primary-normal pr-[10px] lg:pr-[25px] lg:text-[42px]'>
            {timeBetween.days()}
            <span className={cn('font-bold block text-secondary text-[8px] tracking-[0.20rem] uppercase mt-[10px] lg:mt-[20px]', {
              'tracking-normal': locale === 'ar',
              'tracking-[0.20rem]': locale === 'en',
            })}>
              {t('days')}
            </span>
          </div>
          <div className='item text-center text-primary-normal pr-[10px] lg:pr-[25px] lg:text-[42px]'>
            {timeBetween.hours()}
            <span className={cn('font-bold block text-secondary text-[8px] tracking-[0.20rem] uppercase mt-[10px] lg:mt-[20px]', {
              'tracking-normal': locale === 'ar',
              'tracking-[0.20rem]': locale === 'en',
            })}>
              {t('hours')}
            </span>
          </div>
          <div className='item text-center text-primary-normal pr-[10px] lg:pr-[25px] lg:text-[42px]'>
            {timeBetween.minutes()}
            <span className={cn('font-bold block text-secondary text-[8px] tracking-[0.20rem] uppercase mt-[10px] lg:mt-[20px]', {
              'tracking-normal': locale === 'ar',
              'tracking-[0.20rem]': locale === 'en',
            })}>
              {t('minute')}
            </span>
          </div>
          <div className='item text-center text-primary-normal pr-[10px] lg:pr-[25px] lg:text-[42px]'>
            {timeBetween.seconds()}
            <span className={cn('font-bold block text-secondary text-[8px] tracking-[0.20rem] uppercase mt-[10px] lg:mt-[20px]', {
              'tracking-normal': locale === 'ar',
              'tracking-[0.20rem]': locale === 'en',
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
