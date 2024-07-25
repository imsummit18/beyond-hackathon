import TranslationsProvider from '@/components/translations-provider';
import initTranslations from '@/lib/i18n';
import { LocaleT } from '@/types';
import React from 'react';

const i18nNamespaces = ['reset-password'];

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
            {children}
        </TranslationsProvider>
    );
};

export default Layout;
