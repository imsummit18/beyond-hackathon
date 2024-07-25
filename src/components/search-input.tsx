import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { PopoverProps } from '@radix-ui/react-popover';
import { CheckIcon, X } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

export interface SelectOption {
  value: string | number;
  label: string;
}

interface Props extends PopoverProps {
  options: SelectOption[];
  setOpen: Dispatch<SetStateAction<boolean>>;
  selectedValue: SelectOption | undefined;
  setSelectedValue: Dispatch<SetStateAction<SelectOption | undefined>>;
  icon?: boolean;
  placeholder?: string;
  emptyMsg?: string;
  searchText?: string;
  contentClassName?: string;
  valueClassName?: string;
}

export default function SearchInput({
  options,
  selectedValue,
  setSelectedValue,
  setOpen,
  icon = false,
  placeholder = 'Please select...',
  emptyMsg = 'No data found.',
  searchText = 'Search...',
  contentClassName,
  valueClassName,
  ...props
}: Props) {
  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button
          variant='input'
          className={cn(
            'ml-auto normal-case flex w-[400px] justify-between pl-[9px] pr-3 hover:bg-none h-[37px] text-[13px] leading-6',
            {
              'text-primary font-medium': !!selectedValue?.label,
              'text-muted font-normal': !selectedValue?.label,
            },
            contentClassName
          )}
          role='combobox'
          aria-label={placeholder}
          aria-expanded={props.open}
        >
          {icon ? (
            <div className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
              >
                <path
                  d='M8.96812 2.78397C10.6764 4.4935 10.6764 7.26519 8.96812 8.97471C7.25985 10.6842 4.4902 10.6842 2.78193 8.97471C1.07366 7.26519 1.07366 4.4935 2.78193 2.78397C4.4902 1.07444 7.25985 1.07444 8.96812 2.78397ZM10.5308 9.46629C12.3093 7.1605 12.1421 3.83638 10.0293 1.72202C7.73495 -0.574006 4.01509 -0.574006 1.72075 1.72202C-0.573585 4.01804 -0.573585 7.74064 1.72075 10.0367C3.83711 12.1546 7.16639 12.3189 9.47093 10.5296L12.7191 13.7801C13.0121 14.0733 13.4872 14.0733 13.7802 13.7801C14.0733 13.4868 14.0733 13.0114 13.7802 12.7181L10.5308 9.46629Z'
                  fill='#F0B441'
                />
              </svg>
              {selectedValue ? (
                <span
                  className={cn('flex-1 text-left font-medium', valueClassName)}
                >
                  {selectedValue.label}
                </span>
              ) : (
                <span className='inline-block text-accent'>{placeholder}</span>
              )}
            </div>
          ) : (
            <>
              {selectedValue ? (
                selectedValue.label
              ) : (
                <span className='inline-block text-accent'>{placeholder}</span>
              )}
            </>
          )}

          <div className='flex items-center gap-2.5 ml-2'>
            {selectedValue?.label && (
              <X
                className='shrink-0 h-4 w-4 stroke-accent'
                onClick={() => {
                  setSelectedValue(undefined);
                  setOpen(false);
                }}
              />
            )}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='5'
              viewBox='0 0 10 5'
              fill='none'
            >
              <path
                d='M9.83728 0.146447C10.0542 0.341709 10.0542 0.658291 9.83728 0.853554L5.39284 4.85355C5.17588 5.04882 4.82412 5.04882 4.60716 4.85355L0.162719 0.853553C-0.0542395 0.658291 -0.0542395 0.341709 0.162719 0.146447C0.379676 -0.0488155 0.731435 -0.0488155 0.948392 0.146447L5 3.79289L9.05161 0.146447C9.26856 -0.0488152 9.62032 -0.0488151 9.83728 0.146447Z'
                fill='#0B202B'
              />
            </svg>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn('p-0 w-[400px]', contentClassName)}
        align='center'
      >
        <Command>
          <CommandInput className='text-xs' placeholder={searchText} />
          <CommandList>
            <CommandEmpty>{emptyMsg}</CommandEmpty>
            <CommandGroup>
              {options?.map((option) => (
                <CommandItem
                  key={option.value}
                  className='px-4 py-2 text-xs flex items-center justify-between text-left'
                  onSelect={() => {
                    setOpen(false);
                    setSelectedValue(option);
                  }}
                >
                  {option.label}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      selectedValue?.value === option.value
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
