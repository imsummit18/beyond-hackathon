'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

import Leader1 from '../../../../images/leaders/leader1.png';
import Leader2 from '../../../../images/leaders/leader2.png';
import Leader3 from '../../../../images/leaders/leader3.jpg';
import { useParams } from 'next/navigation';

const leadersData = [
  {
    src: Leader1,
    alt: 'Leader 1',
    caption: 'Leader 1 Caption',
  },
  {
    src: Leader2,
    alt: 'Leader 2',
    caption: 'Leader 2 Caption',
  },
  {
    src: Leader3,
    alt: 'Leader 3',
    caption: 'Leader 3 Caption',
  },
  {
    src: Leader1,
    alt: 'Leader 4',
    caption: 'Leader 4 Caption',
  },
  {
    src: Leader2,
    alt: 'Leader 5',
    caption: 'Leader 5 Caption',
  },
];

function Leaders() {
  const { locale } = useParams();

  return (
    <div className='leaders pb-[80px] overflow-hidden' id='leaders'>
      <div className='container'>
        <h2 className='uppercase mb-[34px] font-medium text-center text-primary text-xs/[10px] tracking-[0.3em]'>
          Industrial Hackathon Leaders
        </h2>
        <Carousel
          opts={{
            align: locale === 'en' ? 'start' : 'end',
          }}
          className='w-full'
        >
          <CarouselContent className='-ml-1.5 -mr-1.5'>
            {leadersData.map((leader, index) => (
              <CarouselItem
                key={index}
                className='pl-1.5 pr-1.5 md:basis-1/2 lg:basis-1/3'
              >
                <div className='w-full relative aspect-[370/264] p-1 rounded-[16px] overflow-hidden'>
                  <Image
                    src={leader.src}
                    alt={leader.alt}
                    fill
                    className='object-contain'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Leaders;
