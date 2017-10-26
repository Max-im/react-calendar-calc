import React, { Component } from 'react';
import './About.css';
import AboutBlock from '../../containers/aboutBlock/AboutBlock';


const data = [
  { 
    title: 'SetUp the App',
    img: 'logo',
    list: [
      { name: 'git clone the repo' },
      { name: 'cd repo dir' },
      { name: 'npm i' }
    ]
  },
  { 
    title: 'Run the App',
    list: [
      { name: 'npm start - for start App in develop mode' },
      { name: 'npm test - for test the App' },
      { name: 'npm run build - for build production version' }
    ]
  },
  { 
    title: 'App technologies',
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

  visibleToggle(){
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    return (
      <div className="about">
        <div className="container about__container">
        
          <h2 className="about__header App__header">About this App</h2>

          <div className="about__contentWrap">
            <AboutBlock 
              data={data} 
              click={this.visibleToggle.bind(this)}
              visible={this.state.isVisible} 
            />
          </div>

        </div>
      </div>
    );
  }
}

export default About;
