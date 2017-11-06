import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRedirect, hashHistory } from 'react-router';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app/App';
import About from './components/about/About';
import Calc from './components/calc/Calc';
import Contacts from './components/contacts/Contacts';
import NotFound from './components/notFound/NotFound';


ReactDOM.render(
  
  <Router history={ hashHistory }> 
    <Route path="/" component={ App }>
      <IndexRedirect to='about' />
      <Route path="/about" component={ About } />
      <Route path="/calc" component={ Calc } />
      <Route path="/contacts" component={ Contacts } />
      <Route path="/*" component={ NotFound } />
    </Route>
  </Router>, 

  document.getElementById('root'));
registerServiceWorker();
