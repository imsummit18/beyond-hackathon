import TranslationsProvider from '@/components/translations-provider';
import initTranslations from '@/lib/i18n';
import { LocaleT } from '@/types';
import React from 'react';
import { Title } from './components/title';

const i18nNamespaces = ['remaining'];

const Layout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: LocaleT;
  };
}>) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className='FaqPage  py-14'>
        <div className='container'>
          <Title />
          <div className='mt-5 lg:mt-[45px] lg:mb-10'>
            <div className='rounded-2xl overflow-hidden shadow-container'>
              {children}
            </div>
          </div>
          {/* <div className="loader text-center">
          <Loader
            strokeWidth={1}
            absoluteStrokeWidth
            // className="inline animate-spin duration-1000 delay-1000"
            className="inline duration-1000 delay-1000"
          />
        </div> */}
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default Layout;
