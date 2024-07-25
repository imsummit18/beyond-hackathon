import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-[4px] text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/80',
        secondary: 'bg-secondary text-white hover:bg-secondary/80',
        outline: 'border border-primary text-primary hover:bg-primary/10',
        input: 'border-border  border-[1px] bg-white',
        // input: 'shadow-input border-input border-[1px]',
        // filledDark: 'bg-primary-dark text-white hover:bg-primary-dark/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        // outlineDark:
        //   'border border-primary-darker bg-background text-primary-darker hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-[46px] px-[23px]',
        lg: 'h-[40px] px-8 text-[10px] tracking-[3px]',
        sm: 'h-[36px] px-5 text-[8px] tracking-[2.4px] rounded-[3px]',
        xsm: 'h-[31px] px-[8px] text-[14px]',
        icon: 'h-10 w-10',
      },
      font: {
        default: 'font-bold',
        normal: 'font-normal',
      },
      textTransform: {
        default: 'capitalize',
        uppercase: 'uppercase',
      },
      borderRadius: {
        default: 'rounded-[4px]',
        lg: 'rounded-[9px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      font: 'default',
      textTransform: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      font,
      textTransform,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, font, textTransform, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
