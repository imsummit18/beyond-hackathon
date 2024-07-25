import { cn } from '@/lib/utils';
import React from 'react';

const ErrorMessage = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn('text-sm font-medium text-destructive', className)}>
      {children}
    </p>
  );
};

export default ErrorMessage;
