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
