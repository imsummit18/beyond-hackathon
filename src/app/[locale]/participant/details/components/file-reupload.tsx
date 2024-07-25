import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { useState } from 'react';
import { FileType } from './files-tab-content';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import UploadDoc from '@/app/[locale]/register/components/uploadfile/uploadDoc';
import Iframe from './iframe';
import { Trash } from 'lucide-react';

interface FormSchemaType {
  user_id: number;
  has_technical_experience: string;
  film_industry_projects: string;
  tech_prj_youtube_url: any;
  tech_prj_document: any;
  film_prj_youtube_url: any;
  film_prj_document: any;
}

export const formSchema = (t: any) =>
  yup.object().shape({
    user_id: yup.number().nullable(),
    has_technical_experience: yup.string().oneOf(['1', '0']).default('0'),
    tech_prj_youtube_url: yup.string().when('has_technical_experience', {
      is: (val: string) => val === '1',
      then: () => yup.string().required('Please enter a video link'),
      otherwise: (schema) => schema.notRequired(),
    }),

    tech_prj_document: yup.string().when('has_technical_experience', {
      is: (val: string) => val === '1',
      then: () =>
        yup
          .mixed()
          .required(t('please_select_a_document'))
          .test('empty', t('please_select_a_document'), (value: any) => {
            if (Number(value.length) > 0) return true;
            return false;
          }),
      otherwise: (schema) => schema.notRequired(),
    }),
    film_industry_projects: yup.string().oneOf(['1', '0']).default('0'),
    film_prj_youtube_url: yup.string().when('film_industry_projects', {
      is: (val: string) => val === '1',
      then: () => yup.string().required('Please enter a video link').url("Please enter a valid URL"),
      otherwise: (schema) => schema.notRequired(),
    }),

    film_prj_document: yup.string().when('film_industry_projects', {
      is: (val: string) => val === '1',
      then: () =>
        yup
          .mixed()
          .required(t('please_select_a_document'))
          .test('empty', t('please_select_a_document'), (value: any) => {
            if (Number(value.length) > 0) return true;
            return false;
          }),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

// '1 = tech_youtube_url, 2 = tech_doc, 3 = film_youtube_url, 4 = film_doc'
const FileReupload = ({
  files,
  film_industry_projects,
  has_technical_experience,
}: {
  files: FileType[];
  film_industry_projects: string;
  has_technical_experience: string;
}) => {
  const { t } = useTranslation();

  const tech_prj_youtube_url =
    has_technical_experience === '1'
      ? files.find((file) => file.type === '1')?.user_files
      : '';
  const tech_prj_document =
    has_technical_experience === '1'
      ? files.find((file) => file.type === '2')?.user_files
      : '';
  const film_prj_youtube_url =
    film_industry_projects === '1'
      ? files.find((file) => file.type === '3')?.user_files
      : '';

  const film_prj_document =
    film_industry_projects === '1'
      ? files.find((file) => file.type === '4')?.user_files
      : '';

  const [techYoutubeUrl, setTechYoutubeUrl] = useState(tech_prj_youtube_url);
  const [techDocumentUrl, setTechDocumentUrl] = useState(tech_prj_document);
  const [fileYoutubeUrl, setFilmYoutubeUrl] = useState(film_prj_youtube_url);
  const [filmDocumentUrl, setFilmDocumentUrl] = useState(film_prj_document);

  const form = useForm<FormSchemaType>({
    defaultValues: {
      user_id: undefined,
      tech_prj_youtube_url: tech_prj_youtube_url,
      tech_prj_document: tech_prj_document,
      film_prj_youtube_url: film_prj_youtube_url,
      film_prj_document: film_prj_document,
      film_industry_projects: film_industry_projects,
      has_technical_experience: has_technical_experience,
    },
  });


  const submit = (values: FormSchemaType) => {
    // console.log('values', values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='uppercase  text-white px-[30px] text-[10px] bg-primary  hover:bg-primary/80 rounded-[9px] font-bold'
        >
          Resubmit the files
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[800px] w-full'>
        <DialogHeader>
          <DialogTitle className='text-center'>Resubmit the files</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)}>
              {form.watch('has_technical_experience') === '1' && (
                <div className='flex'>
                  <p>
                    Team members worked on technical projects in the past -
                    Video & Presentation
                  </p>
                  {!!techYoutubeUrl ? (
                    <div className='relative aspect-video w-full'>
                      <Iframe
                        file={tech_prj_youtube_url}
                        title='Film industry project'
                      />
                      <div
                        className='absolute -top-3 -right-3 shadow-xl rounded-full bg-white w-8 h-8 flex items-center justify-center cursor-pointer group'
                        onClick={() => setTechYoutubeUrl('')}
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
                          <FormLabel>Enter Youtube Link</FormLabel>
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

                  <UploadDoc form={form} name='tech_prj_document' />
                </div>
              )}

              <p>
                team members worked on technical projects related to the film in
                industry in the past - Video & Presentation
              </p>

              <Button>Submit</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FileReupload;
