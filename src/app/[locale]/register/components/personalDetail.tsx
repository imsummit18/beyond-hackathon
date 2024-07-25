import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ReactSelect } from '@/components/ui/react-select';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UseFormReturn } from 'react-hook-form';
import OctagonIcon from './octagon-icon';
import { RegisterFormT } from '../hooks/schema.register';
import {
  areaOfExpertiseData,
  cityData,
  countryOfResidenceData,
} from './register-data';
import ErrorMessage from '@/components/error-message';
import { PhoneInput } from '@/components/ui/phone-input';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import TrackField from "./trackField";

export interface Props {
  form: UseFormReturn<RegisterFormT, any, undefined>;
}

const PersonalDetail = ({ form }: Props) => {
  const { locale } = useParams()

  const { t } = useTranslation();

  return (
    <div className='p-[25px] lg:p-[60px] mt-[12px] bg-white rounded-[4px]'>

      <TrackField form={form} />

      <h2 className={
        cn('text-primary text-[14px] font-bold uppercase tracking-[.3em] mb-[20px] lg:mb-[40px]', {
          'tracking-[0.3em]': locale === 'en',
          'tracking-normal': locale === 'ar'
        })
      }>
        {t('personal_detail')}
      </h2>


      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] lg:gap-x-[100px] gap-y-6'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('participant:name')}</FormLabel>
              <FormControl>
                <Input placeholder={t('Full_Name')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('participant:email')}</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder={t('Enter_your_email')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='mobile'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('participant:phone')}</FormLabel>
              <FormControl>
                <PhoneInput
                  // placeholder='551082945'
                  // placeholder={t('Mobile_Number')}

                  {...field}
                />
                {/* <MobileInput /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='nationality'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('participant:nationality')}</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(e: any) => {
                    field.onChange(e);
                    form.setValue('country', undefined);
                    form.setValue('country_other', '');
                    form.setValue('city', '');
                    form.setValue('city_other', '');
                  }}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('Choose_Nationality')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='saudi'>{t('country:Saudi')}</SelectItem>
                    <SelectItem value='non-saudi'>
                      {t('country:Non_Saudi')}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* nationality */}
        {form.watch('nationality') === 'non-saudi' && (
          <FormField
            control={form.control}
            name='country'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('participant:country')}</FormLabel>
                <FormControl>
                  <ReactSelect
                    onChange={field.onChange}
                    value={field.value}
                    placeholder={t('Choose_Country')}
                    options={countryOfResidenceData.map((country) => ({
                      value:
                        country.toLowerCase() === 'other'
                          ? 'Other'
                          : t(`country:${country}`),
                      label: t(`country:${country}`),
                    }))}
                  />
                </FormControl>
                {form.formState.errors.country?.label && (
                  <ErrorMessage>
                    {form.formState.errors.country.label?.message}
                  </ErrorMessage>
                )}
              </FormItem>
            )}
          />
        )}

        {form.watch('country') &&
          (form.watch('country')?.value?.toLowerCase() as any) === 'other' && (
            <FormField
              control={form.control}
              name='country_other'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Country_of_Residence_Other')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('Enter_country')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

        {form.watch('nationality') === 'saudi' && (
          <FormField
            control={form.control}
            name='city'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('participant:city')}</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('Choose_City')} />
                    </SelectTrigger>
                    <SelectContent>
                      {cityData.map((city) => (
                        <SelectItem
                          key={city}
                          value={
                            city.toLowerCase() === 'other'
                              ? 'Other'
                              : t(`country:${city}`)
                          }
                        >
                          {t(`country:${city}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {form.watch('city') &&
          (form.watch('city')?.toLowerCase() as any) === 'other' && (
            <FormField
              control={form.control}
              name='city_other'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('City_of_Residence_Other')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('Enter_city')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

        <FormField
          control={form.control}
          name='gender'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('participant:gender')}</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('Choose_Gender')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={t('male')}>{t('male')}</SelectItem>
                    <SelectItem value={t('female')}>{t('female')}</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='age'
          render={({ field }) => (
            <FormItem>
              <div className='flex justify-between items-start gap-x-3'>
                <FormLabel>{t('participant:age')}</FormLabel>
                <div className='flex items-start gap-1'>
                  <OctagonIcon />
                  <p className='text-[12px] text-grey-light tracking-[-0.01em] leading-tight mt-[5px]'>
                    {t('choose_your_age_from_the_dropdown')}
                  </p>
                </div>
              </div>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('Select_your_age')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='1'>{t('less_than_18')}</SelectItem>
                    <SelectItem value='2'>18 – 20</SelectItem>
                    <SelectItem value='3'>21 – 25</SelectItem>
                    <SelectItem value='4'>26 - 30</SelectItem>
                    <SelectItem value='5'>31 - 35</SelectItem>
                    <SelectItem value='6'>36 – 40</SelectItem>
                    <SelectItem value='7'>40+</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='qualification'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('participant:education')}</FormLabel>

              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t('select_your_educational_qualification')}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={t('High_School')}>
                      {t('High_School')}
                    </SelectItem>
                    <SelectItem value={t('Diploma')}>{t('Diploma')}</SelectItem>
                    <SelectItem value={t('Bachelors')}>
                      {t('Bachelors')}
                    </SelectItem>
                    <SelectItem value={t('Masters')}>{t('Masters')}</SelectItem>
                    <SelectItem value={t('PhD')}>{t('PhD')}</SelectItem>
                    <SelectItem value='Other'>{t('Other')}</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch('qualification') &&
          (form.watch('qualification')?.toLowerCase() as any) === 'other' && (
            <FormField
              control={form.control}
              name='qualification_other'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Educational_Qualification_Other')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('Enter_your_qualification')}
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
          name='institution'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('participant:institution')}</FormLabel>

              <FormControl>
                <Input
                  type='text'
                  placeholder={t('Enter_Educational_Institution_Name')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='occupation'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('participant:occupation')}</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('Select_your_Occupation')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={t('University_Student')}>
                      {t('University_Student')}
                    </SelectItem>
                    <SelectItem value={t('Entrepreneur')}>
                      {t('Entrepreneur')}
                    </SelectItem>
                    <SelectItem value={t('Technology_Expert')}>
                      {t('Technology_Expert')}
                    </SelectItem>
                    <SelectItem value={t('MastCinematic_Technology_Experters')}>
                      {t('MastCinematic_Technology_Experters')}
                    </SelectItem>
                    <SelectItem value='Other'>{t('Other')}</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch('occupation') &&
          (form.watch('occupation')?.toLowerCase() as any) === 'other' && (
            <FormField
              control={form.control}
              name='occupation_other'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Occupation_Other')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('Enter_your_occupation')}
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
          name='years_of_experience'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('participant:years_of_experience')}</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('Select_your_Experience')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={t('Less_than_0')}>
                      {t('Less_than_0')}
                    </SelectItem>
                    <SelectItem value='2'>1</SelectItem>
                    <SelectItem value='3'>2</SelectItem>
                    <SelectItem value='4'>3</SelectItem>
                    <SelectItem value='5'>4</SelectItem>
                    <SelectItem value='6'>5</SelectItem>
                    <SelectItem value='7'>6+</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='area_of_expertise'
          render={({ field }) => (
            <FormItem>
              <div className='flex justify-between items-start gap-x-3'>
                <FormLabel>{t('participant:area_of_expertise')}</FormLabel>
                <div className='flex items-start gap-1'>
                  <OctagonIcon />
                  <p className='text-[12px] text-grey-light tracking-[-0.01em] leading-tight mt-[5px]'>
                    {t('Participant_can_choose_more_than_one_option')}
                  </p>
                </div>
              </div>
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

        {form.watch('area_of_expertise') &&
          form
            .watch('area_of_expertise')
            .find((expertise) => expertise.label.toLowerCase() === 'other') && (
            <FormField
              control={form.control}
              name='area_of_expertise_other'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Area_of_Expertise_Other')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('Enter_your_area_of_expertise')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
      </div>
    </div>
  );
};

export default PersonalDetail;
