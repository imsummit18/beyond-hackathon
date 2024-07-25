"use client";
import { FinancialPartner, GoldenSepeherd, IndustrialPartner, IndustryPartner, InnovationPartner, Map, PlatinumSponser, SustanabilityPartner } from '@/images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'
import { useTranslation } from 'react-i18next';


const SuccessPartnerData = [
    {
        id: 1,
        image: FinancialPartner,
        text: "Financial_Partner",
        alt: "Finanalcial Partner"
    },
    {
        id: 2,
        image: IndustryPartner,
        text: "Industry_Partner",
        alt: "Industry Partner"
    },
    {
        id: 3,
        image: SustanabilityPartner,
        text: "Sustainability_Partner",
        alt: "Sustanability Partner"
    },
    {
        id: 4,
        image: IndustrialPartner,
        text: "Industrial_Partner",
        alt: "Industrial Partner"
    },
    {
        id: 5,
        image: InnovationPartner,
        text: "Innovation_Partner",
        alt: "Innovation Partner"
    },
]

const SepherdData = [
    {
        id: 1,
        image: PlatinumSponser,
        text: "Platinum_Sponser",
        alt: "Platinum Sponser"
    },
    {
        id: 2,
        image: GoldenSepeherd,
        text: "Golden_Sepherd",
        alt: "Golden Sepherd"
    },
]


const SuccessPartners = () => {
    const { locale } = useParams();
    const { t } = useTranslation()
    return (
        <div 
        id="partners"
        className=' bg-green-normal bg-opacity-[4%] pt-[100px] pb-[140px] text-center lg:px-[137px]'>
            <p className={cn("text-green-normal font-medium lg:text-3xl text-center", {
                'tracking-normal': locale === 'ar',
                'tracking-[0.3em]': locale === 'en',
            })}>{t("Success_Partners")}
            </p>


            {/* Card Starts */}

            <div className='grid grid-cols-5 gap-5  mt-9'>
                {SuccessPartnerData.map(({ id, image, text }, index) => (
                    <div key={id} className={cn("   shadow rounded h-[176px] bg-green-normal", {

                    })}>
                        <div className='h-[127px]  flex items-center justify-center bg-white rounded'>
                            <Image
                                src={image}
                                className=''
                                alt={text}
                            />
                        </div>


                        <p className='text-white flex items-center justify-center  text-base font-normal  h-[50px]'>{t(text)}</p>
                    </div>
                ))}
            </div>

            {/*  */}

            <div className='mt-16'>
                <p className={cn("text-green-normal font-medium lg:text-3xl text-center", {
                    'tracking-normal': locale === 'ar',
                    'tracking-[0.3em]': locale === 'en',
                })}>{t("Shepherds")}
                </p>


                {/* Card Starts */}

                <div className=' w-full flex  items-center justify-center  mx-auto   gap-5 mt-9'>
                    {SepherdData.map(({ id, image, text }, index) => (
                        <div key={id} className={cn("  min-w-[220px] shadow rounded h-[176px] bg-green-normal", {

                        })}>
                            <div className='h-[127px]  flex items-center justify-center bg-white rounded'>
                                <Image
                                    src={image}
                                    className=''
                                    alt={text}
                                />
                            </div>


                            <p className='text-white flex items-center justify-center  text-base font-normal  h-[50px]'>{t(text)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SuccessPartners