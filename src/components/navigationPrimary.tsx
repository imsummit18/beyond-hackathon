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
import { Button } from './ui/button';
import { Icons } from './icons';
import ButtonWithIcon from './ui/button-with-icon';

// const navigation = [
//   { name: 'home', href: '/' },
//   { name: 'about', href: '/#about' },
//   { name: 'tracks', href: '/#tracks' },
//   { name: 'faqs', href: '/faqs' },
//   { name: 'winners', href: '/winners' },
// ];

const navigation = [
  { name: 'Challenges', href: '/#challenges' },
  { name: 'Awards', href: '/#awards' },
  { name: 'Previous_Versions', href: '/previous-versions' },
  { name: 'Common_Questions', href: '/faqs' },
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
      <header className='inset-x-0 top-0 z-50 topnav bg-primary-500'>
        <div className='container'>

          {/* <div className='flex   lg:hidden gap-x-5 justify-end  pt-3 pb-3 '>
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

          </div> */}

          <nav
            className='flex items-center justify-between pt-2 pb-6 lg:pt-10 lg:pb-10'
            aria-label='Global'
          >
            {/* <div className='flex lg:flex-1'>
              <Link href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <Image
                  className=' w-auto'
                  src={MainLogo}
                  alt='Picture of the author'
                />
              </Link>
            </div> */}


            {/* <div className='right'> */}
            {/* <div className='flex lg:hidden'>
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

              </div> */}

            <div className='w-full flex items-center justify-between'>
              <div className='hidden lg:flex  items-center lg:gap-x-12'>
                <Link href="/">
                  <Button
                    className=' border border-secondary text-secondary bg-transparent rounded-[10px] h-9'>{t("Main")}</Button>
                </Link>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      ' tracking-[0.15rem] uppercase font-bold text-white hover:text-primary-lighter transition',
                      {
                        'text-primary-lighter':
                          item.href === pathname ||
                          `/ar${item.href}` === pathname,
                        'tracking-normal text-base': locale === 'ar',
                        'tracking-[0.15rem] text-[12px]': locale === 'en',
                      }
                    )}
                  >
                    {t(`${item.name}`)}
                  </Link>
                ))}
              </div>
              <div className='flex items-center gap-4'>
                <button
                  onClick={handleChange}
                  className={cn("text-[10px] tracking-normal uppercase font-light text-white hover:text-primary-lighter transition", {
                  })}
                >
                  {locale === 'en' ? 'العربية' : 'en'}
                </button>
                <Link href="sign-in">
                  <ButtonWithIcon
                    icon={<Icons.personIcon />}
                    className={cn("text-white font-normal bg-transparent border-[2px] rounded-[10px] h-9 border-primary ", {
                      'text-base': locale === 'ar',
                      'text-[12px]': locale === 'en',
                    })}>
                    {t("Sign_In")}
                  </ButtonWithIcon>
                </Link>

              </div>
            </div>
            {/* </div> */}
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
