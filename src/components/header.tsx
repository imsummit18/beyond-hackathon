import React from 'react';
import { Icons } from './icons';

const Header = () => {
  return (
    <div className='bg-primary '>
      <div className='flex justify-between container items-baseline'>
        <div className='pt-[35px]'>
          <Icons.headerLogo />
        </div>

        <div className='text-right pb-[16px]'>
          <b className='text-white block text-sm tracking-[4.2px] font-bold uppercase'>
            Admin Dashboard
          </b>
          <span className='block text-secondary font-medium mt-[6px] leading-[24px]'>
            Welcome Nishad
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
