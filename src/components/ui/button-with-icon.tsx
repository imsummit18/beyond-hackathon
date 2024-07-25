import React from 'react';
import { Button, buttonVariants } from './button';
import { VariantProps } from 'class-variance-authority';

export interface ButtonWithIconProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
    icon?: any;
}

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
    ({ isLoading, icon, children, ...props }, ref) => {
        return (
            <Button {...props}>
                <div className='flex items-center gap-4'>
                    {children}
                    {icon}
                </div>
            </Button>
        );
    }
);

ButtonWithIcon.displayName = 'ButtonLoading';

export default ButtonWithIcon;
