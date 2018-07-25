import React, { Component } from "react";
import "./menu.scss";
import logo from "./../Logo/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Sticky from 'react-sticky-el';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
class Menu extends Component {
  render() {
    return <Sticky style = {{zIndex: 1}}>
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <a href="" id='inc'><img src={logo} alt="" title=""/></a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="/">Home</a></li>
              <li><AnchorLink href='#about'>About Us</AnchorLink></li>
              <li><AnchorLink href='#services'>Services</AnchorLink></li>
              <li><AnchorLink href='#portfolio'>Portfolio</AnchorLink></li>
              <li><AnchorLink href='#testimonials'>Testimonials</AnchorLink></li>
              <li><AnchorLink href='#team'>Team</AnchorLink></li>
              <li><AnchorLink href='#contact'>Contact Us</AnchorLink></li>
              <Link to='/Lazy'>Lazy Load</Link>
              <Link to='/slider'>Slider</Link>
            </ul>
          </nav>
        </div>
      </header>
    </Sticky>
  }
}

export default Menu;


