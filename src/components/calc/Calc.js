import React, { Component } from 'react';
import './Calc.css';
import Calendar from '../calendar/Calendar';
import moment from 'moment';




class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDate: '',
      lastDate: ''
    }
  }

  componentDidMount() {
    this.setState({ 
      firstDate: moment(new Date() ).format('l').toString(), 
      lastDate: moment(new Date() ).format('l').toString() 
    })
  }

  getInfo(e){
    const date = e.target.innerHTML;
    const mmmmYyyy = e.target.closest('.calc__calendarWrap').querySelector('.calc__calendarHeader').innerHTML
    const arr = mmmmYyyy.split(' ');
    const firstDate = new Date(arr[1], moment(arr[0], 'MMMM').format('MM'), date);
    const formateDate = moment(firstDate).format('l')
    this.setState({ firstDate: formateDate })
  }

  getTwo(e){
    const date = e.target.innerHTML;
    const mmmmYyyy = e.target.closest('.calc__calendarWrap').querySelector('.calc__calendarHeader').innerHTML
    const arr = mmmmYyyy.split(' ');
    const firstDate = new Date(arr[1], moment(arr[0], 'MMMM').format('MM'), date);
    const formateDate = moment(firstDate).format('l')
    this.setState({ lastDate: formateDate }) 
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

              </div >
            
            </div>
            
            <Calendar get={this.getInfo.bind(this)}/>
            <Calendar get={this.getTwo.bind(this)}/>
           

          </div>
        
        </div>
      </div>
    );
  }
}

export default Calc;
