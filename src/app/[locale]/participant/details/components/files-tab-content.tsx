'use client';

import { Icons } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import FileReupload from './file-reupload';
import Iframe from './iframe';
import FileReuploadTechnical from './file-reupload-technical';
import FilePreview from './file-preview';
import FileReuploadFilmIndustry from './file-reupload-film-industry';
import { cn } from '@/lib/utils';

export type FileType = {
  type?: string | null;
  user_files?: string | null;
};
interface Props {
  data: {
    id: number;
    area_of_expertise: string[];
    area_of_expertise_other: string;
    combined_areas_of_expertise: string[];
    combined_areas_of_expertise_other: string;
    has_technical_experience: string;
    project_description: string;
    film_industry_projects: string;
    film_project_description: string;
    program_participation: string;
    program_details: string;
    filimathon_reason: string;
    heard_about_filimathon: string;
    // tech_prj_video: string | null;
    tech_prj_youtube_url: string | null;
    tech_prj_document: string | null;
    // film_prj_video: string | null;
    film_prj_youtube_url: string | null;
    film_prj_document: string | null;
  };
  files: FileType[];
  filesCount: number;
  userType: string;
}
const FilesTabContent = ({ data, files, filesCount, userType }: Props) => {
  // console.log('files', files);
  const { t } = useTranslation();

  const hasTechnicalExperience = files?.some((item) => (item.type === '1' || item.type === '2'));
  // console.log("has technical experience", hasTechnicalExperience)
  const hasFilmIndustryExperience = files?.some((item) => (item.type === '3' || item.type === '4'));

  return (
    <Card className='relative bg-white pt-[25px] pb-[40px] px-[40px] lg:px-[90px] rounded-[20px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[#868F94] capitalize'>
          {t('participant:files')} ({filesCount})
        </span>
      </div>
      <CardContent className='space-y-8 px-0 mt-[10px]'>
        {/* NOTE: technical experience */}
        {(data.has_technical_experience === '1' || '0') && (
          <div className='col-span-2'>
            <div className='mb-4'>
              <h3 className='text-base pb-1 font-medium mb-2'>
                {t(
                  'participant:Team_members_worked_on_technical_projects_in_the_past_Video_Presentation'
                )}
              </h3>
              {userType === 'participant' &&
                <div className={cn("flex", {
                  "justify-end": hasTechnicalExperience === true,
                  "justify-start": hasTechnicalExperience === false
                })}>
                  <FileReuploadTechnical
                    title={hasTechnicalExperience ? t('participant:resubmit_the_files') : t('participant:add_new_files')}
                    files={files} />
                </div>}
            </div>
            <div className='grid grid-cols-1 gap-y-3 md:grid-cols-2 gap-x-[30px]'>
              {files.map((item) => {
                if (item.type === '1' && item.user_files) {
                  return (
                    <div className='aspect-video w-full' key={item.type}>
                      <Iframe
                        file={item?.user_files}
                        title='Film industry project'
                      />
                    </div>
                  );
                }
              })}

              {files.map((item) => {
                if (item.type === '2' && item.user_files) {
                  return <FilePreview file={item.user_files} key={item.type} />;
                }
              })}
            </div>
          </div>
        )}

        {/* NOTE: film industry */}
        {(data.film_industry_projects === '1' || '0') && (
          <div>
            <div className='mb-4'>
              <h3 className='text-base pb-1 font-medium mb-2'>
                {t(
                  'participant:Team_members_worked_on_technical_projects_related_to_th_film_in_industry_in_the_past_Video_Presentation'
                )}
              </h3>
              {
                userType === 'participant' &&
                <div className={cn("flex", {
                  "justify-end": hasFilmIndustryExperience === true,
                  "justify-start": hasFilmIndustryExperience === false
                })}>
                  <FileReuploadFilmIndustry
                    title={hasFilmIndustryExperience ? t('participant:resubmit_the_files') : t('participant:add_new_files')}
                    files={files} />
                </div>
              }
            </div>
            <div className='grid grid-cols-1 gap-y-3 md:grid-cols-2 gap-x-[30px]'>
              {files.map((item) => {
                if (item.type === '3' && item.user_files) {
                  return (
                    <div className='aspect-video w-full' key={item.type}>
                      <Iframe
                        file={item?.user_files}
                        title='Film industry project'
                      />
                    </div>
                  );
                }
              })}

              {files.map((item) => {
                if (item.type === '4' && item.user_files) {
                  return <FilePreview file={item.user_files} key={item.type} />;
                }
              })}
            </div>
          </div>
        )}

        {/* {data.has_technical_experience === '1' &&
          } */}
        {/* {data.film_industry_projects === '1' &&
         } */}
        {/* {data.has_technical_experience === '1' && data.tech_prj_document && (
          <Card className='px-4 py-3 h-max flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              {data.tech_prj_document.includes('pdf') ? (
                <Icons.filePdfIcon />
              ) : (
                <Icons.pptxIcon />
              )}

              <a
                href={data.tech_prj_document}
                target='_blank'
                rel='noreferrer'
                className='hover:underline underline-offset-2'
              >
                {data.tech_prj_document.includes('pdf')
                  ? 'file.pdf'
                  : 'file.docx'}
              </a>
            </div>
            <a href={data.tech_prj_document} target='_blank' rel='noreferrer'>
              <Icons.fileDownloadIcon />
            </a>
          </Card>
        )} */}

        {/* {data.film_industry_projects === '1' && data.film_prj_document && (
          <Card className='px-4 py-3 h-max flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              {data.film_prj_document.includes('pdf') ? (
                <Icons.filePdfIcon />
              ) : (
                <Icons.pptxIcon />
              )}

              <a
                href={data.film_prj_document}
                target='_blank'
                rel='noreferrer'
                className='hover:underline underline-offset-2'
              >
                {data.film_prj_document.includes('pdf')
                  ? 'file.pdf'
                  : 'file.docx'}
              </a>
            </div>
            <a href={data.film_prj_document} target='_blank' rel='noreferrer'>
              <Icons.fileDownloadIcon />
            </a>
          </Card>
        )} */}
      </CardContent>
    </Card>
  );
};

export default FilesTabContent;
