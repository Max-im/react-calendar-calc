import React, { Component } from 'react';
import './Contacts.css';
import ContactContainer from '../../containers/contactContainer/ContactContainer';
import fb from '../../assets/fb.svg';
import lin from '../../assets/in.svg';
import git from '../../assets/git.svg';
import resume from '../../assets/resume.svg';

const data = [
  {
    name: 'Resume',
    link: 'https://max-im.github.io/',
    img: resume,
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com/max.pozhidaev.7',
    img: fb,
    
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/maxim-pozhidaev-16726811a',
    img: lin,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/Max-im',
    img: git,
  },
]
  // {
  //   name: 'Email',
  //   link: 'pogidaevmo@gmail.com',
  //   img: '',
  // }


class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <div className="container App__block"> 
          <h2 className="App__header">Contact us</h2>
          
          <ContactContainer data={data}/>
    
        </div>
      </div>
    );
  }
}

export default Contacts;
