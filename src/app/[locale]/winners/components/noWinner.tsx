
"use client";
import React from 'react'
import { useTranslation } from 'react-i18next';



const NoWinner = () => {
    const { t } = useTranslation()
    return (
        <div className='h-[50vh] text-xl font-medium text-center text-primary mb-[50px]'>
            <div className='flex justify-center items-center h-full'>
                {t('No_winners_yet')}
            </div>
        </div>
    )
}

export default NoWinner
