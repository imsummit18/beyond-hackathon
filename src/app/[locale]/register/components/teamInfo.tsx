'use client';

import MobileInput from '@/components/mobile-input';
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
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { RegisterFormT } from '../hooks/schema.register';
import { useTranslation } from 'react-i18next';
import { PhoneInput } from '@/components/ui/phone-input';
import { cityData, countryOfResidenceData } from './register-data';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';

interface Props {
  form: UseFormReturn<RegisterFormT, any, undefined>;
}

const TeamInfo = ({ form }: Props) => {
  const { locale } = useParams()
  const { t } = useTranslation();
  // console.log('🚀 ~ t:', t);

  const { fields, replace } = useFieldArray({
    name: 'team',
    control: form.control,

  });
  // console.log("errors", form.formState.errors)

  return (
    <div className='p-[25px] lg:p-[60px] mt-[12px] bg-white rounded-[4px] overflow-visible'>
      <h2 className='text-primary text-[14px] font-bold uppercase tracking-[.3em] mb-[20px] lg:mb-[40px]'>
        {t('Team_information')}
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] lg:gap-x-[100px] gap-y-6 mb-6'>
        <FormField
          control={form.control}
          name='team_size'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t('Number_of_Team_Members_Other_Than_You')}
              </FormLabel>

              <FormControl>
                <ReactSelect
                  onChange={(e: any) => {
                    const charCode = Number(e?.value);
                    if (typeof charCode === 'number') {
                      field.onChange(e);
                      const newTeam = Array(Number(e.value))
                        .fill('')
                        .map(() => ({
                          country: undefined,
                          email: '',
                          name: '',
                          nationality: '',
                          phone: '',
                          city: undefined,
                          city_other: undefined,
                          country_other: undefined,
                        }));

                      replace(newTeam);
                    }
                  }}
                  value={field.value}
                  isClearable
                  placeholder={t('Select_Number_of_Team_Members')}
                  options={[
                    {
                      value: 1,
                      label: '1',
                    },
                    {
                      value: 2,
                      label: '2',
                    },
                    {
                      value: 3,
                      label: '3',
                    },
                    {
                      value: 4,
                      label: '4',
                    },
                    // {
                    //   value: 5,
                    //   label: '5',
                    // },
                  ]}
                />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
      </div>

      <div className='space-y-4'>
        {/* {Number(form.watch('team_size')) >= 0 && */}
        {Number(form.watch('team_size')?.value) >= 0 &&
          fields.map((field, index) => (
            <div key={field.id}>
              <div className='p-[20px] lg:p-[30px] bg-primary-extralight rounded-[15px]'>
                <h3 className='text-secondary text-[15px] font-medium mb-[20px]'>
                  {t('Team_Member')} {index + 1}
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] lg:gap-x-[100px] gap-y-6'>
                  <FormField
                    control={form.control}
                    name={`team.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('participant:name')}</FormLabel>
                        <FormControl>
                          <Input
                            type='text'
                            placeholder={t('Full_Name')}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`team.${index}.email`}
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
                        <p className={cn(
                          'text-sm font-medium text-destructive',
                          {
                            'text-left': locale === 'en',
                            'text-right': locale === 'ar',
                          },
                        )}>
                          {
                            form?.formState?.errors?.team?.[index]?.email?.message ?
                              form?.formState?.errors?.team?.[index]?.email?.message :
                              form?.formState?.errors?.team?.root?.message}
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`team.${index}.phone`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('participant:phone')}</FormLabel>
                        <FormControl>
                          <PhoneInput {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`team.${index}.nationality`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('participant:nationality')}</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={(e) => {
                              field.onChange(e);
                              form.setValue(`team.${index}.country`, undefined);
                              form.setValue(`team.${index}.country_other`, '');
                              form.setValue(`team.${index}.city`, undefined);
                              form.setValue(`team.${index}.city_other`, '');
                              // if (e === 'non-saudi') {
                              //   form.watch(`team.${index}.city`) &&
                              //     form.setValue(
                              //       `team.${index}.city`,
                              //       undefined
                              //     );
                              //   form.watch(`team.${index}.city_other`) &&
                              //     form.setValue(
                              //       `team.${index}.city_other`,
                              //       undefined
                              //     );
                              // } else {
                              //   form.watch(`team.${index}.country`) &&
                              //     form.setValue(
                              //       `team.${index}.country`,
                              //       undefined
                              //     );
                              //   form.watch(`team.${index}.country_other`) &&
                              //     form.setValue(
                              //       `team.${index}.country_other`,
                              //       undefined
                              //     );
                              // }
                            }}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue
                                placeholder={t('Choose_Nationality')}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='saudi'>
                                {t('country:Saudi')}
                              </SelectItem>
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

                  {form.watch(`team.${index}.nationality`) === 'non-saudi' && (
                    <FormField
                      control={form.control}
                      name={`team.${index}.country`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('participant:country')}</FormLabel>
                          <FormControl>
                            <ReactSelect
                              onChange={field.onChange}
                              value={field.value}
                              placeholder={t('Choose_Country')}
                              options={countryOfResidenceData.map(
                                (country) => ({
                                  value:
                                    country.toLowerCase() === 'other'
                                      ? 'Other'
                                      : t(`country:${country}`),
                                  label: t(`country:${country}`),
                                })
                              )}
                            />
                          </FormControl>
                          {form.formState?.errors?.team &&
                            form.formState?.errors?.team.length! > 0 &&
                            form.formState?.errors?.team[index]?.country
                              ?.label && (
                              <FormMessage>
                                {
                                  form.formState.errors?.team[index]!.country
                                    ?.label?.message
                                }
                              </FormMessage>
                            )}
                        </FormItem>
                      )}
                    />
                  )}
                  {form.watch(`team.${index}.country`) &&
                    form
                      .watch(`team.${index}.country`)
                      ?.value.toString()
                      .toLowerCase() === 'other' && (
                      <FormField
                        control={form.control}
                        name={`team.${index}.country_other`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {t('Country_of_Residence_Other')}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t('Enter_country')}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  {form.watch(`team.${index}.nationality`) === 'saudi' && (
                    <FormField
                      control={form.control}
                      name={`team.${index}.city`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('participant:city')}</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
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
                  {form.watch(`team.${index}.city`) &&
                    (form.watch(`team.${index}.city`)?.toLowerCase() as any) ===
                    'other' && (
                      <FormField
                        control={form.control}
                        name={`team.${index}.city_other`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {t('City_of_Residence_Other')}
                            </FormLabel>
                            <FormControl>
                              <Input placeholder={t('Enter_city')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                </div>

                {/* <div className='flex justify-end mt-5'>
                <button
                  disabled={fields.length === 1}
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <RemoveMember />
                </button>
              </div> */}
              </div>
            </div>
          ))}
      </div>

      {/* <div className='mt-[20px] text-center'>
        <p className='text-[16px] text-grey mb-[12px]'>Add Member</p>
        <button
          type='button'
          onClick={() =>
            append([
              {
                country: '',
                email: '',
                name: '',
                nationality: '',
                phone: '',
              },
            ])
          }
        >
          <div className='h-[60px] w-[60px] rounded-[50%] m-auto bg-secondary hover:bg-secondary/80 leading-[60px] text-center cursor-pointer'>
            <Plus
              size={24}
              fill='#A3B4F9'
              color='#0202AD'
              strokeWidth={1.5}
              className='inline'
            />
          </div>
        </button>
      </div> */}
    </div>
  );
};

export default TeamInfo;

// {
//   /* <Select
//                   onValueChange={(e) => {
//                     field.onChange(e);
//                     const newTeam = Array(Number(e))
//                       .fill('')
//                       .map(() => ({
//                         country: '',
//                         email: '',
//                         name: '',
//                         nationality: '',
//                         phone: '',
//                       }));

//                     replace(newTeam);
//                   }}
//                   defaultValue={field.value}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder='Select Number of Team Members' />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value='1'>1 </SelectItem>
//                     <SelectItem value='2'>2 </SelectItem>
//                     <SelectItem value='3'>3</SelectItem>
//                     <SelectItem value='4'>4</SelectItem>
//                     <SelectItem value='5'>5</SelectItem>
//                   </SelectContent>
//                 </Select> */
// }
