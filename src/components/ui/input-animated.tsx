'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '../icons';
import { useParams } from 'next/navigation';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputAnimated = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, ...props }, ref) => {
    const [hidden, setHidden] = React.useState(true);
    const { locale } = useParams();

    const toggleInputType = () => {
      setHidden((prev) => !prev);
    };

    return (
      <div className='relative h-11 w-full'>
        <input
          type={type === 'password' ? (hidden ? 'password' : 'text') : type}
          placeholder='Standard'
          className={cn(
            'peer h-full w-full border-b-[1.5px] border-primary-foreground bg-transparent pt-4 pb-2 font-sans text-sm font-normal text-primary outline outline-0 transition-all placeholder-shown:border-primary-foreground focus:border-primary-foreground focus:outline-0  disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 tracking-wide',
            className
          )}
          ref={ref}
          {...props}
        />
        <label className="after:content[''] pointer-events-none absolute left-0 -top-1 flex h-full w-full select-none !overflow-visible truncate text-xs font-normal leading-tight text-primary-normal transition-all after:absolute after:-bottom-[0.5px] after:block after:w-full after:scale-x-0 bottom-1 border-b-[1.5px] after:border-b-[1.5px] after:border-foreground after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue peer-focus:text-xs peer-focus:leading-tight peer-focus:text-primary-normal peer-focus:after:scale-x-100 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary">
          {label}
        </label>

        {type === 'password' && (
          <>
            {hidden ? (
              <button
                className={cn('absolute bottom-2', {
                  'left-0': locale === 'ar',
                  'right-0': locale === 'en',
                })}
                type='button'
                onClick={toggleInputType}
              >
                <Icons.eyeClose />
              </button>
            ) : (
              <button
                className={cn('absolute bottom-2', {
                  'left-0': locale === 'ar',
                  'right-0': locale === 'en',
                })}
                type='button'
                onClick={toggleInputType}
              >
                <Icons.eyeOpen />
              </button>
            )}
          </>
        )}
      </div>
    );
  }
);
InputAnimated.displayName = 'InputAnimated';

export { InputAnimated };
