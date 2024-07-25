"use client";
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Awards = () => {
    const { locale } = useParams();
    const { t } = useTranslation()
    return (
        <div id="awards" className=' bg-white pt-[100px] pb-[140px] text-center lg:px-[137px]'>
            <p className={cn("text-secondary-500 font-medium lg:text-3xl text-center", {
                'tracking-normal': locale === 'ar',
                'tracking-[0.3em]': locale === 'en',
            })}>{t("Awards")}
            </p>
            <p className='lg:mt-8'>
                {t("Awards_Text")}
            </p>


            {/* Awards Card */}

            <div className='  grid grid-cols-3 '>


                {/* Green Card */}
                <div className='flex flex-col  items-center mt-32 '>
                    <div className='h-[315px] w-[340px] bg-green-normal rounded py-9 px-10'>

                        <div className=' flex items-center flex-col  gap-y-2 justify-center bg-white rounded-[44px] h-full '>
                            <p className='font-semibold text-9xl'>3</p>
                            <p>{t("Third_Place")}</p>
                        </div>
                    </div>
                    <p className='mt-5 text-primary text-2xl font-medium'>{t("Third_Prize")}</p>
                </div>

                {/* yellow card */}
                <div className='flex flex-col  items-center mt-12 '>
                    <div className='h-[315px] w-[340px] bg-secondary-500 rounded py-9 px-10'>

                        <div className=' flex items-center flex-col  gap-y-2 justify-center bg-white rounded-[44px] h-full '>
                            <p className='font-semibold text-9xl'>1</p>
                            <p>{t("Second_Place")}</p>

                        </div>
                    </div>
                    <p className='mt-5 text-primary text-2xl font-medium'>{t("First_Prize")}</p>
                </div>

                {/* red card */}
                <div className='flex flex-col  items-center mt-32'>
                    <div className='h-[315px] w-[340px] bg-destructive-500 rounded py-9 px-10'>

                        <div className=' flex items-center flex-col  gap-y-2 justify-center bg-white rounded-[44px] h-full '>
                            <p className='font-semibold text-9xl'>2</p>
                    <p>{t("Second_Place")}</p>
                        </div>
                    </div>
                    <p className='mt-5 text-primary text-2xl font-medium'>{t("Second_Prize")}</p>
                </div>


            </div>


        </div>
    )
}

export default Awards