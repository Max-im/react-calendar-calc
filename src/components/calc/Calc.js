import React, { Component } from 'react';

import './Calc.css';
import CalendarContainer from '../../containers/calendarContainer/CalendarContainer';
import CalcContainer from '../../containers/calcContainer/CalcContainer';



class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: { 
        id: 0,
        show: true,
        date: new Date(),
        month: new Date().getMonth()
      },
      second: { 
        id: 1,
        show: true,
        date: new Date(),
        month: new Date().getMonth()
      }
    }
  }

  calendarToggle = (e) => {
    if(e === 0) {
      this.setState({
        first: {
          id: 0,
          show: !this.state.first.show,
          date: new Date(),
          month: new Date().getMonth()
        }
      })
    }
    else{
     this.setState({
        second: {
          id: 1,
          show: !this.state.second.show,
          date: new Date(),
          month: new Date().getMonth()
        }
      }) 
    }
  }

  incrMonth = (e) => {
   if(e.id === 1){
    this.setState({
      second: {
        id: 1,
        date: new Date(),
        month: ++this.state.second.month
      }
    })
    console.log(this.state.second.month)
   }
   else{
    this.setState({
      first: {
        id: 0,
        date: new Date(),
        month: ++this.state.first.month
      }
    })
   }
  }

  decrMonth = (e) => {
   if(e.id === 1){
    this.setState({
      second: {
        id: 1,
        date: new Date(),
        month: --this.state.second.month
      }
    })
    console.log(this.state.second.month)
   }
   else{
    this.setState({
      first: {
        id: 0,
        date: new Date(),
        month: --this.state.first.month
      }
    })
   }
  }


  render() {
    return (
     <div className="calc">
      <div className="container App__block">
          <h2 className="App__header">Calendar</h2>
          
          <div className="calc__content">
            <div className="calc__pickerBlock">

              <CalendarContainer 
                data={ this.state.first }
                calendarToggle={ this.calendarToggle }
                header='departure' />

              <CalendarContainer 
                data={ this.state.second }
                calendarToggle={ this.calendarToggle }
                header='arriving' />
               
              <div className="calc__pickerOutput">
                <h3 className="calc__pickerHeader">days</h3>
                  <span
                    className="calc__pickerOutDate">
                  </span>
              </div >
            
            </div>
          </div>
        
          <div className="calc__calendarWraper">
            
            <div className={this.state.first.show ? '' : 'hide'}>
              <CalcContainer 
                data={this.state.first}
                incr={this.incrMonth}
                decr={this.decrMonth}
              />
            </div>

            <div className={this.state.second.show ? '' : 'hide'}>
              <CalcContainer 
                className={this.state.second.show ? '' : 'hide'}
                data={this.state.second}
                incr={this.incrMonth}
                decr={this.decrMonth}
              />
            </div>

          </div>

        </div>
  
      </div>
    );
  }
}

export default Calc;


