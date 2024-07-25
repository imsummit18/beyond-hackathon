'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import MainLogo from '../../public/images/blue-logo.svg';
import FooterLogo from '../../public/images/footer_1.png';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { Instagram, Twitter, Youtube } from '../../public/icons';

function Footer() {
  const { t } = useTranslation();
  const pathname = usePathname();

  if (pathname === '/set-password') {
    return null;
  }

  return (
    <div className='footer pt-[20px] pb-[20px] bg-primary-500 text-white'>
      {/* <div className='container'>
        <div className='text-center'>
          <Image
            className='inline'
            src={fImage}
            alt='Picture of the author'
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <p className='uppercase text-[8px] tracking-[0.2em] mb-0 mt-[15px]'>
            {t('ALL_RIGHTS_RESERVED_FILM_COMMISSION')} ©2024
          </p>
        </div>
      </div> */}

      <div className='container lg:py-24'>

        <div className='w-full flex justify-between'>
          {/* <div className='flex lg:flex-1'> */}
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image
              className=' w-auto lg:h-[84px]'
              src={FooterLogo}
              alt='Footer Logo'
            />
          </Link>
          {/* </div> */}
          {/* <div className='flex lg:flex-1'> */}
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image
              className='w-auto h-[40px] lg:h-auto'
              src={MainLogo}
              alt='Picture of the author'
            />
          </Link>
          {/* </div> */}
        </div>

        <Separator className="h-[1px] mt-7 mb-5 lg:mt-14 lg:mb-10" />

        <div className='flex  flex-col lg:flex-row lg:items-center justify-between'>
          <div className='flex  flex-col lg:flex-row gap-4 lg:gap-[72px] font-medium text-sm lg:text-base'>
            <p>{t("Copyright")}</p>
            <p className='underline'>{t("Terms_And_Conditions")}</p>
          </div>

          <div className='flex mt-5 lg:mt-0 gap-5 items-center'>
            <Link href={"/"}>
              <Twitter size={20} />
            </Link>
            <Link href="/">
              <Youtube size={20} />
            </Link>
            <Link href={"/"}>
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
