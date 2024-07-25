'use client';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { RegisterFormT } from '../hooks/schema.register';
import { useTranslation } from 'react-i18next';

const FormSchema = z.object({
  words: z
    .string()
    .min(100, {
      message: 'Words must be at least 100 characters.',
    })
    .max(300, {
      message: 'Words must not be longer than 300 characters.',
    }),
});

interface Props {
  form: UseFormReturn<RegisterFormT, any, undefined>;
  name: 'project_description' | 'film_project_description';
}

const ShortDescription = ({ form, name }: Props) => {

  const { t } = useTranslation();

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormControl>
              <Textarea
                className='placeholder:text-grey-normal p-[16px] text-[16px] bg-white border-primary-ultralight h-[145px] rounded-[9px] resize-none'
                // placeholder='Why do you want to join this challenge? Please provide up to 300 words.'
                placeholder={t('Why_do_you_want_to_join_this_challenge_Please_provide_up_to_300_words')}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* <UploadVideo />
      <UploadDoc /> */}
    </>
  );
};

export default ShortDescription;
