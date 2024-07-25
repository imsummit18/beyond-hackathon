import { auth } from '@/auth';
import TranslationsProvider from '@/components/translations-provider';
import initTranslations from '@/lib/i18n';
import { LocaleT } from '@/types';
import { redirect } from 'next/navigation';
import React from 'react';

const i18nNamespaces = ['register', 'participant', 'country'];

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
  const session = await auth();

  if (session) {
    redirect('/');
  }

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      {children}
    </TranslationsProvider>
  );
};

export default Layout;
