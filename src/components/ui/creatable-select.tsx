import { cn } from '@/lib/utils';
import { ChevronDownIcon, X } from 'lucide-react';
import Select, {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  MultiValueRemoveProps,
  Props,
  components,
} from 'react-select';
import CreatableSelect from 'react-select/creatable';

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon className='h-4 w-4' />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
  return (
    <components.ClearIndicator {...props}>
      <X className='h-4 w-4' />
    </components.ClearIndicator>
  );
};

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <X className='h-4 w-4' />
    </components.MultiValueRemove>
  );
};

const controlStyles = {
  base: 'border rounded-[9px] bg-white !min-h-[50px] border-primary-ultralight pl-2 pr-[10px] hover:cursor-pointer min-h-[40px] flex items-start text-sm',
  focus: 'outline-none ring-2 ring-ring ring-offset-2',
  nonFocus: 'border border-input',
};
const placeholderStyles = 'text-primary-medium pl-[5px] py-0.5';
const selectInputStyles = 'pl-1 py-0.5';
const valueContainerStyles = 'p-1 gap-1';
const singleValueStyles = 'leading-7 ml-1';
const multiValueStyles =
  'bg-white border border-primary-ultralight rounded items-center py-0.5 pl-2 pr-1.5 gap-1.5';
const multiValueLabelStyles = 'leading-6 py-0.5 text-sm';
const multiValueRemoveStyles =
  'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md';
const indicatorsContainerStyles = 'p-1 gap-1';
const clearIndicatorStyles =
  'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800';
const indicatorSeparatorStyles = 'bg-accent !hidden';
const dropdownIndicatorStyles =
  'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black';
const menuStyles =
  'p-1 mt-2 border border-gray-200 bg-white rounded-lg shadow-md';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 pl-5 py-2 rounded hover:bg-secondary hover:text-white transition-colors',
  focus: 'bg-secondary active:bg-secondary text-white',
  selected: "after:content-['✔'] after:ml-2",
};
const noOptionsMessageStyles = 'py-3';

export const CreatableReactSelect = (props: Props) => (
  <CreatableSelect
    closeMenuOnSelect={!props.isMulti}
    hideSelectedOptions={true}
    unstyled
    isDisabled={props.isLoading}
    styles={{
      input: (base) => ({
        ...base,
        'input:focus': {
          boxShadow: 'none',
        },
      }),
      // On mobile, the label will truncate automatically, so we want to
      // override that behaviour.
      multiValueLabel: (base) => ({
        ...base,
        whiteSpace: 'normal',
        overflow: 'visible',
      }),
      control: (base) => ({
        ...base,
        transition: 'none',
      }),
    }}
    components={{
      DropdownIndicator,
      ClearIndicator,
      MultiValueRemove,
    }}
    classNames={{
      control: ({ isFocused }) =>
        cn(
          isFocused ? controlStyles.focus : controlStyles.nonFocus,
          controlStyles.base
        ),
      placeholder: () => placeholderStyles,
      input: () => selectInputStyles,
      valueContainer: () => valueContainerStyles,
      singleValue: () => singleValueStyles,
      multiValue: () => multiValueStyles,
      multiValueLabel: () => multiValueLabelStyles,
      multiValueRemove: () => multiValueRemoveStyles,
      indicatorsContainer: () => indicatorsContainerStyles,
      clearIndicator: () => clearIndicatorStyles,
      indicatorSeparator: () => indicatorSeparatorStyles,
      dropdownIndicator: () => dropdownIndicatorStyles,
      menu: () => menuStyles,
      groupHeading: () => groupHeadingStyles,
      option: ({ isFocused, isSelected }) =>
        cn(
          isFocused && optionStyles.focus,
          isSelected && optionStyles.selected,
          optionStyles.base
        ),
      noOptionsMessage: () => noOptionsMessageStyles,
    }}
    {...props}
  />
);
