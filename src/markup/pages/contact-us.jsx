import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Import Images
import bnrImg1 from '../../images/banner/img1.jpg'
import pic1 from '../../images/about/pic-1.jpg'
import icon1 from '../../images/icon/icon1.png'
import icon2 from '../../images/icon/icon2.png'
import icon3 from '../../images/icon/icon3.png'
import animateWave from '../../images/shap/wave-blue.png'
import animate2 from '../../images/shap/circle-dots.png'
import animateRotate from '../../images/shap/plus-blue.png'
import GoogleMap from './../elements/googleMap'

class ContactUs extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner banner-lg contact-banner"
              style={{ backgroundImage: 'url(' + bnrImg1 + ')' }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Bizimlə əlaqə</h1>
                  <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>{' '}
                          Ana səhifə
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Bizimlə əlaqə{' '}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <img className="pt-img1 animate-wave" src={animateWave} alt="" />
              <img className="pt-img2 animate2" src={animate2} alt="" />
              <img
                className="pt-img3 animate-rotate"
                src={animateRotate}
                alt=""
              />
            </div>
          </div>

          <section className="">
            <div className="container">
              <div className="contact-wraper">
                <div className="row">
                  <div className="col-lg-6 mb-30 border-radiusClasss">
                    {/* <form className="form-wraper contact-form ajax-form">
											<div className="ajax-message"></div>
											<div className="row">
												<div className="form-group col-md-12">
													<input name="name" type="text" required className="form-control" placeholder="Your Name"/>
												</div>
												<div className="form-group col-md-12">
													<input name="email" type="email" required className="form-control" placeholder="Email"/>
												</div>
												<div className="form-group col-md-12">
													<input name="phone" type="text" required className="form-control" placeholder="Phone Numbers"/>
												</div>
												<div className="form-group col-md-12">
													<select className="form-select form-control">
														<option defaultValue="Selecty Department">Selecty Department</option>
														<option defaultValue="1">One</option>
														<option defaultValue="2">Two</option>
														<option defaultValue="3">Three</option>
													</select>
												</div>
												<div className="form-group col-md-12">
													<textarea name="message" required className="form-control" placeholder="Type Message"></textarea>
												</div>
												<div className="col-lg-12">
													<button name="submit" type="submit" defaultValue="Submit" className="btn w-100 btn-secondary btn-lg">Submit</button>
												</div>
											</div>
										</form> */}
                    <GoogleMap />
                  </div>
                  <div className="col-lg-6 mb-30">
                    <div
                      className="contact-info ovpr-dark"
                      style={{ backgroundImage: 'url(' + pic1 + ')' }}
                    >
                      <div className="info-inner">
                        <h4 className="title mb-30">Haqqımızda</h4>
                        <div className="icon-box">
                          <h6 className="title">
                            <i className="ti-map-alt"></i>Ünvan
                          </h6>
                          <p>Dilarə Əliyeva küç. 175 </p>
                        </div>
                        <div className="icon-box">
                          <h6 className="title">
                            <i className="ti-id-badge"></i> Əlaqə üçün
                          </h6>
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=dimedmedicalcentre@mail.ru"
                            target="_blank"
                            className="text-white"
                          >
                            dimedmedicalcentre@mail.ru
                          </a>
                          <br /> <br />
                          <p> (012) 597 90 33</p>
                          <p> (070) 790 10 33</p>
                          <p> (055) 791 10 33</p>
                          <a
                            id="wp"
                            target={'_blank'}
                            href="https://wa.me/994707475354"
                          >
                            {' '}
                            (070) 747 53 54
                          </a>
                        </div>
                        <div className="icon-box">
                          <h6 className="title">
                            <i className="ti-world"></i>
                            Sosial şəbəkələrimiz
                          </h6>
                          <ul className="social-media">
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.facebook.com/DIMEDMedicalCenter"
                              >
                                <i className="fab fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://wa.me/994707475354"
                              >
                                <i className="fab fa-whatsapp"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.instagram.com/dimed.medical.center/"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-area section-sp1">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx4 feature4">
                    <div className="icon-md feature-icon">
                      <img src={icon1} alt="" />
                    </div>
                    <div className="icon-content">
                      <h5 className="ttr-title">Əlaqə nömrələrimiz</h5>
                      <p> (012) 597 90 33</p>
                      <p> (070) 790 10 33</p>
                      <p> (055) 791 10 33</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx4 feature3">
                    <div className="icon-md feature-icon">
                      <img src={icon3} alt="" />
                    </div>
                    <div className="icon-content">
                      <h5 className="ttr-title">Email Addresimiz</h5>

                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=dimedmedicalcentre@mail.ru"
                        target="_blank"
                      >
                        dimedmedicalcentre@mail.ru
                      </a>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx4 feature2">
                    <div className="icon-md feature-icon">
                      <img src={icon2} alt="" />
                    </div>
                    <div className="icon-content">
                      <h5 className="ttr-title">Ünvan </h5>
                      <p>Dilarə Əliyeva küç. 175</p>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default ContactUs
