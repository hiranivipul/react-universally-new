import React, { Component } from "react";
import { Fade } from "react-reveal";
import PropTypes from 'prop-types';

class AboutRoute extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <section id="about">
          <Fade bottom>
            <div className="container wow fadeInUp">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="section-title">About {this.props.aboutPerson}</h3>
                  <div className="section-title-divider"/>
                  <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam</p>
                </div>
              </div>
            </div>
            <div className="container about-container wow fadeInUp">
              <div className="row">
                <div className="col-md-6 col-md-push-6 about-content">
                  <h2 className="about-title">We provide great services and ideass</h2>
                  <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                  <p className="about-text">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </p>
                  <p className="about-text">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </section>

      </div>
    );
  }
}
AboutRoute.propTypes = {
  aboutPerson: PropTypes.string,
  // aboutPerson: PropTypes.element.isRequired
}
export default AboutRoute;
