'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import CountdownTime from './countdown-time';

import bannerImg from '../../../../../public/images/banner.jpg';
import { useParams } from 'next/navigation';
const bgImg = {
  backgroundImage: `url(${bannerImg.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '465px',
};

function Banner({ isAuth }: { isAuth: boolean }) {
  const { t } = useTranslation();
  const { locale } = useParams();

  return (
    <div className='flex items-center pt-10'>
      <div className='container'>
        <div
          className='flex items-center overflow-hidden rounded-[18px] p-[20px] lg:p-[50px]'
          style={bgImg}
        >
          <div className='flex justify-end flex-1 w-full'>
            <div
              className={cn(
                'flex flex-wrap flex-col justify-center max-w-[580px] w-full p-[20px] lg:p-[50px] bg-secondary-ultralight/95  overflow-hidden rounded-[18px] min-h-[350px'
              )}
            >
              <h1
                className={cn(
                  'text-secondary text-[24px] lg:text-[40px] uppercase tracking-[0.4rem] mb-[15px] lg:mb-[20px] font-normal leading-[1.2]',
                  {
                    'tracking-normal': locale === 'ar',
                    'tracking-[0.4rem]': locale === 'en',
                  }
                )}
              >
                {t('industrial_hackathon')}
              </h1>
              <span className={cn('text-grey-normal text-[14px] lg:text-[18px] uppercase tracking-[0.2rem]  mb-[15px] lg:mb-[20px] font-medium',
                {
                  'tracking-normal': locale === 'ar',
                  'tracking-[0.2rem]': locale === 'en',
                }
              )}>
                {t('innovation')}
              </span>
              <div className='timer'>
                <CountdownTime />
              </div>
              <div className='lg:flex items-center lg:gap-[25px]'>
                {!isAuth && (
                  <Link href='/register'>
                    <Button
                      className={
                        cn("uppercase text-primary-normal font-normal text-xs/[10px] tracking-[0.3em]", {
                          'tracking-normal': locale === 'ar',
                          'tracking-[0.3em]': locale === 'en',
                        })
                      }
                      variant='outline'
                    >
                      {t('register')}
                    </Button>
                  </Link>
                )}
                <div className={cn('text-grey-normal text-[10px] uppercase tracking-[0.2rem] lg:mt-[0] mt-[15px] ', {
                  'tracking-normal': locale === 'ar',
                  'tracking-[0.2rem]': locale === 'en',
                })}>
                  {t('virtual')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
