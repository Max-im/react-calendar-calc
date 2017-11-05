import React, { Component } from 'react';
import './About.css';
import AboutElem from '../aboutElem/AboutElem';
import setup from '../../assets/setup.svg';
import run from '../../assets/run.svg';
import tech from '../../assets/tech.svg';

const data = [
  { 
    title: 'SetUp the App',
    img: setup,
    list: [
      { name: 'git clone the repo' },
      { name: 'cd repo dir' },
      { name: 'npm i' }
    ]
  },
  { 
    title: 'Run the App',
    img: run,
    list: [
      { name: 'npm start - for start App in develop mode' },
      { name: 'npm test - for test the App' },
      { name: 'npm run build - for build production version' }
    ]
  },
  { 
    title: 'App tech',
    img: tech,
    list: [
      { name: 'React-cli (create-react-app)' },
      { name: 'React / ES6' },
      { name: 'React-router' },
      { name: 'Sass (Scss) / CSS3' },
      { name: 'HTML5' }
    ]
  }
]




class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  render() {
    const listItem = data.map( (item, index) => 
      <div 
        key={item.title} 
        onClick={this.toggleState}
        className="about__block">
          <img alt={item.title} src= {data[index].img} className="about__img" />

          <div>
            <h3 className="about__title">{item.title}</h3>
            <AboutElem data={data[index].list}  />
          </div>

      </div>
    )

    return (
      <div className="about" itemScope itemType="http://schema.org/Article">
        <div className="container App__block">
        
          <h2 
            itemProp="name"
            className="about__header App__header">
            About this App
          </h2>

          <div className="about__contentWrap" itemProp="articleBody">
            {listItem}
          </div>

        </div>
      </div>
    );
  }
}

export default About;
