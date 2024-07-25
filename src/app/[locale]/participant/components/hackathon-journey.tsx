"use client";
import { HackathonImage } from '@/images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'
import { useTranslation } from 'react-i18next';

const HackathonJourney = () => {
    const { locale } = useParams();
    const { t } = useTranslation()
    return (

        <div className=' bg-[#901B1E] bg-opacity-[4%]  pt-[100px] pb-[140px] text-center lg:px-[137px]'>
            <p className={cn("text-destructive-500 font-medium lg:text-3xl text-center", {
                'tracking-normal': locale === 'ar',
                'tracking-[0.3em]': locale === 'en',
            })}>{t("Hackathon_Journey")}
            </p>
            <div className='mt-10'>
                <Image
                    src={HackathonImage}
                    className=''
                    alt='Hackathon Image'
                />
            </div>
        </div >
    )


}

export default HackathonJourney