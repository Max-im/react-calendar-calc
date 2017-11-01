import React from 'react';
import './CalcContainer.css';
import moment from 'moment';

import chevron from '../../assets/down.svg';

function CalcContainer(props) {
  const formatedDate = moment(new Date( new Date().getFullYear(), props.month)).format('MMMM YYYY');
  const listItems = props.data.map( ( item, index ) =>
    <li 
      key={index} 
      onClick={item.cur ? props.get.bind(this, new Date(new Date().getFullYear(), props.month, item.date)) : function(){return null}}
      className={ item.cur ? "calc__calendarDate" : "calc__calendarEmpty" }>
      {item.date}
    </li>
  )
  return (
    <div className="calc__calendarWrap">
      <div className="calc__calendarControl">
        <img 
          className="calc__calendarBtn dec" 
          onClick={props.addMonth}
          src={chevron}
          alt="chevron"
        />
        <h3 className="calc__calendarHeader">
          { formatedDate }
        </h3>
        <img 
          className="calc__calendarBtn inc" 
          onClick={props.addMonth}
          src={chevron}
          alt="chevron"
        />
      </div>
      <ul className="calc__calendarDayListTmpl">
        <li className="calc__calendarDayTmpl">s</li>
        <li className="calc__calendarDayTmpl">m</li>
        <li className="calc__calendarDayTmpl">t</li>
        <li className="calc__calendarDayTmpl">w</li>
        <li className="calc__calendarDayTmpl">t</li>
        <li className="calc__calendarDayTmpl">f</li>
        <li className="calc__calendarDayTmpl">s</li>
      </ul>
      <ul className="calc__calendarList">
        {listItems}
      </ul>
    </div>
  );
}


export default CalcContainer;


