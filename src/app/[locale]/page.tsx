import { auth } from '@/auth';
import TranslationsProvider from '@/components/translations-provider';
import initTranslations from '@/lib/i18n';
import { LocaleT } from '@/types';
import About from './participant/components/about';
import Banner from './participant/components/banner';
import FilmationTracks from './participant/components/filmation-tracks';
import SignIn from './participant/components/sign-in';

interface Params {
  params: {
    locale: LocaleT;
  };
}

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }: Params) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const session = await auth();

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className='mt-5'>
        <Banner isAuth={!!session} />
        <About />
        {/* <Leaders /> */}
        <FilmationTracks />
        {!session && <SignIn />}
      </main>
    </TranslationsProvider>
  );
}
