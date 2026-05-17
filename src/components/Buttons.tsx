import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'filled' | 'outlined' | 'text';
    label: string;
    icon?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
    variant = 'filled', 
    label, 
    icon, 
    className = '', 
    ...props 
}) => {
    const baseStyle = 'font-title-md text-title-md rounded-xxl transition-all duration-200 flex items-center justify-center gap-sm active:scale-95 focus:outline-none';
    
    const styles = {
        filled: 'bg-primary text-on-primary px-xxl py-md shadow-md hover:bg-on-primary-fixed-variant transition-all active:scale-95',
        outlined: 'border border-outline text-primary px-xxl py-md hover:bg-surface-container transition-all active:scale-95',
        text: 'text-primary px-lg py-sm hover:bg-primary-container/20 transition-all active:scale-95',
    };

    return (
        <button 
            className={`${baseStyle} ${styles[variant]} ${className}`} 
            {...props}
        >
            {icon && <span className="material-symbols-outlined text-xl">{icon}</span>}
            <span>{label}</span>
        </button>
    );
};

export const FilledButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
    <Button variant="filled" {...props} />
);

export const OutlinedButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
    <Button variant="outlined" {...props} />
);

export const TextButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
    <Button variant="text" {...props} />
);

export default Button;
