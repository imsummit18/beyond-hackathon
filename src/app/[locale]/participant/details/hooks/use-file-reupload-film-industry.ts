import { toast } from '@/components/ui/use-toast';
import errorMsgHandler from '@/lib/error-msg-handler';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FilmFormSchemaType } from '../components/file-reupload-film-industry';

const useFileReuploadFilmIndustry = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const submit = async (values: FilmFormSchemaType) => {
    const form = new FormData();
    form.append('user_id', session.data?.id as any);

    form.append('film_prj_youtube_url', values.film_prj_youtube_url);

    if (!values.film_prj_document.includes('https')) {
      form.append('film_prj_document', values.film_prj_document[0]);
    }

    try {
      setIsLoading(true);
      const response = await axios.post<{ message: string }>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/participant/resubmit`,
        form,
        {
          headers: {
            Authorization: 'Bearer ' + session.data?.access_token,
          },
        }
      );
      handleClose();
      setIsLoading(false);
      // console.log('response?.data?.message', response?.data);
      toast({
        title: response?.data?.message,
      });
      // donot remove this code if removed toast will throw error
      // will fetch updated data from server
      setTimeout(() => {
        router.refresh();
      }, 100);
    } catch (err: any) {
      setIsLoading(false);
      toast({
        title: errorMsgHandler(err),
        variant: 'destructive',
      });
    }
  };
  return { isLoading, open, setOpen, submit };
};

export default useFileReuploadFilmIndustry;
