import React from 'react';
import { cn } from '../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium font-sans
      rounded-full
      transition-all duration-300 ease-in-out
      transform hover:scale-105 active:scale-95
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
      relative overflow-hidden
    `;

    const sizeStyles = {
      sm: 'h-10 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg'
    };

    const variantStyles = {
      primary: `
        bg-[var(--color-primary)] !text-white
        hover:bg-[var(--color-primary)]/90 hover:!text-white
        focus:ring-[var(--color-primary)]/50
        shadow-lg hover:shadow-xl
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
      `,
      secondary: `
        bg-[var(--color-secondary)] !text-white
        hover:bg-[var(--color-secondary)]/90 hover:!text-white
        focus:ring-[var(--color-secondary)]/50
        shadow-lg hover:shadow-xl
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
      `,
      outline: `
        border-2 border-[var(--color-primary)] text-[var(--color-primary)]
        bg-transparent
        hover:bg-[var(--color-primary)] hover:!text-white
        focus:ring-[var(--color-primary)]/50
        dark:border-[var(--color-primary)] dark:text-[var(--color-primary)]
        dark:hover:bg-[var(--color-primary)] dark:hover:!text-white
      `
    };

    return (
      <button
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
