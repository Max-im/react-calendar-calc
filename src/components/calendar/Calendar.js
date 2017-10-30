import React, { Component } from 'react';
import './Calendar.css';
import CalcContainer from '../../containers/calcContainer/CalcContainer';

let daysArr = [];
let day;
let maxDate;

function addEmptyDays(day){
  daysArr = [];
  for( let i = 1 ; i < day ; i++ ){
    daysArr.push('')
  }
}

function forLoop(maxDate){
    for( let i = 1 ; i <= maxDate ; i++ ){
      daysArr.push(i)
    }
}

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Month: new Date().getMonth(),
      Year: new Date().getFullYear(),
    }
  }
  
  componentWillMount() {
    this.getDate();
  }
  
  getDate(){
   const date = new Date(this.state.Year, this.state.Month);
    date.setDate(0);
    maxDate = date.getDate();
    day = new Date(this.state.Year, this.state.Month, 1).getDay(); 
    addEmptyDays(day);
    forLoop(maxDate); 
  }

  changeDate(e){
    if(e.target.classList.contains('inc')){
      this.setState({
        Month: ++this.state.Month
      })
      this.getDate();
    }
    else{
      this.setState({
        Month: --this.state.Month
      })
      this.getDate();
    }
  }

  render() {
    return (
      <div className="calendar">
         
          
            
           
           
          <div className="calc__calendar">
            
              <CalcContainer 
                get={this.props.get}
                addMonth={this.changeDate.bind(this)}
                data={daysArr}
                year={this.state.Year} 
                month={this.state.Month} />
          </div>

        
      </div>
    );
  }
}

export default Calendar;
