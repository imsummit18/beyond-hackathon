'use client';

import { cn } from '@/lib/utils';
import { Dialog } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18nConfig';
import MainLogo from '../../public/images/blue-logo.svg';
import MainLogoG from '../../public/images/gray-logo.svg';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/#about' },
  // { name: 'leaders', href: '/#leaders' },
  { name: 'tracks', href: '/#tracks' },
  // { name: 'notice_board', href: '/notice' },
  { name: 'faqs', href: '/faqs' },
  { name: 'winners', href: '/winners' },
  // { name: 'public_voting', href: '/voting' },     //this is commented but it needs to be uncommented when feature is ready and also the file name should be changed to voting from votings
];
function Navigation({ isAuth }: { isAuth: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale } = useParams();
  const pathname = usePathname();

  const { i18n, t } = useTranslation();
  const router = useRouter();

  const currentLocale = i18n.language;

  const handleChange = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + pathname);
    } else {
      router.push(pathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  if (pathname === '/set-password') {
    return null;
  }

  return (
    <>
      <header className='inset-x-0 top-0 z-50 topnav bg-primary'>
        <div className='container'>
          {/* mobile nav */}
          {/* <div className=' flex lg:hidden lg:gap-x-8 justify-end pt-3 pb-3 '>
            <Link
              href={'/#login'}
              className={cn("text-[8px] ml-5 tracking-[0.15rem] uppercase font-light text-white hover:text-primary-lighter transition", {
                'tracking-[0.15rem]': locale === 'en',
                'tracking-normal': locale === 'ar',
              })}
            >
              {t('member_login')}
            </Link>
            <button
              onClick={handleChange}
              className={
                cn("text-[8px] ml-5 tracking-[0.15rem] uppercase font-light text-white hover:text-primary-lighter transition", {
                  'tracking-[0.15rem]': locale === 'en',
                  'tracking-normal': locale === 'ar',
                })
              }
            >
              العربية
            </button>
          </div> */}

          <div className='flex   lg:hidden gap-x-5 justify-end  pt-3 pb-3 '>
            {!isAuth && (
              <Link
                href={'/#login'}
                className={
                  cn("text-[10px] tracking-[0.15rem] uppercase font-light text-white hover:text-primary-normal transition", {
                    'tracking-[0.15rem]': locale === 'en',
                    'tracking-normal': locale === 'ar',
                  })
                }
              >
                {t('member_login')}
              </Link>
            )}
            <button
              onClick={handleChange}
              className={cn("text-[10px] tracking-normal uppercase font-light text-white hover:text-primary-lighter transition", {
              })}
            >
              {locale === 'en' ? 'العربية' : 'en'}
            </button>

            {isAuth && (
              <Link
                href='/participant/details'
                className={cn(
                  'text-[10px] tracking-[0.15rem] uppercase font-light text-white hover:text-primary-lighter transition',
                  {
                    'text-primary-lighter':
                      pathname === '/participant/details' ||
                      pathname === '/ar/participant/details',
                    "tracking-normal": locale === 'ar',
                    "tracking-[0.15rem]": locale === 'en',
                  }
                )}
              >
                {t('My_account')}
              </Link>
            )}

            {/* <Link
              href='/contact'
              className='text-[8px] ml-5 tracking-[0.15rem] uppercase font-light text-white hover:text-secondary transition'
            >
              {t('contact_us')}
            </Link> */}
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
                  onClick={() => {
                    setMobileMenuOpen(true)
                    router.push('/')
                  }}
                >
                  <span className='sr-only'>Open main menu</span>
                  <Menu strokeWidth={1} color='white' />
                </button>
              </div>
              <div className='topnav hidden lg:flex lg:gap-x-8 justify-end mb-[30px]'>
                {!isAuth && (
                  <Link
                    href={'/#login'}
                    className={
                      cn("text-[10px] tracking-[0.15rem] uppercase font-light text-white hover:text-primary-normal transition", {
                        'tracking-[0.15rem]': locale === 'en',
                        'tracking-normal': locale === 'ar',
                      })
                    }
                  >
                    {t('member_login')}
                  </Link>
                )}
                <button
                  onClick={handleChange}
                  className={cn("text-[10px] tracking-normal uppercase font-light text-white hover:text-primary-lighter transition", {
                  })}
                >
                  {locale === 'en' ? 'العربية' : 'en'}
                </button>

                {isAuth && (
                  <Link
                    href='/participant/details'
                    className={cn(
                      'text-[10px] tracking-[0.15rem] uppercase font-light text-white hover:text-primary-lighter transition',
                      {
                        'text-primary-lighter':
                          pathname === '/participant/details' ||
                          pathname === '/ar/participant/details',
                        "tracking-normal": locale === 'ar',
                        "tracking-[0.15rem]": locale === 'en',
                      }
                    )}
                  >
                    {t('My_account')}
                  </Link>
                )}

                {/* <Link
              href='/contact'
              className='text-[8px] ml-5 tracking-[0.15rem] uppercase font-light text-white hover:text-secondary transition'
            >
              {t('contact_us')}
            </Link> */}
              </div>
              <div className='hidden lg:flex lg:gap-x-12'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'text-[11px] tracking-[0.15rem] uppercase font-bold text-white hover:text-primary-lighter transition',
                      {
                        'text-primary-lighter':
                          item.href === pathname ||
                          `/ar${item.href}` === pathname,
                        'tracking-normal': locale === 'ar',
                        'tracking-[0.15rem]': locale === 'en',
                      }
                    )}
                  >
                    {t(`${item.name}`)}
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
              <Link href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <Image
                  className='h-8 w-auto'
                  src={MainLogoG}
                  alt='Picture of the logo'
                />
              </Link>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                <X strokeWidth={1} />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-10 pt-10'>
                  {navigation.map((item) => {
                    return (
                      <Link
                        onClick={() => setMobileMenuOpen(false)}
                        key={item.name}
                        href={item.href}
                        className={`link ${pathname === item.href ? 'active' : ''
                          } text-[14px] tracking-[0.15rem] flex flex-col  uppercase font-bold text-black hover:text-primary-lighter transition [&.active]:text-primary-lighter ${locale === "ar" && "tracking-normal"}`}
                      >
                        {t(`${item.name}`)}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

export default Navigation;
