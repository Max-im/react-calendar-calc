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
        show: false,
        date: new Date(),
        month: new Date().getMonth()
      },
      second: { 
        id: 1,
        show: false,
        date: new Date(),
        month: new Date().getMonth()
      }
    }
  }


  calendarToggle = (e) => {
    const item = e.id === 0 ? 'first' : 'second';
    this.setState({
      [item]: {
        id: e.id,
        date: e.date,
        show: !e.show,
        month: e.month
      }
    });
  }


  incrMonth = (e) => {
    const item = e.id === 0 ? 'first' : 'second';
    if(item === 'first' && this.state.second.month === e.month){
      return
    };
    this.setState({
      [item]: {
        id: e.id,
        date: e.date,
        show: e.show,
        month: ++e.month
      }
    });
  }

  decrMonth = (e) => {
    const item = e.id === 0 ? 'first' : 'second';
    if(item === 'second' && this.state.first.month === e.month){
      return
    }; 
    this.setState({
      [item]: {
        id: e.id,
        date: e.date,
        show: e.show,
        month: --e.month
      }
    });
  }


  newDataChoise = (e) => {
    const item = e.data.id === 0 ? 'first' : 'second';
    if(item === 'first' && this.state.second.date < e.item.dayInfo){
      this.setState({
        first: {
          id: e.data.id,
          date: this.state.second.date,
          show: e.data.show,
          month: e.data.month
        }
      });
      return;
    }; 
    if(item === 'second' && this.state.first.date > e.item.dayInfo){
      this.setState({
        second: {
          id: e.data.id,
          date: this.state.first.date,
          show: e.data.show,
          month: e.data.month
        }
      });
      return;
    };
    this.setState({
      [item]: {
        id: e.data.id,
        date: e.item.dayInfo,
        show: e.data.show,
        month: e.data.month
      }
    });
  }

  countDiff = () => {
    this.setState({

    })
  }


  render() {
    return (
     <div className="calc" itemScope itemType="http://schema.org/Article">
      <div className="container App__block">
          <h2 
            itemProp="name"
            className="App__header">
            Calendar
          </h2>
          
          <div className="calc__content" itemProp="articleBody">
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
                    { Math.floor((this.state.second.date.getTime() - this.state.first.date.getTime())/1000/60/60/24) }
                  </span>
              </div >
            
            </div>
          
            <div className="calc__calendarWraper">
              
              <div className={this.state.first.show ? 'calc__calendarItem' : 'hide'}>
                <CalcContainer 
                  data={this.state.first}
                  additional={this.state.second}
                  incr={this.incrMonth}
                  decr={this.decrMonth}
                  newDataChoise={this.newDataChoise}
                />
              </div>

              <div className={this.state.second.show ? 'calc__calendarItem' : 'hide'}>
                <CalcContainer 
                  data={this.state.second}
                  additional={this.state.first}
                  incr={this.incrMonth}
                  decr={this.decrMonth}
                  newDataChoise={this.newDataChoise}
                />
              </div>

            </div>

          </div>
        </div>
  
      </div>
    );
  }
}

export default Calc;


