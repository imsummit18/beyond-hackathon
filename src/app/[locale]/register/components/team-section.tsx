import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ReactSelect } from '@/components/ui/react-select';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import ShortDescription from './shortDescription';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import UploadVideo from './uploadfile/uploadVideo';
import UploadDoc from './uploadfile/uploadDoc';
import { RegisterFormT } from '../hooks/schema.register';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { areaOfExpertiseData } from './register-data';
import { useTranslation } from 'react-i18next';

interface Props {
  form: UseFormReturn<RegisterFormT, any, undefined>;
}

const TeamSection = ({ form }: Props) => {
  const { t } = useTranslation();
  const { locale } = useParams();
  return (
    <div className='p-[25px] lg:p-[60px] mt-[12px] bg-white rounded-[4px] grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] lg:gap-x-[100px] gap-y-6 '>
      <FormField
        control={form.control}
        name='combined_areas_of_expertise'
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('participant:team_expertise')}</FormLabel>
            <FormControl>
              <ReactSelect
                onChange={field.onChange}
                value={field.value}
                isMulti
                placeholder={t('Select_Area_of_Expertise')}
                options={areaOfExpertiseData.map((expertise) => ({
                  value:
                    expertise.toLowerCase() === 'other'
                      ? 'Other'
                      : t(expertise),
                  label: t(expertise),
                }))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {form.watch('combined_areas_of_expertise') &&
        form
          .watch('combined_areas_of_expertise')
          .find((expertise) => expertise.label.toLowerCase() === 'other') && (
          <FormField
            control={form.control}
            name='combined_areas_of_expertise_other'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('Teams_Combined_Areas_of')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('Enter_your_combine_area_of_expertise')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

      <FormField
        control={form.control}
        name='has_technical_experience'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel>{t('participant:work_in_technical_projects')}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <div
                  className={cn('flex items-center space-x-2 gap-2', {
                    'flex-row-reverse': locale === 'ar',
                  })}
                >
                  <RadioGroupItem id='1' value='1' />
                  <Label
                    className='text-primary-normal font-normal text-[15px]'
                    htmlFor='1'
                  >
                    {t('Yes')}
                  </Label>
                </div>
                <div
                  className={cn('flex items-center space-x-2 gap-2', {
                    'flex-row-reverse': locale === 'ar',
                  })}
                >
                  <RadioGroupItem id='0' value='0' />
                  <Label
                    className='text-primary-normal font-normal text-[15px]'
                    htmlFor='0'
                  >
                    {t('No')}
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {form.watch('has_technical_experience') === '1' && (
        <>
          <ShortDescription form={form} name='project_description' />
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

          {/* <UploadVideo form={form} name="tech_prj_video" /> */}
          <UploadDoc form={form} name='tech_prj_document' />
        </>
      )}
      <FormField
        control={form.control}
        name='film_industry_projects'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel>{t('participant:work_in_film_projects')}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <div
                  className={cn('flex items-center space-x-2 gap-2', {
                    'flex-row-reverse': locale === 'ar',
                  })}
                >
                  <RadioGroupItem id='1' value='1' />
                  <Label
                    className='text-primary-normal font-normal text-[15px]'
                    htmlFor='1'
                  >
                    {t('Yes')}
                  </Label>
                </div>
                <div
                  className={cn('flex items-center space-x-2 gap-2', {
                    'flex-row-reverse': locale === 'ar',
                  })}
                >
                  <RadioGroupItem id='0' value='0' />
                  <Label
                    className='text-primary-normal font-normal text-[15px]'
                    htmlFor='0'
                  >
                    {t('No')}
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {form.watch('film_industry_projects') === '1' && (
        <>
          <ShortDescription form={form} name='film_project_description' />
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
          {/* <UploadVideo form={form} name="film_prj_video" /> */}
          <UploadDoc form={form} name='film_prj_document' />
        </>
      )}

      <FormField
        control={form.control}
        name='program_participation'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel>
              {t(
                'Have_you_team_members_participated_in_competitions_accelerators_trainings_or_bootcamp_program'
              )}
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <div
                  className={cn('flex items-center space-x-2 gap-2', {
                    'flex-row-reverse': locale === 'ar',
                  })}
                >
                  <RadioGroupItem id='1' value='1' />
                  <Label
                    className='text-primary-normal font-normal text-[15px]'
                    htmlFor='1'
                  >
                    {t('Yes')}
                  </Label>
                </div>
                <div
                  className={cn('flex items-center space-x-2 gap-2', {
                    'flex-row-reverse': locale === 'ar',
                  })}
                >
                  <RadioGroupItem id='0' value='0' />
                  <Label
                    className='text-primary-normal font-normal text-[15px]'
                    htmlFor='0'
                  >
                    {t('No')}
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {form.watch('program_participation') === '1' && (
        <FormField
          control={form.control}
          name='program_details'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Name_of_competition_training_program')}</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder={t('Enter_name_of_competition_training_program')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={form.control}
        name='filimathon_reason'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel>
              {t('participant:why_join_Industrial_Hackathon')}
            </FormLabel>
            <FormControl>
              <Textarea placeholder={t('Enter_your_interest')} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`heard_about_filimathon`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {t('participant:how_you_hear_Industrial_Hackathon')}
            </FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder={t('Select_your_Filmathon')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={t('Recommendation')}>
                    {t('Recommendation')}
                  </SelectItem>
                  <SelectItem value={t('Private_Invitation')}>
                    {t('Private_Invitation')}
                  </SelectItem>
                  <SelectItem value={t('Filmthon_Website')}>
                    {t('Filmthon_Website')}
                  </SelectItem>
                  <SelectItem value={t('University_Invitation')}>
                    {t('University_Invitation')}
                  </SelectItem>
                  <SelectItem value={t('Social_Media_Platforms')}>
                    {t('Social_Media_Platforms')}
                  </SelectItem>
                  <SelectItem value={t('Social_Media_Influencers')}>
                    {t('Social_Media_Influencers')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default TeamSection;
