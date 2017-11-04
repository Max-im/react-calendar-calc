import React from 'react';
import moment from 'moment';

import './CalcContainer.css';
import chevron from '../../assets/down.svg';


const days = ['s', 'm', 't', 'w', 't', 'f', 's'];

function CalcContainer({incr, decr, data}) {
  const daysNameList = days.map( (item, i) => {
    return ( 
      <li 
        key={i}
        className="calc__calendarDayTmpl">
        {item}
      </li>
    )
  });

  const monthDays = [];
  (() => {
    const lastDay = new Date(data.date.getFullYear(), data.month+1, 0).getDate();
    const firstWeekDay = new Date(data.date.getFullYear(), data.month, 1).getDay()+1;
    const count = Math.ceil((lastDay + firstWeekDay) / 7) * 7;

    for( let i = 1 ; i <= count ; i++ ){
      const info = new Date(data.date.getFullYear(), data.month, 1 - firstWeekDay + i );
      monthDays.push({
        current: i < firstWeekDay ?  false : i > lastDay+firstWeekDay-1 ? false : true,
        dayInfo: info
      })
    } 
       
  })() 
  

  const daysList = monthDays.map( (item, i) => {
    return (
      <li
        className={item.current ? '' : 'calc__calendarEmpty'}
        key={i}>
        { moment( item.dayInfo ).format('D') }
      </li>
    )
  })
  
  return (
    <div 
      
      className="calc__calendarWrap">
      
      <div className="calc__calendarControl">
        <img 
          onClick={decr.bind(this, data)}
          className={"calc__calendarBtn dec"} 
          src={chevron}
          alt="chevron"
        />
        
        <h3 className="calc__calendarHeader">
          {moment(new Date().setMonth(data.month)).format('YYYY MMMM') }
        </h3>

        <img 
          onClick={incr.bind(this, data)}
          className="calc__calendarBtn inc" 
          src={chevron}
          alt="chevron"
        />
      </div>
      
      <ul className="calc__calendarDayListTmpl">
        { daysNameList }
      </ul>


      <ul className="calc__calendarList">
        { daysList }
      </ul>
    
    </div>
  );
}


export default CalcContainer;


