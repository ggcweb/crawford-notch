import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outline' | 'inset';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', variant = 'default', children, ...props }, ref) => {
        const variants = {
            default: 'bg-cream border border-bark-brown/12 shadow-[0_1px_2px_rgba(45,36,23,0.06)]',
            outline: 'border border-bark-brown/25 bg-transparent',
            inset: 'bg-bark-brown-dark/20 border border-cream/15',
        };

        return (
            <div
                ref={ref}
                className={`rounded-sm p-7 ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';
