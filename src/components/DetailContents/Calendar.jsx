import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [choiceDate, setChoiceDate] = useState(new Date());
  const onChange = dates => {
    const [choice] = dates;
    setChoiceDate(choice);
  };

  return (
    <div className="calendar">
      <DatePicker
        className=""
        locale={ko}
        selected={choiceDate}
        onChange={onChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 5)}
        choicetDate={choiceDate}
        selectsRange
        inline
        showDisabledMonthNavigation
      />
    </div>
  );
};

export default Calendar;
