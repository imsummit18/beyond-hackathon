import { LocaleT } from '@/types';
import initTranslations from '@/lib/i18n';
import TranslationsProvider from '@/components/translations-provider';
import { Title } from './components/title';
import SelectWinnerForm from './select-winners/components/select-winner-form';
import { getParticipantsListAction } from '@/actions/get-participants-list';
import { VotingProvider } from './select-winners/components/voting-context';

const i18nNamespaces = ['public-voting'];

const VotingPage = async ({
  params: { locale },
}: {
  params: {
    locale: LocaleT;
  };
}) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  const { data } = await getParticipantsListAction();

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className='py-[60px] bg-white'>
        <div className='container'>
          <Title />
          <VotingProvider participants={data}>
            <SelectWinnerForm />
          </VotingProvider>
          {/* <SelectVotingForm /> */}
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default VotingPage;
