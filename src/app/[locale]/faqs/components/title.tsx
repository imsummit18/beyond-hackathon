'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter,
} from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Title = () => {
  const { locale } = useParams();
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');

  const searchQuery = searchParams.get('query')?.toString();

  useEffect(() => {
    if (searchQuery) {
      setSearch(searchQuery as string);
    }
    return () => {
      setSearch('');
    };
  }, [searchQuery]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set('query', search);
    } else {
      params.delete('query');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='search-block text-center'>
      <h1 className={cn("text-primary font-bold mb-[18px] uppercase tracking-[.3em]", {
        'tracking-normal': locale === 'ar',
        'tracking-[.3em]': locale === 'en',
      })}>
        {t('faq')}
      </h1>
      <p className={cn("text-grey-normal text-[16px]", {
        'tracking-normal': locale === 'ar',
        'tracking-[.1em]': locale === 'en',
      })}>{t('help')}</p>
      <form
        onSubmit={handleSubmit}
        className='flex justify-center items-center gap-x-2 mt-[25px]'
      >
        <div className='flex relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={13}
            height={13}
            fill='none'
            className={cn('absolute top-[13.5px]', {
              'right-3': locale === 'ar',
              'left-3': locale === 'en',
            })}
          >
            <path
              stroke='#B3BABD'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M9.883 9.883 12 12m-.611-5.788c0 2.879-2.326 5.212-5.194 5.212C3.325 11.424 1 9.09 1 6.213 1 3.333 3.326 1 6.194 1c2.869 0 5.195 2.333 5.195 5.212Z'
            />
          </svg>
          <Input
            type='text'
            placeholder={t('search')}
            className={cn(
              'bg-white border-primary-ultralight/40 h-[40px] rounded-[9px] placeholder:font-normal placeholder:primary-ultralight/40 tracking-[0.075em]',
              {
                'pl-8': locale === 'en',
                'pr-8': locale === 'ar',
              }
            )}
            onChange={handleInputChange}
            value={search}
            defaultValue={searchParams.get('query')?.toString()}
          />
        </div>
        <Button
          type='submit'
          className={cn("bg-secondary tracking-[.3em] text-[10px] font-normal rounded-[9px] h-[40px]", {
            'tracking-normal': locale === 'ar',
            'tracking-[.3em]': locale === 'en',
          })}
        >
          {t('search')}
        </Button>
      </form>
    </div>
  );
};
