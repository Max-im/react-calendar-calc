import React from 'react';
import './AboutBlock.css';
import logo from '../../assets/logo.svg';


function AboutBlock(props) {
  const data = props.data;
  const visible = props.visible;
  const click = props.click;

  const listItems = data.map( ( item ) => 
    <div 
      key={item.title} 
      onClick={click}
      className="about__block">

      <img src={ logo } alt="" />
      
      <h3 className="about__title">{item.title}</h3>
      
      <ul className={visible ? '' : 'hide'} >
        {item.list.map( ( subItem, index )=>
          <li key={subItem.name} className="about__blockItem">
            <b>Step { index + 1 } - </b>
            { subItem.name }
          </li>
        )}
      </ul>

    </div>
  );

  return (
    <div className="about__content">
      {listItems}
    </div>
  );
}


export default AboutBlock;


