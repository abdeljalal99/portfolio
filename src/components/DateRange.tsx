interface DateRangeProps {
    startDate: Date;
    endDate?: Date;
}

export function DateRange({ startDate, endDate }: DateRangeProps) {
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', { 
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="text-lg">
            {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"}
        </div>
    );
} 