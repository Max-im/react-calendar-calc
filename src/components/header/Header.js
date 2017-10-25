import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.css';
import HeaderContainer from '../../containers/headerContainer/HeaderContainer';

const menuNames = [
  {name: 'How it works', path: '/'},
  {name: 'Calendar', path: '/calc'},
  {name: 'Contact us', path: '/contacts'}
];


function resizeControll(e){
  if( window.innerWidth > 768 ){
    this.setState({ ind : false })    
  }
}


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {ind: false};
  }

  componentDidMount() {
    window.addEventListener('resize', resizeControll.bind(this))
  }

  toggleState() {
    if( window.innerWidth < 768 ){
      this.setState({ ind : !this.state.ind })    
    }
  }

  render() {
    return (
      <header className="header">
        <div className="container_flex header__container">

          <div className="header__logoWrap">
            <Link to="/" className="header__logo">MP</Link>
            <span className="header__author">Max Pozhidaev</span>
          </div>


          <nav  className="header__nav">

            <div 
              className={this.state.ind ? "sandwich" : "sandwich swich"}
              onClick={this.toggleState.bind(this)}>
              <div className="sw-topper"></div>
              <div className="sw-bottom"></div>
              <div className="sw-footer"></div>
            </div>


            <div className={this.state.ind ? 'hide' : ''}>
              <HeaderContainer 
                data={menuNames} 
                clickHand={this.toggleState.bind(this)}
              />
            </div>

          </nav>

        </div>
      </header>
    );
  }
}


export default Header;


