'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const Datepicker = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left p-0 flex font-normal border-primary-ultralight h-[50px] rounded-[9px]',
            !date && 'text-primary-medium'
          )}
        >
          {date ? (
            format(date, 'PPP')
          ) : (
            <span className='text-primary-medium p-[16px] text-[15px]'>
              Select date of birth
            </span>
          )}
          <CalendarIcon className='ml-auto mr-3 h-5 w-5 text-primary-medium' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default Datepicker;
