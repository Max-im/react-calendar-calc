import React, { Component } from 'react';

import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

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
