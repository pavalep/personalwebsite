import React from 'react';

// General Card Component (Backward compatibility)
interface CardProps {
    type: 'stat' | 'caseStudy' | 'stack';
    title: string;
    description: string;
    image?: string;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ type, title, description, image, className = '' }) => {
    if (type === 'stat') {
        return <StatCard number={title} label={description} className={className} />;
    }
    if (type === 'stack') {
        return (
            <StackCard 
                title={title} 
                icon="terminal" 
                tags={description.split(',')} 
                className={className} 
            />
        );
    }
    return (
        <CaseStudyCard
            title={title}
            description={description}
            image={image || ''}
            tags={[]}
            problem=""
            role=""
            outcome=""
            className={className}
        />
    );
};

// 1. StatCard
interface StatCardProps {
    number: string;
    label: string;
    className?: string;
}
export const StatCard: React.FC<StatCardProps> = ({ number, label, className = '' }) => {
    return (
        <div className={`bg-surface-container p-xl rounded-xxl shadow-sm border border-surface-variant/50 hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between ${className}`}>
            <div className="font-headline-lg text-headline-lg text-primary leading-none mb-xs">{number}</div>
            <div className="font-title-md text-title-md text-on-surface-variant font-medium">{label}</div>
        </div>
    );
};

// 2. CaseStudyCard
interface CaseStudyCardProps {
    title: string;
    description?: string;
    image: string;
    imageAlt?: string;
    tags: string[];
    problem: string;
    role: string;
    outcome: string;
    imageOnRight?: boolean;
    className?: string;
}
export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
    title,
    image,
    imageAlt = '',
    tags,
    problem,
    role,
    outcome,
    imageOnRight = false,
    className = '',
}) => {
    return (
        <article className={`bg-surface-container-low rounded-xxl overflow-hidden border border-surface-variant flex flex-col ${
            imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'
        } h-full hover:shadow-md hover:border-primary/20 transition-all duration-300 ${className}`}>
            {/* Image Container */}
            <div className="md:w-1/2 h-[260px] md:h-auto min-h-[300px] relative bg-surface-container-highest overflow-hidden">
                <img 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    src={image} 
                    alt={imageAlt || title} 
                />
            </div>
            
            {/* Content Container */}
            <div className="md:w-1/2 p-huge flex flex-col justify-center space-y-md">
                <div className="flex gap-xs flex-wrap">
                    {tags.map((tag, idx) => (
                        <span 
                            key={idx} 
                            className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-lg font-label-md text-label-md font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
                
                {/* Meta details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-md border-t border-surface-variant/50 pt-md mt-sm">
                    {problem && (
                        <div>
                            <div className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Problem</div>
                            <div className="font-body-md text-body-md mt-xs text-on-surface">{problem}</div>
                        </div>
                    )}
                    {role && (
                        <div>
                            <div className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Role</div>
                            <div className="font-body-md text-body-md mt-xs text-on-surface">{role}</div>
                        </div>
                    )}
                    {outcome && (
                        <div>
                            <div className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Outcome</div>
                            <div className="font-body-md text-body-md mt-xs text-on-surface font-semibold text-primary">{outcome}</div>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

// 3. StackCard
interface StackCardProps {
    title: string;
    icon: string;
    tags: string[];
    className?: string;
}
export const StackCard: React.FC<StackCardProps> = ({ title, icon, tags, className = '' }) => {
    return (
        <div className={`bg-surface-container-high p-xl rounded-xxl space-y-md border border-surface-variant/30 hover:border-primary/20 hover:shadow-sm transition-all duration-300 ${className}`}>
            <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
                <h4 className="font-title-lg text-title-lg font-bold text-on-surface">{title}</h4>
            </div>
            <div className="flex flex-wrap gap-xs">
                {tags.map((tag, idx) => (
                    <span 
                        key={idx} 
                        className="bg-surface px-sm py-xs rounded-lg border border-outline-variant font-label-md text-label-md font-medium text-on-surface-variant"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Card;
