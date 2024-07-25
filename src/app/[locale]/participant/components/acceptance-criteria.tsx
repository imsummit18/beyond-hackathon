"use client";
import { Bulb, EighteenPlus, Map, Peoples, Prototype } from '@/images';
import { cn } from '@/lib/utils'
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AcceptanceCriteriaData = [
    {
        id: 1,
        image: Map,
        text: "Leader_Nationality",
        alt: "Map"
    },
    {
        id: 2,
        image: EighteenPlus,
        text: "Age_Size",
        alt: "Age Size"
    },
    {
        id: 3,
        image: Prototype,
        text: "Prototype",
        alt: "Prototype"
    },
    {
        id: 4,
        image: Bulb,
        text: "Idea",
        alt: "Idea"
    },
    {
        id: 5,
        image: Peoples,
        text: "Team_Size",
        alt: "Peoples"
    },
]

const AcceptanceCriteria = () => {
    const { locale } = useParams()
    const { t } = useTranslation()
    return (
        <div className='pt-[100px] pb-[140px] text-center lg:px-[137px]'>
            <p className={cn("text-secondary-500 font-medium lg:text-3xl text-center", {
                'tracking-normal': locale === 'ar',
                'tracking-[0.3em]': locale === 'en',
            })}>{t("Acceptance_Criteria")}</p>

            <div className='grid grid-cols-5 mt-9 '>
                {AcceptanceCriteriaData.map(({ id, image, text }, index) => (
                    <div key={id} className={cn("px-6 w-[207px] rounded h-[240px] bg-[red] py-8 flex flex-col gap-y-8 items-center", {
                        'bg-secondary-500': index % 2 !== 0,
                        'bg-primary': index % 2 === 0,
                        'h-[270px]': locale === 'en'
                    })}>
                        <Image
                            src={image}
                            className='w-[100px] h-[70px]'
                            alt={text}
                        />
                        <p className=' w-[150px] text-white text-base font-normal'>{t(text)}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AcceptanceCriteria