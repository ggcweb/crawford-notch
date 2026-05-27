import Link from 'next/link';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    target?: string;
    rel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps & { fullWidth?: boolean }>(
    ({ className = '', variant = 'primary', size = 'md', href, fullWidth = false, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-tight transition-colors focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-rust disabled:opacity-50 disabled:pointer-events-none';

        const variants = {
            primary: 'bg-forest-green text-cream hover:bg-forest-green-dark',
            accent: 'bg-rust text-cream hover:bg-rust-dark',
            secondary: 'bg-bark-brown text-cream hover:bg-bark-brown-dark',
            outline: 'border border-forest-green text-forest-green hover:bg-forest-green hover:text-cream',
            ghost: 'text-forest-green hover:bg-forest-green/10',
        };

        const sizes = {
            sm: 'h-10 px-5 text-[0.95rem]',
            md: 'h-12 px-7 text-base',
            lg: 'h-14 px-9 text-lg',
        };

        const widthClass = fullWidth ? 'w-full' : '';

        const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

        if (href) {
            return (
                <Link href={href} className={combinedClassName} {...(props as Record<string, unknown>)}>
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
