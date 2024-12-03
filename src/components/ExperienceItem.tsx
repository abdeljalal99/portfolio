import { DateRange } from './DateRange';

interface ExperienceItemProps {
    startDate: Date;
    endDate?: Date;
    company: string;
    description: string;
}

export function ExperienceItem({ startDate, endDate, company, description }: ExperienceItemProps) {
    return (
        <li>
            <DateRange startDate={startDate} endDate={endDate} />
            <div className="text-2xl font-bold" style={{ color: '#FDF0D5' }}>{company}</div>
            <p style={{ color: '#FFFFFF' }}>{description}</p>
        </li>
    );
} 