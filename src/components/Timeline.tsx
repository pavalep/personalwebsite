import React from 'react';

interface TimelineItemProps {
    date: string;
    title: string;
    company: string;
    description: string;
    isActive?: boolean;
    className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
    date, 
    title, 
    company, 
    description, 
    isActive = false,
    className = '' 
}) => {
    return (
        <div className={`md:pl-huge relative transition-all duration-300 group ${className}`}>
            {/* Desktop timeline marker */}
            <div 
                className={`hidden md:block absolute left-2 top-2 w-4 h-4 rounded-full transition-all duration-300 ${
                    isActive 
                        ? 'bg-primary ring-4 ring-primary-container' 
                        : 'bg-primary-container'
                }`}
            />
            
            {/* Timeline content block */}
            <div className={`bg-surface-container p-xl rounded-xl border border-transparent transition-all duration-300 ${
                isActive 
                    ? 'shadow-md border-primary-container' 
                    : 'hover:bg-surface-container-high hover:shadow-sm hover:border-outline-variant/35'
            }`}>
                <div className="flex flex-col md:flex-row md:justify-between items-start mb-sm gap-xs">
                    <div>
                        <h4 className="font-title-lg text-title-lg text-on-surface font-bold">{title}</h4>
                        <div className="font-body-md text-body-md text-primary font-medium">{company}</div>
                    </div>
                    <div className="font-label-md text-label-md text-on-surface-variant mt-xs md:mt-0">
                        {date}
                    </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

interface TimelineProps {
    items: TimelineItemProps[];
    className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
    return (
        <div className={`relative space-y-xl ${className}`}>
            {/* Vertical Line on Desktop */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-primary-container rounded-full hidden md:block" />
            
            {items.map((item, index) => (
                <TimelineItem 
                    key={index} 
                    {...item} 
                    isActive={index === 0} // highlight the most recent job
                />
            ))}
        </div>
    );
};

export default Timeline;
