import React, { Component } from 'react';
import './AboutElem.css';
import up from '../../assets/up.svg';
import down from '../../assets/down.svg';


class AboutElem extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  toggleState() {
    this.setState({ show : !this.state.show })        
  }

  render() {
    console.log(this.props.img)

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
            <img alt="chevron" src={up} className={this.state.show ? 'about__btn' : 'hide'}/>
            <img alt="chevron" src={down} className={this.state.show ? 'hide' : 'about__btn'}/>
        </div>
      </div>
    );
  }
}


export default AboutElem;


