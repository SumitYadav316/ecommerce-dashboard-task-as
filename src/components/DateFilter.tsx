import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

interface DateFilterProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}

export const DateFilter: React.FC<DateFilterProps> = ({ startDate, endDate, onChange }) => {
  const defaultStartDate = dayjs("04-30-22", "MM-DD-YY").toDate();
  const defaultEndDate = dayjs("05-31-22", "MM-DD-YY").toDate(); // Corrected to last record date

  const [selectedStart, setSelectedStart] = useState<Date | null>(startDate || defaultStartDate);
  const [selectedEnd, setSelectedEnd] = useState<Date | null>(endDate || defaultEndDate);

  useEffect(() => {
    onChange([selectedStart, selectedEnd]);
  }, [selectedStart, selectedEnd]); // Fixing missing dependency

  return (
    <div className="mb-4">
      <h3 className="font-bold">Filter by Date</h3>
      <DatePicker
        selected={selectedStart}
        onChange={(dates) => {
          if (Array.isArray(dates)) {
            setSelectedStart(dates[0]);
            setSelectedEnd(dates[1]);
            onChange([dates[0], dates[1]]);
          }
        }}
        startDate={selectedStart}
        endDate={selectedEnd}
        selectsRange
        inline
      />
    </div>
  );
};

