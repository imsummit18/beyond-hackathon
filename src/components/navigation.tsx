'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import MainLogo from '../../public/images/gray-logo.svg';

const topnav = [
  { name: 'Members Login', href: 'login' },
  { name: 'العربية', href: '' },
  { name: 'Contact us', href: '/contact' },
];
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Leaders', href: '/leaders' },
  { name: 'Tracks', href: '/tracks' },
];

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='inset-x-0 top-0 z-50 topnav bg-white'>
      <div className='container'>
        <div className='flex lg:hidden lg:gap-x-8 justify-end pt-3 pb-3 '>
          {topnav?.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-[8px] ml-5 tracking-[0.15rem] uppercase font-light text-green-dark hover:text-primary transition'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <nav
          className='flex items-center justify-between pt-2 pb-6 lg:pt-5 lg:pb-5'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image
                className=' w-auto'
                src={MainLogo}
                alt='Picture of the author'
              />
            </Link>
          </div>
          <div className='right'>
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='topnav hidden lg:flex lg:gap-x-8 justify-end mb-[30px]'>
              {topnav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-[8px] tracking-[0.15rem] uppercase font-light text-green-dark hover:text-primary transition'
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-[11px] tracking-[0.15rem] uppercase font-light text-green-light hover:text-primary transition'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <Dialog
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image
                className='h-8 w-auto'
                src={MainLogo}
                alt='Picture of the author'
              />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='block text-[11px] tracking-[0.15rem] uppercase font-light text-green-light hover:text-primary transition'
                  >
                    {/* {item.name} */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navigation;
