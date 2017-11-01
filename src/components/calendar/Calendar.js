import React, { Component } from 'react';
import './Calendar.css';
import CalcContainer from '../../containers/calcContainer/CalcContainer';



class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth(),
      daysArr: ''
    }
  }
  
  componentWillMount() {
    this.getDate()
  }
  

  getDate(){
    let date = new Date(new Date().getFullYear(), this.state.month);
    const dateInfo = {
      year: date.getFullYear(),
      month: date.getMonth(),
    };
    const lastDay = new Date(dateInfo.year, dateInfo.month + 1, 0 ).getDate();
    const day = new Date(dateInfo.year, dateInfo.month, 1).getDay();
    const dateArr = [];
    const count = Math.ceil((lastDay + day) / 7) * 7;

    for( let i = 0 ; i < count ; i++ ){
      const newDate = new Date(dateInfo.year, dateInfo.month, 1 - day + i ).getDate(); 
      if( new Date(dateInfo.year, dateInfo.month, 1 - day + i ).getMonth() === dateInfo.month ){
        dateArr.push({
          date: newDate,
          cur: true
        });
      }else{
        dateArr.push({
          date: newDate,
          cur: false
        });
      }
    }

    this.setState({ daysArr: dateArr})

  }
    

  changeDate(e){
    if(e.target.classList.contains('inc')){
      this.setState({
        month: ++this.state.month,
      });

    }
    else{
      this.setState({
        month: --this.state.month,
      });
    }
    this.getDate();
  }
  

  render() {
    return (
      <div className="calendar">
           
          <div className="calc__calendar">
            
              <CalcContainer 
                get={this.props.get}
                addMonth={this.changeDate.bind(this)}
                data={this.state.daysArr}
                month={this.state.month} />
          </div>

        
      </div>
    );
  }
}

export default Calendar;
