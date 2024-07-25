import { faqAction } from '@/actions/faq-action';

import { Skeleton } from '@/components/ui/skeleton';
import FAQAccordion from './components/faq-accordion';

const FaqPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const search = searchParams?.query || '';
  const response = await faqAction({ search });

  if (response.data === null) {
    return <h1 className='text-center py-10 text-base'>No result found.</h1>;
  }

  return (
    <FAQAccordion data={response} />

    //     {/* <div className="loader text-center">
    //       <Loader
    //         strokeWidth={1}
    //         absoluteStrokeWidth
    //         // className="inline animate-spin duration-1000 delay-1000"
    //         className="inline duration-1000 delay-1000"
    //       />
    //     </div> */}
  );
};

export default FaqPage;
