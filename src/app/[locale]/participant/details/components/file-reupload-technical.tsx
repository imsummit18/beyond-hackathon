import UploadDoc from '@/app/[locale]/register/components/uploadfile/uploadDoc';
import { Button } from '@/components/ui/button';
import ButtonLoading from '@/components/ui/button-loading';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import useFileReuploadTechnical from '../hooks/use-file-reupload-technical';
import FilePreview from './file-preview';
import { FileType } from './files-tab-content';
import Iframe from './iframe';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';

export interface TechnicalFormSchemaType {
  user_id: number;
  tech_prj_youtube_url: any;
  tech_prj_document: any;
}

export const youtubeUrlRegex =
  /^((?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/|v\/|.+\?v=|\/)?([A-Za-z0-9_-]{11})(?:\S*)?)$/;

export const formSchema = (t: any) =>
  yup.object().shape({
    user_id: yup.number().nullable(),
    tech_prj_youtube_url: yup
      .string()
      .matches(youtubeUrlRegex, 'Enter a valid YouTube embed URL')
      .required(t('Please_enter_a_video_link')),
    tech_prj_document: yup
      .mixed()
      .required(t('please_select_a_document'))
      .test('empty', t('please_select_a_document'), (value: any) => {
        if (Number(value.length) > 0) return true;
        return false;
      }),
  });

const FileReuploadTechnical = ({ files, title }: { files: FileType[], title?: string }) => {
  const { locale } = useParams()
  const { t } = useTranslation();

  const tech_prj_youtube_url =
    files.find((file) => file.type === '1')?.user_files ?? '';

  const tech_prj_document =
    files.find((file) => file.type === '2')?.user_files ?? '';

  const [techYoutubeUrl, setTechYoutubeUrl] = useState('');
  const [techDocumentUrl, setTechDocumentUrl] = useState('');

  const { isLoading, open, setOpen, submit } = useFileReuploadTechnical({
    handleClose,
  });

  const form = useForm<TechnicalFormSchemaType>({
    resolver: yupResolver(formSchema(t)) as any,
    defaultValues: {
      user_id: undefined,
      tech_prj_youtube_url: '',
      tech_prj_document: '',
    },
  });

  useEffect(() => {
    if (open) {
      setTechYoutubeUrl(tech_prj_youtube_url);
      setTechDocumentUrl(tech_prj_document);
    } else {
      setTechYoutubeUrl('');
      setTechDocumentUrl('');
    }
  }, [tech_prj_youtube_url, tech_prj_document, open]);

  useEffect(() => {
    if (techYoutubeUrl)
      form.setValue(
        'tech_prj_youtube_url',
        techYoutubeUrl ? `https://www.youtube.com/embed/${techYoutubeUrl}` : ''
      );
    if (techDocumentUrl) form.setValue('tech_prj_document', techDocumentUrl);
  }, [techYoutubeUrl, techDocumentUrl]);

  function handleClose() {
    setTechYoutubeUrl(tech_prj_youtube_url);
    setTechDocumentUrl(tech_prj_document);
    setOpen(false);
    form.reset();
    form.clearErrors();
  }

  return (
    <div>
      <Button
        variant='outline'
        size='sm'
        className={
          cn("uppercase  text-white px-[30px] text-[10px] bg-primary  hover:bg-primary/80 rounded-[9px] font-bold", {
            "tracking-normal": locale === 'ar'

          })
        }
        onClick={() => setOpen(true)}
      >
        {title}
      </Button>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className='max-w-[800px] w-full'>
          <DialogHeader className='text-left'>
            <DialogTitle className='first-letter:capitalize'>
              {title}
            </DialogTitle>
            <p>
              {t(
                'participant:Team_members_worked_on_technical_projects_in_the_past_Video_Presentation'
              )}
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(submit)}>
                <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-6 my-6'>
                  {!!techYoutubeUrl ? (
                    <div className='relative aspect-video w-full'>
                      <Iframe
                        file={tech_prj_youtube_url}
                        title='Film industry project'
                      />
                      <div
                        className='absolute -top-3 -right-3 shadow-xl rounded-full bg-white w-8 h-8 flex items-center justify-center cursor-pointer group'
                        onClick={() => {
                          setTechYoutubeUrl('');
                          form.setValue('tech_prj_youtube_url', '');
                        }}
                      >
                        <Trash className='size-4 stroke-red-500 group-hover:scale-125 transition duration-300 ease-in-out' />
                      </div>
                    </div>
                  ) : (
                    <FormField
                      control={form.control}
                      name={`tech_prj_youtube_url`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('Enter_Youtube_Link')}</FormLabel>
                          <FormControl>
                            <Input
                              type='text'
                              placeholder={t('Paste_the_YouTube_URL_here')}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  {!!techDocumentUrl ? (
                    <div className='relative'>
                      <FilePreview file={tech_prj_document} />
                      <div
                        className='absolute -top-3 -right-3 shadow-xl rounded-full bg-white w-8 h-8 flex items-center justify-center cursor-pointer group'
                        onClick={() => {
                          setTechDocumentUrl('');
                          form.setValue('tech_prj_document', '');
                        }}
                      >
                        <Trash className='size-4 stroke-red-500 group-hover:scale-125 transition duration-300 ease-in-out' />
                      </div>
                    </div>
                  ) : (
                    <UploadDoc form={form} name='tech_prj_document' />
                  )}
                </div>

                <div className='flex justify-end'>
                  <ButtonLoading isLoading={isLoading}>
                    {t('participant:submit')}
                  </ButtonLoading>
                </div>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FileReuploadTechnical;
