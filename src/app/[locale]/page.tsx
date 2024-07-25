import { auth } from '@/auth';
import TranslationsProvider from '@/components/translations-provider';
import initTranslations from '@/lib/i18n';
import { LocaleT } from '@/types';
import About from './participant/components/about';
import Banner from './participant/components/banner';
import Tracks from './participant/components/tracks';
import Awards from './participant/components/awards';
import AcceptanceCriteria from './participant/components/acceptance-criteria';
import HackathonJourney from './participant/components/hackathon-journey';
import SuccessPartners from './participant/components/success-partners';

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
      <main >
        <Banner isAuth={!!session} />
        <div className='w-full max-w-[1440px]   mx-auto '>
          <About />
          <Tracks />
          <AcceptanceCriteria />
          <HackathonJourney/>
          <Awards/>
          <SuccessPartners/>

          {/* <FilmationTracks />
        {!session && <SignIn />} */}
        </div>
      </main>
    </TranslationsProvider>
  );
}
