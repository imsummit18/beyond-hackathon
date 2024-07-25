import React from 'react'
import Image from 'next/image';
import MainLogo from '../../../../../public/images/blue-logo.svg';
import FooterLogo from '../../../../../public/images/footer_1.png';
import { Banner1, Banner2, Banner3, Banner4 } from '@/images';

const BannerImages = () => {
    return (
        <div>
            <div className='absolute left-8 top-4'>
                <Image
                    className=' w-auto'
                    src={MainLogo}
                    alt='Picture of the author'
                />
            </div>
            <div className='absolute right-8 top-0'>
                <Image
                    className=' w-auto lg:h-[60px]'
                    src={FooterLogo}
                    alt='Footer Logo'
                />
            </div>

            <div className='absolute left-[23%] -top-[15%]'>
                <Image
                    className=' w-auto lg:h-[102px]'
                    src={Banner1}
                    alt='Banner First Logo'
                />
            </div>
            <div className='absolute right-[23%]  -top-[5%]'>
                <Image
                    className=' w-auto lg:h-[110px]'
                    src={Banner2}
                    alt='Banner Second Logo'
                />
            </div>

            <div className='absolute left-[10%]  bottom-[8%]'>
                <Image
                    className=' w-auto lg:h-[110px]'
                    src={Banner3}
                    alt='Banner Third Logo'
                />
            </div>
            <div className='absolute right-[5%]  top-[40%]'>
                <Image
                    className=' w-auto lg:h-[110px]'
                    src={Banner4}
                    alt='Banner Fourth Logo'
                />
            </div>
        </div>
    )
}

export default BannerImages