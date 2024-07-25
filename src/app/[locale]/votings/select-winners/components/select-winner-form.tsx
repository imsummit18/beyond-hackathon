'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ReactSelect } from '@/components/ui/react-select';
import { useTranslation } from 'react-i18next';
import HeaderBtn from './header-btn';
import { FormFieldT, useVotingContext } from './voting-context';
import useSelectWinnerForm from '../hooks/use-select-winner-form';

const SelectWinnerForm = () => {
  const { onSubmit, handleSelectChange, participantsList } = useVotingContext();

  const form = useSelectWinnerForm();
  const { t } = useTranslation();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <HeaderBtn form={form} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[30px] mt-[30px]'>
          {['first', 'second', 'third', 'fourth', 'fifth'].map(
            (field, index) => (
              <div
                key={index}
                className='border border-primary rounded-[11px] p-[24px]'
              >
                <FormField
                  control={form.control}
                  name={field as FormFieldT}
                  render={({ field }) => (
                    <FormItem className='md:max-w-[300px] mb-[30px]'>
                      <FormLabel className='mb-[15px] inline-block'>
                        {t(field.name)}
                        <span className='text-destructive'>*</span>
                      </FormLabel>
                      <FormControl>
                        <ReactSelect
                          onChange={(e: any) =>
                            handleSelectChange(field.name, e, form)
                          }
                          value={field.value ?? ''}
                          // value={selectedParticipants[field.name]}
                          placeholder={t('choose')}
                          options={participantsList}
                        />
                      </FormControl>

                      {form.formState?.errors[field.name] && (
                        <FormMessage>{t(`pick_${field.name}`)}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />
              </div>
            )
          )}
        </div>
      </form>
    </Form>
  );
};

export default SelectWinnerForm;
