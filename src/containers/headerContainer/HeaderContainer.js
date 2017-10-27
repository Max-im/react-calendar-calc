import React from 'react';
import { Link } from 'react-router';
import './HeaderContainer.css';

function HeaderContainer(props) {
  const listItems = props.data.map( (item) => {
    return (
      <li 
        key={item.name}
        className="header__navLi">
        <Link 
          to={item.path} 
          activeClassName="header__navItem_active"
          onClick={props.clickHand}
          className="header__navItem">
          {item.name}
        </Link>
      </li>
    )
  })

  return (
    <ul className="header__navList">
      {listItems}
    </ul>
  );
}


export default HeaderContainer;


