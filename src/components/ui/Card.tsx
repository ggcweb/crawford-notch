import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'outline';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', variant = 'default', children, ...props }, ref) => {
        const variants = {
            default: 'bg-white shadow-lg rounded-xl',
            glass: 'glass rounded-xl',
            outline: 'border-2 border-bark-brown/20 rounded-xl bg-transparent',
        };

        return (
            <div
                ref={ref}
                className={`${variants[variant]} p-7 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';
