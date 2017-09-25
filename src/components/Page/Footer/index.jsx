import React from 'react';
import './style.css';

const Footer = () => (
  <footer className='wrapperMaxWidth1080 footerContainer'>
    <div className="faBtns">
      <a href="https://github.com/trivalleycoders-org">
        <i className="fa fa-github fa-2x" aria-hidden="true"></i>
      </a>
      <a href="https://www.meetup.com/trivalleycoders//">
        <i className="fa fa-meetup fa-2x" aria-hidden="true"></i>
      </a>
      <a href="https://www.facebook.com/groups/free.code.camp.sanramon/">
        <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
      </a>
    </div>
    <p>&copy; 2017 Tri-Valley Coders &trade;. All rights reserved.</p>
  </footer>
);

export default Footer;
