import React from 'react';
import './FooterContainer.css';
import { Link } from 'react-router'

function FoorerContainer(props) {
  const data = props.data;
  const listItems = data.map( (item) => 
    <li key={item.name} className="footer__listItem">
    <Link to={item.link} className="footer__link">{item.name}</Link>
    </li>
  );

  return (
    <ul className="footer__list">
      {listItems}
    </ul>
  );
}


export default FoorerContainer;


