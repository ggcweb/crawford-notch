import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'outline';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', variant = 'default', children, ...props }, ref) => {
        const variants = {
            default: 'bg-white shadow-md rounded-lg',
            glass: 'glass rounded-lg',
            outline: 'border-2 border-bark-brown/20 rounded-lg bg-transparent',
        };

        return (
            <div
                ref={ref}
                className={`${variants[variant]} p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';
