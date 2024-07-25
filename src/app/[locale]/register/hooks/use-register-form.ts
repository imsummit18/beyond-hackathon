'use client';

import { toast } from '@/components/ui/use-toast';
import errorMsgHandler from '@/lib/error-msg-handler';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { formatPhoneNumberIntl } from 'react-phone-number-input';
import { RegisterFormT, formSchema } from './schema.register';

const useRegisterForm = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<RegisterFormT>({
    resolver: yupResolver(formSchema(t)) as any,
    defaultValues: {
      team: [
        {
          country: undefined,
          email: '',
          name: '',
          nationality: '',
          phone: '',
        },
      ],
      has_technical_experience: '0',
      film_industry_projects: '0',
      program_participation: '0',
    },
  });

  async function onSubmit(values: RegisterFormT) {
    const form = new FormData();

    form.append('track', values.track);
    form.append('name', values.name);
    form.append('email', values.email);
    form.append(
      'mobile',
      values.mobile && formatPhoneNumberIntl(`+966${values.mobile}`)
    );
    form.append('nationality', values.nationality);

    if (values.nationality?.toLowerCase() === 'saudi') {
      form.append('city', values.city as any);
    }

    if (values.city?.toLowerCase() === 'other') {
      form.append('city_other', values.city_other as any);
    }
    if (values.nationality?.toLowerCase() === 'non-saudi') {
      form.append('country', values.country?.value as any);
    }
    if (values.country?.value?.toLowerCase() === 'other') {
      form.append('country_other', values.country_other);
    }
    form.append('age', values.age);
    form.append('gender', values.gender);

    form.append('qualification', values.qualification);
    if (values.qualification?.toLowerCase() === 'other') {
      form.append('qualification_other', values.qualification_other);
    }
    form.append('institution', values.institution);
    if (values.institution?.toLowerCase() === 'other') {
      form.append('institution_other', values.institution_other);
    }

    form.append('occupation', values.occupation);
    if (values.occupation?.toLowerCase() === 'other') {
      form.append('occupation_other', values.occupation_other);
    }

    form.append('years_of_experience', values.years_of_experience);

    if (values.team_size?.value) {
      form.append('team_size', values.team_size?.value as any);
    }
    values.area_of_expertise?.forEach((expertise) =>
      form.append('area_of_expertise[]', expertise.label)
    );
    if (
      values.area_of_expertise?.find(
        (val) => val.label?.toLowerCase() === 'other'
      )
    ) {
      form.append(
        'area_of_expertise_other',
        values.area_of_expertise_other as any
      );
    }

    values.combined_areas_of_expertise?.forEach((expertise) =>
      form.append('combined_areas_of_expertise[]', expertise.label)
    );
    if (
      values.combined_areas_of_expertise?.find(
        (val) => val.label?.toLowerCase() === 'other'
      )
    ) {
      form.append(
        'combined_areas_of_expertise_other',
        values.combined_areas_of_expertise_other as any
      );
    }

    form.append(
      'has_technical_experience',
      values.has_technical_experience as any
    );

    if (values.has_technical_experience === '1') {
      form.append('project_description', values.project_description as any);
      // form.append('tech_prj_video', values.tech_prj_video[0] as any);
      form.append('tech_prj_youtube_url', values.tech_prj_youtube_url as any);
      form.append('tech_prj_document', values.tech_prj_document[0] as any);
    }

    form.append('film_industry_projects', values.film_industry_projects as any);
    if (values.film_industry_projects === '1') {
      form.append(
        'film_project_description',
        values.film_project_description as any
      );
      form.append('film_prj_youtube_url', values.tech_prj_youtube_url as any);
      // form.append('film_prj_video', values.film_prj_video[0] as any);
      form.append('film_prj_document', values.film_prj_document[0] as any);
    }

    form.append('program_participation', values.program_participation as any);
    if (values.program_participation === '1') {
      form.append('program_details', values.program_details as any);
    }

    form.append('filimathon_reason', values.filimathon_reason as any);
    form.append('heard_about_filimathon', values.heard_about_filimathon as any);
    if (Number(values.team_size?.value) >= 1) {
      values.team?.forEach((teamMember, index) => {
        form.append(`team[${index}][name]`, teamMember.name);
        form.append(
          `team[${index}][phone]`,
          teamMember.phone && formatPhoneNumberIntl(`+966${teamMember.phone}`)
        );
        form.append(`team[${index}][nationality]`, teamMember.nationality);
        form.append(`team[${index}][email]`, teamMember.email);
        if (teamMember.nationality === 'saudi') {
          form.append(`team[${index}][city]`, teamMember.city as string);
          form.append(`team[${index}][country]`, 'null');
        }

        if (teamMember.city?.toLowerCase() === 'other') {
          form.append(
            `team[${index}][city_other]`,
            teamMember.city_other as string
          );
        }

        if (teamMember.nationality === 'non-saudi') {
          form.append(
            `team[${index}][country]`,
            teamMember.country?.value.toString() as string
          );
        }
        if (teamMember.country?.value.toString().toLowerCase() === 'other') {
          form.append(
            `team[${index}][country_other]`,
            teamMember.country_other as string
          );
        }
      });
    }

    // form.forEach((value, key) => {
    //   console.log(`${key}: ${value} : ${typeof value}`);
    // });

    try {
      setIsLoading(true);
      const response = await axios.post<{ message: string }>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`,
        form
      );
      setIsLoading(false);
      toast({
        title: response?.data?.message,
      });
      setShowSuccess(true);
    } catch (err: any) {
      setIsLoading(false);
      toast({
        title: errorMsgHandler(err),
        variant: 'destructive',
      });
    }
  }

  return { form, onSubmit, isPending: isLoading, showSuccess, setShowSuccess };
};

export default useRegisterForm;
