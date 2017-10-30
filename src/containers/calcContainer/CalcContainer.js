import React from 'react';
import './CalcContainer.css';
import moment from 'moment';


function CalcContainer(props) {

  const formatedMonth = moment(new Date(props.year, props.month))
    .format("MMMM")
    .toString();
  const formatedYear = moment(new Date(props.year, props.month))
    .format("YYYY")
    .toString();
  const listItems = props.data.map( ( item, index ) =>
    <li 
      key={index} 
      onClick={item.length !== 0 ? props.get : function(){return null}}
      className={item.length === 0 ? "calc__calendarEmpty" : "calc__calendarDate"}>
      {item}
    </li>
  )
  return (
    <div className="calc__calendarWrap">
      <div className="calc__calendarControl">
        <a className="calc__calendarBtn dec"
        onClick={props.addMonth}>
        X
      </a>
        <h3 className="calc__calendarHeader">{formatedMonth} {formatedYear}</h3>
        <a 
          className="calc__calendarBtn inc" 
          onClick={props.addMonth}>
          X 
        </a>
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


