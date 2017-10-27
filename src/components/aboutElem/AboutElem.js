import React, { Component } from 'react';
import './AboutElem.css';


class AboutElem extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }


  toggleState() {
    this.setState({ show : !this.state.show })        
  }
  render() {

    const itemLists = this.props.data.map( ( item, index ) =>
      <li
        key={item.name} 
        className="about__blockItem">
        <b>Step { index + 1 } - </b>
        {item.name}
      </li>
    )

    return (
      <div>
        <ul 
          className={this.state.show ? '' : 'hide'}>
          {itemLists}
        </ul>
        <div 
            onClick={this.toggleState.bind(this)}
            className="about__btnWrap">
            <a className="about__btn">rrr</a>
        </div>
      </div>
    );
  }
}


export default AboutElem;


