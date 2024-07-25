'use client';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

const accordionData = [
  {
    title: 'Registration',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    title: 'Registration Phase Evaluation: Phase 1',
    content: 'Absolutely, it is fully responsive.',
  },
  {
    title: 'Judging Phase Evaluation: Phase 4',
    content: 'Yes, you can customize it with your own styles.',
  },
  {
    title: 'Judging Phase Evaluation: Phase 5',
    content: 'Yes, it includes support for CSS animations.',
  },
  {
    title: 'Public Voting',
    content: 'Yes, it includes support for CSS animations.',
  },
  {
    title: 'Announce Winners',
    content: 'Yes, it includes support for CSS animations.',
  },
];

const StagePage = () => {
  const [openItem, setOpenItem] = useState('0');

  return (
    <div className='StagePage bg-white py-10'>
      <div className='container'>
        <div className='mt-5'>
          <div className='rounded-2xl overflow-hidden shadow-container'>
            <Accordion
              type='single'
              collapsible
              className='w-full'
              defaultValue='0'
              onValueChange={(value) => setOpenItem(value)}
            >
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={String(index)}
                  className='first:rounded-t-2xl last:rounded-b-2xl p-0 bg-white'
                >
                  <AccordionTrigger
                    className={`px-7 py-5 font-normal bg-white text-grey-normal ${
                      openItem === String(index)
                        ? 'bg-black text-white' // Apply background color when open
                        : ''
                    }`}
                  >
                    <div className='flex justify-between items-center w-full'>
                      <div className='ssd'>{item.title}</div>
                      <div className='flex items-center gap-2.5'>
                        <Button className='p-[5px] relative z-50 bg-primary-ultralight/40 hover:bg-primary-ultralight/50 h-[30px] w-[30px] mr-[0] ml-auto rounded-[9px] flex flex-col justify-center items-center'>
                          <Pencil strokeWidth={2} color='#0202AD' size={16} />
                        </Button>
                        <Checkbox className='mr-[7px]' />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='px-7 py-4 bg-white'>
                    <div className='text-grey-normal'>{item.content}</div>
                    <div className='lg:flex lg:flex-wrap'>
                      <div className='lg:basis-1/4 my-2.5'>
                        <h3 className='text-[15px] text-primary-normal font-normal'>
                          Stage name EN
                        </h3>
                        <p className='text-[15px] text-grey-normal font-normal'>
                          Registration
                        </p>
                      </div>
                      <div className='lg:basis-1/4 my-2.5'>
                        <h3 className='text-[15px] text-primary-normal font-normal'>
                          Stage name EN
                        </h3>
                        <p className='text-[15px] text-grey-normal font-normal line-through'>
                          Registration
                        </p>
                      </div>
                      <div className='lg:basis-1/4 my-2.5'>
                        <h3 className='text-[15px] text-primary-normal font-normal'>
                          Start date
                        </h3>
                        <p className='text-[15px] text-grey-normal font-normal'>
                          Mon, 9 Jan 2024
                        </p>
                      </div>
                      <div className='lg:basis-1/4 my-2.5'>
                        <h3 className='text-[15px] text-primary-normal font-normal'>
                          End date
                        </h3>
                        <p className='text-[15px] text-grey-normal font-normal'>
                          Mon, 18 Jan 2024
                        </p>
                      </div>
                      <div className='lg:basis-1/4 my-2.5'>
                        <h3 className='text-[15px] text-primary-normal font-normal'>
                          Auto close
                        </h3>
                        <p className='text-[15px] text-grey-normal font-normal'>
                          Yes
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StagePage;
