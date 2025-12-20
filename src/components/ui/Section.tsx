import { HTMLAttributes, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'light' | 'dark' | 'brand';
    fullWidth?: boolean;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
    ({ className = '', variant = 'default', fullWidth = false, children, ...props }, ref) => {
        const variants = {
            default: 'bg-tan-beige text-bark-brown',
            light: 'bg-tan-beige-light text-bark-brown',
            dark: 'bg-bark-brown text-white',
            brand: 'bg-forest-green text-white',
        };

        return (
            <section
                ref={ref}
                className={`${variants[variant]} ${className}`}
                {...props}
            >
                <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 md:px-6'}>
                    {children}
                </div>
            </section>
        );
    }
);

Section.displayName = 'Section';
