import React, { Component } from 'react';
import './Calc.css';
import Calendar from '../calendar/Calendar';
import moment from 'moment';




class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDate: moment(new Date() ).format('DD/MM/YY'),
      lastDate: moment(new Date() ).format('DD/MM/YY'),
      rawFirst : new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
      rawLast : new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
      result: 0
    }
  }

   
  get(e, el){
    if(el.target.closest('.calendarComp').classList.contains('first')){
      this.setState({
        firstDate: moment(e).format('DD/MM/YY'),
        rawFirst: e,
        result: Math.floor((this.state.rawLast.getTime() - e.getTime()) /1000/60/60/24)
      });
    }
    else{
     this.setState({
        lastDate: moment(e).format('DD/MM/YY'),
        rawLast: e,
        result: Math.floor((e.getTime() - this.state.rawFirst.getTime()) /1000/60/60/24)
      }); 
    }
    this.decor(e, el)
  }

  decor(e, el){
    const first = document.querySelector('.first');
    const firstList = Array.from(first.querySelectorAll('.calc__calendarDate'));
    const second = document.querySelector('.second');
    const secondList = Array.from(second.querySelectorAll('.calc__calendarDate'));
    

    if(el.target.closest('.first')){

      firstList.forEach( item => item.classList.remove('calc__point'))
      el.target.classList.add('calc__point');
      firstList.forEach( item => item.classList.remove('calc__mark'))

    }
    else{
      secondList.forEach( item => item.classList.remove('calc__point'))
      el.target.classList.add('calc__point');
      secondList.forEach( item => item.classList.remove('calc__mark'))
    }
    if( document.querySelectorAll('.calc__point').length === 2 ){
      
      siblingsDecor('first');
      siblingsDecor('second');


      function siblingsDecor (clas) {
        const elem = document.querySelector(`.${clas} .calc__point`);
        let sibl = clas === 'first' ? elem.nextSibling : elem.previousSibling;
        const arrFirst = [];

        while(sibl){
          arrFirst.push(sibl);
          sibl = clas === 'first' ? sibl.nextSibling : sibl.previousSibling;
        }  
        arrFirst.forEach( item => item.classList.add('calc__mark'));  
      }
    }
  }

  

  render() {
    return (
      <div className="calc">
        <div className="container App__block">
          <h2 className="App__header">Calendar</h2>
          
          <div className="calc__content">
            
            <div className="calc__pickerBlock">

              <div className="calc__pickerInputBlock">
                <div className="calc__pickerEl">
                  <h3 className="calc__pickerHeader">departure</h3>
                  <span className="calc__pickerOutDate">{ this.state.firstDate }</span>
                </div>

                <div className="calc__pickerEl">
                  <h3 className="calc__pickerHeader">arriving</h3>
                  <span className="calc__pickerOutDate">{ this.state.lastDate }</span>
                </div>

              </div >
               
              <div className="calc__pickerOutput">
                <h3 className="calc__pickerHeader">days</h3>
                  <span
                    className="calc__pickerOutDate">
                    { this.state.result }
                  </span>
              </div >
            
            </div>
            <div className="calendarComp first">
              <Calendar 
                get={this.get.bind(this)} 
                first = {true} />
            </div>
            <div className="calendarComp second">
              <Calendar 
                get={this.get.bind(this)}
                last = {true} />
            </div>

          </div>
        
        </div>
      </div>
    );
  }
}

export default Calc;
