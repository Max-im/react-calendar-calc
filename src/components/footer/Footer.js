import React, { Component } from 'react';
import './Footer.css';
import FooterContainer from '../../containers/footerContainer/FooterContainer';

const data = [
  { name: "Terms", link: "/" },
  { name: "Help", link: "/" },
  { name: "Privacy", link: "/" },
  { name: "Status", link: "/" },
  { name: "Security", link: "/" },
  { name: "Contact", link: "/" }
]



class Footer extends Component {
  render() {
    return (
     <footer className="footer">
        <div className="container_flex footer__container">

          <div className="footer__copyrightWrap">
            <small className="footer__copyright">{`© ${new Date().getFullYear()} Copyright`}</small>
          </div>
          

          <div className="footer__menu">
            <FooterContainer data={data} />
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;


