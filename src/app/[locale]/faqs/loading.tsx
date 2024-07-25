import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className='flex flex-col space-y-3'>
      {Array.from({ length: 5 }).map((idx: any) => (
        <div key={idx} className='px-6 py-6 space-y-5'>
          <Skeleton className='h-4 w-[250px]' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[90%]' />
            <Skeleton className='h-4 w-[40%]' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
