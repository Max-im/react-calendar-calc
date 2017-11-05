import React from 'react';
import moment from 'moment';

import './CalcContainer.css';
import chevron from '../../assets/down.svg';


const days = ['s', 'm', 't', 'w', 't', 'f', 's'];

function CalcContainer({ incr, decr, data, newDataChoise, additional }) {
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
      const info = new Date(new Date().getFullYear(), data.month, 1 - firstWeekDay + i );
      monthDays.push({
        action: moment(info).format('DD,MM,YY') === moment(data.date).format('DD,MM,YY') ||
          moment(info).format('DD,MM,YY') === moment(additional.date).format('DD,MM,YY')  ? true : false,
        current: i < firstWeekDay ?  false : i > lastDay+firstWeekDay-1 ? false : true,
        dayInfo: info,
        middle: moment(info).format('DD,MM,YY') > moment(data.date).format('DD,MM,YY') ||
          moment(info).format('DD,MM,YY') < moment(additional.date).format('DD,MM,YY')  ? true : false,
      })
    } 
       
  })() 
  

  const daysList = monthDays.map( (item, i) => {
    return (
      <li
        className={ item.action ? 'calc__point' : '' }
        onClick={ newDataChoise.bind(this, {data, item}) }
        key={i}>
        <span className={ item.current ? 'calc__calendarDate' : 'calc__calendarEmpty' }>
          <span className={ item.middle ? '' : 'calc__mark'}>
            { moment( item.dayInfo ).format('D') }
          </span>
        </span>
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


