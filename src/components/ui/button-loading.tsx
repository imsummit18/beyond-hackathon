import React from 'react';
import { Button, buttonVariants } from './button';
import { VariantProps } from 'class-variance-authority';
import { Icons } from '../icons';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  icon?: any;
}

const ButtonLoading = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isLoading, icon, children, ...props }, ref) => {
    return (
      <Button disabled={isLoading} {...props}>
        {isLoading ? (
          <Icons.spinner className='shrink-0 mr-2 h-4 w-4 animate-spin' />
        ) : (
          icon
        )}{' '}
        {children}
      </Button>
    );
  }
);

ButtonLoading.displayName = 'ButtonLoading';

export default ButtonLoading;
