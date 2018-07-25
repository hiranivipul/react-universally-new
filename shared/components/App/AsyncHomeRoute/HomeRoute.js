import React, { Component } from "react";
import Helmet from "react-helmet";

import i1 from "../../assets/img/portfolio-1.jpg";
import i2 from "../../assets/img/portfolio-2.jpg";
import i3 from "../../assets/img/portfolio-3.jpg";
import i4 from "../../assets/img/portfolio-4.jpg";
import i5 from "../../assets/img/portfolio-5.jpg";
import i6 from "../../assets/img/portfolio-6.jpg";
import i7 from "../../assets/img/portfolio-7.jpg";
import i8 from "../../assets/img/portfolio-8.jpg";
import c1 from "../../assets/img/client-1.jpg";
import c2 from "../../assets/img/client-2.jpg";
import t1 from "../../assets/img/team-1.jpg";
import t2 from "../../assets/img/team-2.jpg";
import t3 from "../../assets/img/team-3.jpg";
import t4 from "../../assets/img/team-4.jpg";
import quote_sign_left from "../../assets/img/quote_sign_left.png";
import quote_sign_right from "../../assets/img/quote_sign_right.png";

import AboutRoute from "../AsyncAboutRoute/AboutRoute";
import ServiceRoute from "../AsyncServiceRoute/ServiceRoute";

import { Bounce, Fade, Flip, LightSpeed, Roll, Slide, Zoom } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";
import HeadShake from "react-reveal/HeadShake";

import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";

class HomeRoute extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", subject: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = new SimpleReactValidator();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let that = this;
    if (that.validator.allValid()) {
      toast.success("Feedback send successfully.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000
      });
      console.log(this.state);
      /*API.post(`login`, this.state)
        .then(response => {
          toast.success(response.data.meta.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000
          });
          that.props.history.push("/about");
        })
        .catch(error => {
          toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000
          });
        });*/
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    event.preventDefault();
  }

  render() {
    return <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <AboutRoute aboutPerson={"mindinventory"}/>
      <ServiceRoute/>

      <section id="subscribe">
        <Zoom>
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-md-8">
                <h3 className="subscribe-title">Subscribe For Updates</h3>
                <p className="subscribe-text">Join our 1000+ subscribers and get access to the latest tools,
                  freebies,
                  product announcements and much more!</p>
              </div>
              <div className="col-md-4 subscribe-btn-container">
                <a className="subscribe-btn" href="#">Subscribe Now</a>
              </div>
            </div>
          </div>
        </Zoom>
      </section>

      <section id="portfolio">
        <Fade bottom>
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-md-12">
                <h3 className="section-title">Portfolio</h3>
                <div className="section-title-divider"/>
                <p className="section-description">Si stante, hoc natura videlicet vult, salvam esse se, quod
                  concedimus
                  ses haec dicturum fuisse</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <HeadShake>
                  <a className="portfolio-item" style={{ backgroundImage: `url(${i1})` }} href="">
                    <div className="details">
                      <h4>Portfolio 1</h4>
                      <span>Alored dono par</span>
                    </div>
                  </a>
                </HeadShake>
              </div>
              <div className="col-md-3">
                <Flip left>
                  <a className="portfolio-item" style={{ backgroundImage: `url(${i2})` }} href="">
                    <div className="details">
                      <h4>Portfolio 2</h4>
                      <span>Alored dono par</span>
                    </div>
                  </a>
                </Flip>
              </div>
              <div className="col-md-3">
                <Bounce>
                  <a className="portfolio-item" style={{ backgroundImage: `url(${i3})` }} href="">
                    <div className="details">
                      <h4>Portfolio 3</h4>
                      <span>Alored dono par</span>
                    </div>
                  </a>
                </Bounce>
              </div>
              <div className="col-md-3">
                <Zoom>
                  <a className="portfolio-item" style={{ backgroundImage: `url(${i4})` }} href="">
                    <div className="details">
                      <h4>Portfolio 4</h4>
                      <span>Alored dono par</span>
                    </div>
                  </a>
                </Zoom>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <RubberBand>
                  <a className="portfolio-item" style={{ backgroundImage: `url(${i5})` }} href="">
                    <div className="details">
                      <h4>Portfolio 5</h4>
                      <span>Alored dono par</span>
                    </div>
                  </a>
                </RubberBand>
              </div>
              <div className="col-md-3">
                <Slide bottom>
                  <a className="portfolio-item" style={{ backgroundImage: `url(${i6})` }} href="">
                    <div className="details">
                      <h4>Portfolio 6</h4>
                      <span>Alored dono par</span>
                    </div>
                  </a>
                </Slide>
              </div>
              <div className="col-md-3">
                <Roll bottom>
                  <a className="portfolio-item" style={{ backgroundImage: `url(${i7})` }} href="">
                    <div className="details">
                      <h4>Portfolio 7</h4>
                      <span>Alored dono par</span>
                    </div>
                  </a>
                </Roll>
              </div>
              <div className="col-md-3">
                <LightSpeed bottom>
                  <a className="portfolio-item" style={{ backgroundImage: `url(${i8})` }} href="">
                    <div className="details">
                      <h4>Portfolio 8</h4>
                      <span>Alored dono par</span>
                    </div>
                  </a>
                </LightSpeed>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section id="testimonials">
        <Fade bottom>
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-md-12">
                <h3 className="section-title">Testimonials</h3>
                <div className="section-title-divider"/>
                <p className="section-description">Erdo lide, nora porodo filece, salvam esse se, quod concedimus ses
                  haec dicturum fuisse</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <div className="profile">
                  <div className="pic"><img src={c1} alt=""/></div>
                  <h4>Saul Goodman</h4>
                  <span>Lawless Inc</span>
                </div>
              </div>
              <div className="col-md-9">
                <div className="quote">
                  <b><img src={quote_sign_left} alt=""/></b> Proin iaculis purus consequat sem cure digni ssim
                  donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.
                  Maecen aliquam, risus at semper. <small>
                  <img src={quote_sign_right} alt=""/></small>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-9">
                <div className="quote">
                  <b><img src={quote_sign_left} alt=""/></b> Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis architecto beatae. <small>
                  <img src={quote_sign_right} alt=""/></small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="profile">
                  <div className="pic"><img src={c2} alt=""/></div>
                  <h4>Sara Wilsson</h4>
                  <span>Odeo Inc</span>
                </div>
              </div>
            </div>

          </div>
        </Fade>
      </section>

      <section id="team">
        <Fade bottom>
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-md-12">
                <h3 className="section-title">Our Team</h3>
                <div className="section-title-divider"/>
                <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <div className="member">
                  <div className="pic"><img src={t1} alt=""/></div>
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                    <a href=""><i className="fa fa-twitter"/></a>
                    <a href=""><i className="fa fa-facebook"/></a>
                    <a href=""><i className="fa fa-google-plus"/></a>
                    <a href=""><i className="fa fa-linkedin"/></a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="member">
                  <div className="pic"><img src={t2} alt=""/></div>
                  <h4>Sarah Jhinson</h4>
                  <span>Product Manager</span>
                  <div className="social">
                    <a href=""><i className="fa fa-twitter"/></a>
                    <a href=""><i className="fa fa-facebook"/></a>
                    <a href=""><i className="fa fa-google-plus"/></a>
                    <a href=""><i className="fa fa-linkedin"/></a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="member">
                  <div className="pic"><img src={t3} alt=""/></div>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <div className="social">
                    <a href=""><i className="fa fa-twitter"/></a>
                    <a href=""><i className="fa fa-facebook"/></a>
                    <a href=""><i className="fa fa-google-plus"/></a>
                    <a href=""><i className="fa fa-linkedin"/></a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="member">
                  <div className="pic"><img src={t4} alt=""/></div>
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div className="social">
                    <a href=""><i className="fa fa-twitter"/></a>
                    <a href=""><i className="fa fa-facebook"/></a>
                    <a href=""><i className="fa fa-google-plus"/></a>
                    <a href=""><i className="fa fa-linkedin"/></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Fade>
      </section>

      <section id="contact">
        <Fade bottom>
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-md-12">
                <h3 className="section-title">Contact Us</h3>
                <div className="section-title-divider"/>
                <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 col-md-push-2">
                <div className="info">
                  <div>
                    <i className="fa fa-map-marker"/>
                    <p>A108 Adam Street<br/>New York, NY 535022</p>
                  </div>

                  <div>
                    <i className="fa fa-envelope"/>
                    <p>info@example.com</p>
                  </div>

                  <div>
                    <i className="fa fa-phone"/>
                    <p>+1 5589 55488 55s</p>
                  </div>

                </div>
              </div>

              <div className="col-md-5 col-md-push-2">
                <div className="form">
                  <div id="sendmessage">Your message has been sent. Thank you!</div>
                  <div id="errormessage"/>
                  <form action="" method="post" role="form" className="contactForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                             value={this.state.name} onChange={this.handleChange}/>
                      {this.validator.message("name", this.state.name, "required", "text-danger")}
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                             value={this.state.email} onChange={this.handleChange}/>
                      {this.validator.message("email", this.state.email, "required|email", "text-danger")}

                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                             value={this.state.subject} onChange={this.handleChange}/>
                      {this.validator.message("subject", this.state.subject, "required", "text-danger")}

                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows="5" data-rule="required"
                                placeholder="Message" value={this.state.message} onChange={this.handleChange}/>
                      {this.validator.message("message", this.state.message, "required", "text-danger")}

                    </div>
                    <div className="text-center">
                      <button type="submit" id='contact-send'>Send Message</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </Fade>
      </section>
    </div>;
  }
}

export default HomeRoute;
