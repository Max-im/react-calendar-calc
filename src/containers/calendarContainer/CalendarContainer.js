import React from 'react';
import moment from 'moment';

import './CalendarContainer.css';

function CalendarContainer({ calendarToggle, header, data }) {
  return (
    <div
      onClick={ calendarToggle.bind(this, data) } 
      className="calc__pickerEl">
      
      <h3 className="calc__pickerHeader">
        { header }
      </h3>
      
      <span className="calc__pickerOutDate">
        { moment(data.date).format('DD/MM/YY') }
      </span>

    </div>
  );
}


export default CalendarContainer;


