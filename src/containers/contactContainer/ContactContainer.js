import React from 'react';
import './ContactContainer.css';

function ContactContainer(props) {
  const listItems = props.data.map( ( item, index ) =>
    <div key={item.name} className="contactContainer__element">
      <div className="contactContainer__content">
        <img 
          alt={ item.name } 
          src={ item.img } 
          className="contactContainer__img" />
        <span className="contactContainer__title">{ item.name }  </span>
      </div>
      <a 
        href={ item.link } 
        className="contactContainer__btn"
        target={item.target}>
        { item.btn } 
      </a>
    </div>
  )
  return (
    <div className="contactContainer ">
      {listItems}
    </div>
  );
}


export default ContactContainer;


