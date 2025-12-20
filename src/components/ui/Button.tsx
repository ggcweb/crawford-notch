import Link from 'next/link';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    target?: string;
    rel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps & { fullWidth?: boolean }>(
    ({ className = '', variant = 'primary', size = 'md', href, fullWidth = false, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded transition-all duration-300 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

        const variants = {
            primary: 'bg-forest-green text-white hover:bg-forest-green-dark hover:shadow-lg',
            secondary: 'bg-bark-brown text-white hover:bg-bark-brown-dark hover:shadow-lg',
            outline: 'border-2 border-bark-brown text-bark-brown hover:bg-bark-brown hover:text-white',
            ghost: 'text-bark-brown hover:bg-bark-brown/10',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
        };

        const widthClass = fullWidth ? 'w-full' : '';

        const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

        if (href) {
            return (
                <Link href={href} className={combinedClassName} {...(props as any)}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={combinedClassName} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
