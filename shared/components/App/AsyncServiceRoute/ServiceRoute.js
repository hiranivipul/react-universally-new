/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { Fade } from "react-reveal";

class ServiceRoute extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="services">
        <Fade bottom>
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-md-12">
                <h3 className="section-title">Our Services</h3>
                <div className="section-title-divider"/>
                <p className="section-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 service-item">
                <div className="service-icon"><i className="fa fa-desktop"/></div>
                <h4 className="service-title"><a href="">Lorem Ipsum</a></h4>
                <p className="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon"><i className="fa fa-bar-chart"/></div>
                <h4 className="service-title"><a href="">Dolor Sitema</a></h4>
                <p className="service-description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon"><i className="fa fa-paper-plane"/></div>
                <h4 className="service-title"><a href="">Sed ut perspiciatis</a></h4>
                <p className="service-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 service-item">
                <div className="service-icon"><i className="fa fa-photo"/></div>
                <h4 className="service-title"><a href="">Magni Dolores</a></h4>
                <p className="service-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon"><i className="fa fa-road"/></div>
                <h4 className="service-title"><a href="">Nemo Enim</a></h4>
                <p className="service-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon"><i className="fa fa-shopping-bag"/></div>
                <h4 className="service-title"><a href="">Eiusmod Tempor</a></h4>
                <p className="service-description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default ServiceRoute;
