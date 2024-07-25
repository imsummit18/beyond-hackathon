"use client";
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation';
import React from 'react'
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { DesignPath, ProductionPath, SustainabilityPath } from '@/images';

const Tracks = () => {
    const { locale } = useParams()
    const { t } = useTranslation()

    return (
        <div
        id='challenges'
        className='bg-[#CAA8570F] py-16 pb-24 lg:px-[137px]'>
            <p className={cn("text-green-normal font-medium lg:text-3xl text-center", {
                'tracking-normal': locale === 'ar',
                'tracking-[0.3em]': locale === 'en',
            })}>{t("Tracks")}</p>

            <div className=' grid grid-cols-3 gap-9 mt-16'>
                {/* Design Path */}
                <div className='h-[390px] border-[1px]  border-destructive-500 bg-destructive-500 rounded '>
                    <div className='h-[150px] bg-white  px-8  flex items-center gap-4 '>
                        <Image
                            className='h-[78px] w-[78px]  border-none'
                            src={DesignPath}
                            alt='Design Path'
                        />
                        <p className={cn("text-2xl font-medium text-destructive-500", {
                            'tracking-normal': locale === 'ar',
                            'tracking-[0.2em]': locale === 'en',
                        })}>{t("Design_Path")}</p>
                    </div>
                    <div className={cn("pt-[65px] pb-16 text-xl text-white px-8",{
                        'text-xl': locale === 'ar',
                        'text-base tracking-[0.1em]  pt-[50px]': locale === 'en',
                    })}>
                        {t("Design_Text")}
                    </div>
                </div>

                {/* Production Path */}
                <div className='h-[390px] border-[1px]   border-secondary-500  rounded  bg-secondary-500'>
                    <div className='h-[150px] bg-white px-8  flex items-center gap-4 '>
                        <Image
                            className='h-[78px] w-[78px]  border-none'
                            src={ProductionPath}
                            alt='Production Path'
                        />
                        <p className={cn("text-2xl font-medium text-secondary-500", {
                            'tracking-normal': locale === 'ar',
                            'tracking-[0.2em]': locale === 'en',
                        })}>{t("Production_Path")}</p>
                    </div>
                    <div className={cn("pt-[65px] pb-16 text-xl text-white px-8",{
                        'text-xl': locale === 'ar',
                        'text-base tracking-[0.1em]  pt-[50px]': locale === 'en',
                    })}>
                        {t("Production_Text")}
                    </div>
                </div>

                {/* Sustainability Path */}
                <div className='h-[390px] border-[1px]   border-green-normal rounded  bg-green-normal'>
                    <div className='h-[150px]  bg-white px-8  flex items-center gap-4 '>
                        <Image
                            className='h-[78px] w-[78px]  border-none'
                            src={SustainabilityPath}
                            alt='Sustainability Path'
                        />
                        <p className={cn("text-2xl font-medium text-green-normal", {
                            'tracking-normal': locale === 'ar',
                            'tracking-[0.2em]': locale === 'en',
                        })}>{t("Sustainability_Path")}</p>
                    </div>
                    <div className={cn("pt-[65px] pb-16 text-xl text-white px-8",{
                        'text-xl': locale === 'ar',
                        'text-base tracking-[0.1em]  pt-[50px]': locale === 'en',
                    })}>
                        {t("Sustainability_Text")}
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Tracks