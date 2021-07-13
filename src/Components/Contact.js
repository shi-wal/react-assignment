import React from 'react';
import './Common.css';
import Header from './Header';

const Contact= function(props){
    return(
        <div><Header/>
        <div className="data-container">
        <div className="main-heading">Contact Us</div>
        <div className="app">
        <form id="contact-form"  method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label><br/>
            <input type="text" className="form-control"  />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label><br/>
            <input type="email" className="form-control" aria-describedby="emailHelp"  />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label><br/>
            <textarea className="form-controls" rows="8" />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
      </div>
      </div>
    );
}

export default Contact;