import { SelectOptionT } from '@/types';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { youtubeUrlRegex } from '../../participant/details/components/file-reupload-technical';
import * as yup from 'yup';
export interface RegisterFormT {
  track: string;
  name: string;
  email: string;
  mobile: string;
  nationality: string;
  city?: string;
  city_other?: string;
  country:
  | {
    value: string;
    label: string;
  }
  | undefined;
  country_other: string;
  gender: string;
  age: string;
  qualification: string;
  qualification_other: string;
  institution: string;
  institution_other: string;
  occupation: string;
  occupation_other: string;
  years_of_experience: string;
  team_size: SelectOptionT;
  area_of_expertise: SelectOptionT[];
  area_of_expertise_other?: string;

  combined_areas_of_expertise: SelectOptionT[];
  combined_areas_of_expertise_other?: string;
  has_technical_experience: '0' | '1';
  project_description: string;
  film_industry_projects: '0' | '1';
  film_project_description: string;
  program_participation: '0' | '1';
  program_details: string;
  filimathon_reason: string;
  heard_about_filimathon: string;
  // tech_prj_video: any;
  tech_prj_youtube_url: any;
  tech_prj_document: any;
  // film_prj_video: any;
  film_prj_youtube_url: any;
  film_prj_document: any;
  team: {
    name: string;
    phone: string;
    country: SelectOptionT | undefined;
    nationality: string;
    email: string;
    city?: string | undefined;
    city_other?: string | undefined;
    country_other?: string | undefined;
  }[];
}


export const formSchema = (t: any) =>
  yup.object().shape({
    track: yup.string().required(t("Please select a track")), //TODO: Add translation
    name: yup
      .string()
      .required(t('name_is_required'))
      .matches(/^[A-Za-z\s]+$/, t('Name_must_contain_only_letters_and_spaces')),
    email: yup
      .string()
      .email(t('email_must_be_valid'))
      .required(t('email_is_required')),

    mobile: yup
      .string()
      .required(t('mobile_number_is_required'))
      .matches(/^(?:\+966)?5\d{8}$/, t('Invalid_phone_number')), // Ensures the number optionally starts with +966, followed by 55 and exactly 7 digits

    nationality: yup
      .string()
      .oneOf(['saudi', 'non-saudi'])
      .required(t('please_select_a_nationality')),
    country: yup.string().when('nationality', {
      is: (val: string) => val === 'non-saudi',
      then: () =>
        yup.object().shape({
          value: yup.string().required(t('country_is_required')),
          label: yup.string().required(t('country_is_required')),
        }),
      otherwise: (schema) => schema.notRequired(),
    }),
    country_other: yup.string().when('country', {
      is: (val: any) => val?.value?.toLowerCase() === 'other',
      then: (schema) => schema.required(t('please_select_a_country')),
      otherwise: (schema) => schema.notRequired(),
    }),
    city: yup.string().when('nationality', {
      is: (val: any) => val?.toLowerCase() === 'saudi',
      then: (schema) => schema.required(t('please_select_a_city')),
      otherwise: (schema) => schema.notRequired(),
    }),
    city_other: yup.string().when('city', {
      is: (val: string) => val?.toLowerCase() === 'other',
      then: (schema) => schema.required(t('provide_a_other_city_name')),
      otherwise: (schema) => schema.notRequired(),
    }),
    gender: yup.string().required(t('please_select_a_gender')),
    age: yup.string().required(t('please_select_an_age')),
    qualification: yup.string().required(t('please_select_a_qualification')),
    qualification_other: yup.string().when('qualification', {
      is: (val: string) => val?.toLowerCase() === 'other',
      then: (schema) =>
        schema.required(t('provide_a_other_qualification_name')),
      otherwise: (schema) => schema.notRequired(),
    }),
    institution: yup.string().required(t('please_select_a_institution')),
    occupation: yup.string().required(t('please_select_a_occupation')),
    occupation_other: yup.string().when('occupation', {
      is: (val: string) => val?.toLowerCase() === 'other',
      then: (schema) => schema.required(t('enter_other_occupation_name')),
      otherwise: (schema) => schema.notRequired(),
    }),
    years_of_experience: yup.string().required(t('please_select_a_experience')),
    area_of_expertise: yup
      .array()
      .of(
        yup.object().shape({
          value: yup.string().required(),
          label: yup.string().required(),
        })
      )
      .required(t('please_select_atleast_area_of_expertise'))
      .min(1, t('please_select_atleast_area_of_expertise')),
    area_of_expertise_other: yup.string().when('area_of_expertise', {
      is: (val: SelectOptionT[]) => {
        const findOther = val?.find((v) => v.label?.toLowerCase() === 'other');
        return !!findOther;
      },
      then: () => yup.string().required(t('please_provide_area_of_expertise')),
      otherwise: (schema) => schema.notRequired(),
    }),
    team_size: yup
      .object()
      .shape({
        value: yup.number(),
        label: yup.string(),
      })
      .nullable(),
    team: yup.mixed().when('team_size', {
      is: (val: any) => Number(val?.value) >= 1,
      then: () =>
        yup.array().of(
          yup.object().shape({
            name: yup.string().required(t('name_is_required')),
            phone: yup
              .string()
              .required(t('mobile_number_is_required'))
              .matches(/^(?:\+966)?5\d{8}$/, t('Invalid_phone_number')),
            nationality: yup
              .string()
              .required(t('please_select_a_nationality')),
            country: yup.object().when('nationality', {
              is: (val: string) => val.toLowerCase() === 'saudi',
              then: (schema) => schema.notRequired(),
              otherwise: () =>
                yup
                  .object()
                  .shape({
                    value: yup.string().required(t('country_is_required')),
                    label: yup.string().required(t('country_is_required')),
                  })
                  .required(t('country_is_required')),
            }),
            city: yup.string().when('nationality', {
              is: (val: any) => val?.toLowerCase() === 'saudi',
              then: (schema) => schema.required(t('please_select_a_city')),
              otherwise: (schema) => schema.notRequired(),
            }),
            city_other: yup.string().when('city', {
              is: (val: string) => {
                return val?.toLowerCase() === 'other';
              },
              then: (schema) => schema.required(t('provide_a_other_city_name')),
              otherwise: (schema) => schema.notRequired(),
            }),
            country_other: yup.string().when('country', {
              is: (val: any) => val?.value?.toLowerCase() === 'other',
              then: (schema) => schema.required(t('please_select_a_country')),
              otherwise: (schema) => schema.notRequired(),
            }),
            email: yup
              .string()
              .email(t('email_must_be_valid'))
              .required(t('email_is_required')),
          })
        ),
      otherwise: (schema) => schema.notRequired(),
    }),
    //.required(t('country_is_required'))
    combined_areas_of_expertise: yup
      .array()
      .of(
        yup.object().shape({
          value: yup.string().required(),
          label: yup.string().required(),
        })
      )
      .required(t('please_select_atleast_combined_area_of_expertise'))
      .min(1, t('please_select_atleast_combined_area_of_expertise')),
    combined_areas_of_expertise_other: yup
      .string()
      .when('combined_areas_of_expertise', {
        is: (val: SelectOptionT[]) => {
          const findOther = val?.find(
            (v) => v.label?.toLowerCase() === 'other'
          );
          return !!findOther;
        },
        then: () =>
          yup
            .string()
            .required(t('please_provide_an_combined_area_of_expertise')),
        otherwise: (schema) => schema.notRequired(),
      }),

    has_technical_experience: yup.string().oneOf(['1', '0']).default('0'),
    project_description: yup.string().when('has_technical_experience', {
      is: (val: string) => val === '1',
      then: (schema) =>
        schema.required(t('please_provide_project_description')),
      otherwise: (schema) => schema.notRequired(),
    }),
    // tech_prj_video: yup.string().when('has_technical_experience', {
    //   is: (val: string) => val === '1',
    //   then: () =>
    //     yup
    //       .mixed()
    //       .required(t('please_select_a_video'))
    //       .test('empty', t('please_select_a_video'), (value: any) => {
    //         if (Number(value.length) > 0) return true;
    //         return false;
    //       }),
    //   otherwise: (schema) => schema.notRequired(),
    // }),

    tech_prj_youtube_url: yup.string().when('has_technical_experience', {
      is: (val: string) => val === '1',
      then: () =>
        yup
          .string()
          .required('Please enter a video link').matches(youtubeUrlRegex, 'Please enter a valid YouTube link'
          ),
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
    film_project_description: yup.string().when('film_industry_projects', {
      is: (val: string) => val === '1',
      then: (schema) =>
        schema.required(t('please_provide_project_description')),
      otherwise: (schema) => schema.notRequired(),
    }),
    // film_prj_video: yup.string().when('film_industry_projects', {
    //   is: (val: string) => val === '1',
    //   then: () =>
    //     yup
    //       .mixed()
    //       .required(t('please_select_a_video'))
    //       .test('empty', t('please_select_a_video'), (value: any) => {
    //         if (Number(value.length) > 0) return true;
    //         return false;
    //       }),
    //   otherwise: (schema) => schema.notRequired(),
    // }),
    film_prj_youtube_url: yup.string().when('film_industry_projects', {
      is: (val: string) => val === '1',
      then: () =>
        yup
          .string()
          .required('Please enter a video link').matches(
            youtubeUrlRegex,
            'Please enter a valid YouTube link'
          ),
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

    program_participation: yup.string().oneOf(['1', '0']).default('0'),
    program_details: yup.string().when('program_participation', {
      is: (val: string) => val === '1',
      then: (schema) => schema.required(t('please_provide_a_program_details')),
      otherwise: (schema) => schema.notRequired(),
    }),

    filimathon_reason: yup
      .string()
      .required(t('filimathon_reason_is_required')),
    heard_about_filimathon: yup
      .string()
      .required(t('filimathon_reason_is_required')),
  });
