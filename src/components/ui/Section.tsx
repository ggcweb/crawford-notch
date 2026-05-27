import { HTMLAttributes, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'light' | 'dark' | 'brand' | 'burgundy';
    fullWidth?: boolean;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
    ({ className = '', variant = 'default', fullWidth = false, children, ...props }, ref) => {
        const variants = {
            default: 'bg-tan-beige-light text-foreground',
            light: 'bg-cream text-foreground',
            dark: 'bg-bark-brown-dark text-cream',
            brand: 'bg-forest-green text-cream',
            burgundy: 'bg-deep-burgundy text-cream',
        };

        return (
            <section
                ref={ref}
                className={`${variants[variant]} ${className}`}
                {...props}
            >
                <div className={fullWidth ? 'w-full' : 'max-w-6xl mx-auto px-5 md:px-8'}>
                    {children}
                </div>
            </section>
        );
    }
);

Section.displayName = 'Section';
