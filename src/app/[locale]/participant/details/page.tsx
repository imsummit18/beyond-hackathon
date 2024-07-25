import { participantDetailsAction } from '@/actions/participant-details-action';
import TranslationsProvider from '@/components/translations-provider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import initTranslations from '@/lib/i18n';
import { LocaleT } from '@/types';
import DetailsHeaderSection from './components/details-header-section';
import FilesTabContent from './components/files-tab-content';
import ProfileTabContent from './components/profile-tab-content';
import { cn } from '@/lib/utils';
import { InviteMemberDialogBox } from './invite-team-dialog';
import { auth } from '@/auth';



const i18nNamespaces = ['register', 'participant', 'winner'];

const ParticipantDetailsPage = async ({
  params: { locale },
}: {
  params: {
    locale: LocaleT;
  };
}) => {
  const session: any = await auth();
  const response = await participantDetailsAction();
  const { resources, t } = await initTranslations(locale, i18nNamespaces);

  // will count the files which have the actual file
  const filesCount = response.data.files.filter(
    (file) => file.user_files !== null
  )?.length;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className='container max-w-[1200px] m-auto mt-[56px]'>
        <DetailsHeaderSection
          memberName={session?.team_member_details?.name}
          data={response}
        />

        <div className='relative  w-full pb-[48px] detail-info'>
          {
            session?.user_type === 'participant' && <div className='mt-[10px] sm:absolute'>
              <InviteMemberDialogBox />
            </div>
          }
          <Tabs className='mt-3' defaultValue='profiles'>
            <div
              className={cn('flex', {
                'justify-end': locale === 'en',
                'justify-start': locale === 'ar',
              })}
            >
              <TabsList
                className={cn('flex gap-3', {
                  '': locale === 'en',
                  'flex-row-reverse': locale === 'ar',
                })}
              >
                <TabsTrigger
                  value='profiles'
                  className={cn(
                    'w-fit p-[13px] uppercase  text-[10px] border-primary bg-background  hover:bg-background/90 h-[36px] tracking-[2.4px] rounded-[9px] font-bold text-primary data-[state=active]:text-white data-[state=active]:bg-primary data-[state=active]:hover:bg-primary/80',
                    {
                      'tracking-normal': locale === 'ar',
                      'tracking-[2.4px]': locale === 'en',
                    }
                  )}
                >
                  {t('participant:profiles')}
                </TabsTrigger>
                <TabsTrigger
                  value='files'
                  className={cn(
                    'w-fit p-[13px] uppercase text-center  text-[10px] border-primary bg-background  hover:bg-background/90 h-[36px] tracking-[2.4px] rounded-[9px] font-bold text-primary data-[state=active]:text-white data-[state=active]:bg-primary data-[state=active]:hover:bg-primary/80',
                    {
                      'tracking-normal': locale === 'ar',
                      'tracking-[2.4px]': locale === 'en',
                    }
                  )}
                // disabled={filesCount === 0}
                >
                  {t('participant:files')} ({filesCount})
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent
              value='profiles'
              className='w-full mt-[20px] p-0 !border-none'
            >
              <ProfileTabContent data={response} />
            </TabsContent>
            <TabsContent
              value='files'
              className='w-full mt-[20px] p-0 !border-none'
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
            >
              <FilesTabContent
                userType={session?.user_type}
                files={response.data.files}
                data={response.data.detail}
                filesCount={filesCount}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default ParticipantDetailsPage;
