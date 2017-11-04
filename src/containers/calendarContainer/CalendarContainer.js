import React from 'react';
import moment from 'moment';

import './CalendarContainer.css';
import CalcContainer from '../calcContainer/CalcContainer';


function CalendarContainer({ calendarToggle, header, data }) {
  
  return (
    <div
      onClick={ calendarToggle.bind(this, data.id) } 
      className="calc__pickerEl">
      
      <h3 className="calc__pickerHeader">
        { header }
      </h3>
      
      <span className="calc__pickerOutDate">
        {moment(new Date(), data.month).format('DD/MM/YY')}
      </span>

    </div>
  );
}


export default CalendarContainer;


