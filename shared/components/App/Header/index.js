import React from 'react';
import Menu from './Menu';
import logo from './Logo/logo.png'
import './header.scss'
import './../../assets/css/style.scss'
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <section id="hero">
        <div className="hero-container">
          <div className="wow fadeIn">
            <div className="hero-logo">
              <img className="" src={logo} alt="Imperial"/>
            </div>

            <h1>Welcome to Imperial studios</h1>
            <h2>We create <span className="rotating">beautiful graphics, functional websites, working mobile apps</span>
            </h2>
            <div className="actions">
              <AnchorLink href='#about' className="btn-get-started">Get Strated</AnchorLink>
              <AnchorLink href='#services' className="btn-services">Our Services</AnchorLink>
            </div>
          </div>
        </div>
      </section>
      <Menu />
    </div>
  );
}

export default Header;
