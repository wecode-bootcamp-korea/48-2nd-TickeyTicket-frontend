import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ startDate, endDate, onDateSelect }) => {
  const [choiceDate, setChoiceDate] = useState(new Date());

  const onChange = dates => {
    const [choice] = dates;
    setChoiceDate(choice);
    onDateSelect(choice);
  };

  const minDate = new Date(startDate);
  const maxDate = new Date(endDate);

  return (
    <div className="calendar">
      <DatePicker
        className=""
        locale={ko}
        selected={choiceDate}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        selectsRange
        inline
        showDisabledMonthNavigation
      />
    </div>
  );
};

export default Calendar;
