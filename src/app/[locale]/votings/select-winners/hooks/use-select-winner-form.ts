import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const votingFormSchema = z.object({
  first: z
    .object({
      value: z.number(),
      label: z.string(),
    })
    .required(),
  second: z
    .object({
      value: z.number(),
      label: z.string(),
    })
    .required(),
  third: z
    .object({
      value: z.number(),
      label: z.string(),
    })
    .required(),
  fourth: z
    .object({
      value: z.number(),
      label: z.string(),
    })
    .required(),
  fifth: z
    .object({
      value: z.number(),
      label: z.string(),
    })
    .required(),
});

export type VotingSchemaType = z.infer<typeof votingFormSchema>;

const useSelectWinnerForm = () => {
  return useForm<VotingSchemaType>({
    resolver: zodResolver(votingFormSchema),
  });
};

export default useSelectWinnerForm;
