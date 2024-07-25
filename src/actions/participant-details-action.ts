'use server';

import axiosInstance from '@/lib/axios-instance';

type FileType = {
  type?: string | null;
  user_files?: string | null;
};
export interface Response {
  data: {
    id: number;
    uuid: string;
    name: string;
    mobile_code: string;
    mobile: string;
    national: string;
    city: string;
    city_other: string;
    country: string;
    country_other: string | null;
    gender: string;
    age: string;
    qualification: string;
    qualification_other: string | null;
    institution: string;
    institution_other: null;
    occupation: string;
    occupation_other: string | null;
    years_of_experience: string;
    university: string | null;
    major: string | null;
    has_university_completed: boolean;
    year_in_university: string;
    email: string;
    detail: {
      id: number;
      area_of_expertise: string[];
      area_of_expertise_other: string;
      combined_areas_of_expertise: string[];
      combined_areas_of_expertise_other: string;
      has_technical_experience: string;
      project_description: string;
      film_industry_projects: string;
      film_project_description: string;
      program_participation: string;
      program_details: string;
      filimathon_reason: string;
      heard_about_filimathon: string;
      // tech_prj_video: string;
      tech_prj_youtube_url: string;
      tech_prj_document: string;
      // film_prj_video: string | null;
      film_prj_youtube_url: string;
      film_prj_document: string | null;
    };
    files: FileType[];
    members: {
      id: number;
      name: string;
      email: string;
      phone: string;
      country: string;
      nationality: string;
      city: string;
      city_other: string;
      country_other: string;
    }[];
    evaluation: {
      name: string;
      score:
      | {
        avg_score: number;
        data: {
          id: number;
          evaluator: {
            id: number;
            first_name: string;
          };
          judge: {
            id: number;
            first_name: string;
          };
          score: number;
        }[];
      }
      | number;
    }[];
  };
}

export const participantDetailsAction = async () => {
  const response = await axiosInstance.get<Response>('/participant/info');
  return response.data;
};
