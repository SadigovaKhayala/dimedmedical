import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Images
import Logo from '../../images/logo.png'
import footerBg from '../../images/background/footer.jpg'
import ptImg1 from '../../images/shap/wave-blue.png'
import ptImg2 from '../../images/shap/circle-dots.png'
import ptImg3 from '../../images/shap/plus-blue.png'
import ptImg4 from '../../images/shap/wave-blue.png'
import telephone from '../../images/icon/icon1.png'

// Social Images
import facebook from '../../images/social/facebook.png'
import twitter from '../../images/social/twitter.png'
import instagram from '../../images/social/instagram.png'
import linkedin from '../../images/social/linkedin.png'

class aboutSection extends Component {
  render() {
    return (
      <>
        <footer
          className="footer"
          style={{ backgroundImage: 'url(' + footerBg + ')' }}
        >
          <div className="footer-top">
            <div className="container">
              <div className="row d-flex align-items-start justify-content-center">
                <div className="col-xl-3 col-lg-3 col-md-12 ">
                  <div className="widget widget_info d-flex align-items-center w-full flex-column">
                    <div className="footer-logo">
                      <Link to="/">
                        <img src={Logo} alt="" />
                      </Link>
                    </div>
                    <h3 className="footer-title">Bizimlə əlaqə </h3>
                    <ul>
                      <li>
                        <Link to="/about-us">
                          <ul>
                            <li>
                              <span className="d-flex gap-3 align-items-center text-align-center">
                                <i class="fas fa-phone-alt"></i>{' '}
                                <p className="m-0 p-0">(012) 597 90 33</p>
                              </span>
                            </li>
                            <li>
                              <span className="d-flex gap-3 align-items-center text-align-center">
                                <i class="fab fa-whatsapp"></i>
                                <p className="m-0 p-0">(070) 790 10 33</p>
                              </span>
                            </li>
                            <li>
                              <span className="d-flex gap-3 align-items-center text-align-center">
                                <i class="fas fa-phone-alt"></i>{' '}
                                <p className="m-0 p-0">(055) 791 10 33</p>
                              </span>
                            </li>
                            <li>
                              <span className="d-flex gap-3 align-items-center text-align-center">
                                <i class="fas fa-phone-alt"></i>{' '}
                                <p className="m-0 p-0">(070) 747 53 54</p>
                              </span>
                            </li>
                          </ul>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-12">
                  <div className="widget widget_info d-flex align-items-center w-full flex-column">
                    <h3 className="footer-title">Sürətli Keçid </h3>
                    <ul>
                      <li>
                        <Link to="/about-us">
                          <span>Haqqımızda</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/team">
                          <span>Kollektivimiz</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/faqs">
                          <span className="w-full">Tez-tez verilən</span>
                          <br />
                          suallar
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-12">
                  <div className="widget widget_info d-flex align-items-center w-full flex-column">
                    <h3 className="footer-title">Xidmətlərimiz </h3>
                    <ul>
                      <li>
                        <Link to="/laboratory">
                          <span>Laboratoriya</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/usm">
                          <span>USM Müayinəsi</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/endocrinology">
                          <span>Endokrinologiya</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/dermatology">
                          <span>Dermotologiya</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/physiotherapy">
                          <span>Fizioterapiya</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/gynecology">
                          <span>Ginekologiya</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/dietology">
                          <span>Dietologiya</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cosmetology">
                          <span>Kosmetologiya</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12">
                  <div className="widget widget_info d-flex align-items-center w-full flex-column">
                    <h3 className="footer-title">
                      Sosial mediadan bizi izləyin{' '}
                    </h3>

                    <div className="footer-social-link">
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
                            href="https://www.instagram.com/dimed.medical.center/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=dimedmedicalcentre@mail.ru"
                          >
                            <i class="far fa-envelope"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-bottom">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="copyright-text">
                    Copyright © 2023 Design & Developed by{' '}
                    <a
                      href=""
                      rel="noreferrer"
                      target="_blank"
                      className="text-secondary"
                    >
                      Khayala Sadigova
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate-wave" src={ptImg1} alt="" />
          <img className="pt-img2 animate1" src={ptImg2} alt="" />
          <img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
          <img className="pt-img4 animate-wave" src={ptImg4} alt="" />
        </footer>
      </>
    )
  }
}

export default aboutSection
