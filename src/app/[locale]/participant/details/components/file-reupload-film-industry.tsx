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
import useFileReuploadFilmIndustry from '../hooks/use-file-reupload-film-industry';
import FilePreview from './file-preview';
import { FileType } from './files-tab-content';
import Iframe from './iframe';
import { youtubeUrlRegex } from './file-reupload-technical';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface FilmFormSchemaType {
  user_id: number;
  film_prj_youtube_url: any;
  film_prj_document: any;
}

export const formSchema = (t: any) =>
  yup.object().shape({
    user_id: yup.number().nullable(),
    film_prj_youtube_url: yup
      .string()
      .matches(youtubeUrlRegex, 'Enter a valid YouTube embed URL')
      .required(t('Please_enter_a_video_link')),
    film_prj_document: yup
      .mixed()
      .required(t('please_select_a_document'))
      .test('empty', t('please_select_a_document'), (value: any) => {
        if (Number(value.length) > 0) return true;
        return false;
      }),
  });

const FileReuploadFilmIndustry = ({ files, title }: { files: FileType[], title?: string }) => {

  const { locale } = useParams()
  const { t } = useTranslation();

  const { isLoading, open, setOpen, submit } = useFileReuploadFilmIndustry({
    handleClose,
  });

  const film_prj_youtube_url =
    files.find((file) => file.type === '3')?.user_files ?? '';

  const film_prj_document =
    files.find((file) => file.type === '4')?.user_files ?? '';

  const [filmYoutubeUrl, setFilmYoutubeUrl] = useState('');
  const [filmDocumentUrl, setFilmDocumentUrl] = useState('');

  const form = useForm<FilmFormSchemaType>({
    resolver: yupResolver(formSchema(t)) as any,
    defaultValues: {
      user_id: undefined,
      film_prj_youtube_url: '',
      film_prj_document: '',
    },
  });

  useEffect(() => {
    if (open) {
      setFilmYoutubeUrl(film_prj_youtube_url);
      setFilmDocumentUrl(film_prj_document);
    } else {
      setFilmYoutubeUrl('');
      setFilmDocumentUrl('');
    }
  }, [film_prj_youtube_url, film_prj_document, open]);

  useEffect(() => {
    if (filmYoutubeUrl)
      form.setValue(
        'film_prj_youtube_url',
        filmYoutubeUrl ? `https://www.youtube.com/embed/${filmYoutubeUrl}` : ''
      );
    if (filmDocumentUrl) form.setValue('film_prj_document', filmDocumentUrl);
  }, [filmYoutubeUrl, filmDocumentUrl]);

  function handleClose() {
    setFilmYoutubeUrl(film_prj_youtube_url);
    setFilmDocumentUrl(film_prj_document);
    setOpen(false);
    form.reset();
    form.clearErrors();
  }

  return (
    <div>
      <Button
        variant='outline'
        size='sm'
        className={cn('uppercase  text-white px-[30px] text-[10px] bg-primary  hover:bg-primary/80 rounded-[9px] font-bold', {
          'tracking-normal': locale === 'ar'
        })}
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
                'participant:Team_members_worked_on_technical_projects_related_to_th_film_in_industry_in_the_past_Video_Presentation'
              )}
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(submit)}>
                <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-6 my-6'>
                  {!!filmYoutubeUrl ? (
                    <div className='relative aspect-video w-full'>
                      <Iframe
                        file={film_prj_youtube_url}
                        title='Film industry project'
                      />
                      <div
                        className='absolute -top-3 -right-3 shadow-xl rounded-full bg-white w-8 h-8 flex items-center justify-center cursor-pointer group'
                        onClick={() => {
                          setFilmYoutubeUrl('');
                          form.setValue('film_prj_youtube_url', '');
                        }}
                      >
                        <Trash className='size-4 stroke-red-500 group-hover:scale-125 transition duration-300 ease-in-out' />
                      </div>
                    </div>
                  ) : (
                    <FormField
                      control={form.control}
                      name={`film_prj_youtube_url`}
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
                  {!!filmDocumentUrl ? (
                    <div className='relative'>
                      <FilePreview file={film_prj_document} />
                      <div
                        className='absolute -top-3 -right-3 shadow-xl rounded-full bg-white w-8 h-8 flex items-center justify-center cursor-pointer group'
                        onClick={() => {
                          setFilmDocumentUrl('');
                          form.setValue('film_prj_document', '');
                        }}
                      >
                        <Trash className='size-4 stroke-red-500 group-hover:scale-125 transition duration-300 ease-in-out' />
                      </div>
                    </div>
                  ) : (
                    <UploadDoc form={form} name='film_prj_document' />
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
    </div >
  );
};

export default FileReuploadFilmIndustry;
