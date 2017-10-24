import React, { Component } from 'react';
import logo from '../../assets/logo.svg';

import './App.css';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <main className="main">
          {this.props.children}
        </main>
        
        <Footer />
      </div>
    );
  }
}

export default App;
