import React, { Component } from 'react';
import './Calc.css';
import Calendar from '../calendar/Calendar';
import moment from 'moment';




class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDate: '',
      lastDate: '',
      rawFirst : '',
      rawLast : '',
      result: ''
    }
  }

  componentDidMount() {
    this.setState({ 
      firstDate: moment(new Date() ).format('DD/MM/YY'), 
      lastDate: moment(new Date() ).format('DD/MM/YY') ,
      rawFirst: new Date(),
      rawLast: new Date()
    })
  }

  
  getFirst(e){
    this.setState({
      firstDate: moment(e).format('DD/MM/YY'),
      rawFist: e
    });
  }
  getSecond(e){
    this.setState({
      lastDate: moment(e).format('DD/MM/YY'),
      rawLast: e
    });
    setTimeout(() => {
      console.log( this.state.rawLast - this.state.rawFirst )
    }, 0)
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
            
            <Calendar get={this.getFirst.bind(this)}/>
            <Calendar get={this.getSecond.bind(this)}/>
           

          </div>
        
        </div>
      </div>
    );
  }
}

export default Calc;
