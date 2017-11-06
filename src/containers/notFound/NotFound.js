import React from 'react';
import './NotFound.css';

function NotFound(props) {
  return (
    <div className="notFound">
      <div className="container flex">
        <div className="notFound__content">
          <h2 className="notFound__txt">page not found</h2>
          <p className="notFound__err">404 error</p>
        </div>
      </div>
    </div>
  );
}


export default NotFound;


