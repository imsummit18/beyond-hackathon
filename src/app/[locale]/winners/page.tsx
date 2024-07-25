import React from 'react';
import { winnerAction } from '@/actions/winner-action';
import { LocaleT } from '@/types';
import TranslationsProvider from '@/components/translations-provider';
import initTranslations from '@/lib/i18n';
import NoWinner from './components/noWinner';
import { WinnerSection } from './components/winnerSection';

const i18nNamespaces = ['winners'];

const WinnersPage = async ({
  params: { locale },
}: {
  params: {
    locale: LocaleT;
  };
}) => {
  const response = await winnerAction();
  console.log(response, " response");
  const { resources } = await initTranslations(locale, i18nNamespaces);


  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className='container py-14'>
        {
          response?.data === null ?
            <NoWinner />
            :
            <WinnerSection winner={response} />
        }
      </div>

    </TranslationsProvider>
  );
};

export default WinnersPage;


