'use client';

import { Response } from '@/actions/faq-action';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const FAQAccordion = ({ data }: { data: Response }) => {
  const [openItem, setOpenItem] = useState('0');
  const { locale } = useParams()

  // console.log(data, "faq data")

  return (
    <Accordion
      type='single'
      collapsible
      className='w-full'
      defaultValue='0'
      onValueChange={(value) => setOpenItem(value)}
    >
      {data?.data?.map((item, index) => (
        <AccordionItem
          key={index}
          value={String(index)}
          className='first:rounded-t-2xl last:rounded-b-2xl p-0 border-primary-ultralight/40 bg-secondary-light'
        >
          <AccordionTrigger
            className={`px-7 py-5 font-medium bg-white text-[15px] text-primary ${openItem === String(index)
              ? 'bg-secondary-light pb-0 ' // Apply background color when open
              : ''
              }`}
          >
            <div className={cn("flex justify-start items-center text-left w-full", {
              'tracking-normal': locale === 'ar',
            })}>
              {item.question}
            </div>
          </AccordionTrigger>
          <AccordionContent className='px-7 py-4 bg-secondary-light'>
            <div className={cn("text-grey-normal text-[16px]", {
              'tracking-normal': locale === 'ar',
            })}>{item.answer}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
