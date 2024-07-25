import { toast } from '@/components/ui/use-toast';
import errorMsgHandler from '@/lib/error-msg-handler';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TechnicalFormSchemaType } from '../components/file-reupload-technical';

const useFileReuploadTechnical = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const submit = async (values: TechnicalFormSchemaType) => {
    const form = new FormData();
    form.append('user_id', session.data?.id as any);

    form.append('tech_prj_youtube_url', values.tech_prj_youtube_url);

    if (!values.tech_prj_document.includes('https')) {
      form.append('tech_prj_document', values.tech_prj_document[0]);
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

export default useFileReuploadTechnical;
