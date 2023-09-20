import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Import Images
import aboutThumb1 from '../../images/about/pic-1.jpg'
import aboutThumb2 from '../../images/about/pic-2.jpg'
import aboutThumb3 from '../../images/about/pic-3.jpg'
import ptImg1 from '../../images/shap/wave-orange.png'
import ptImg2 from '../../images/shap/circle-small-blue.png'
import ptImg4 from '../../images/shap/square-dots-orange.png'
import ptImg5 from '../../images/shap/square-blue.png'
import usm from '../../images/ultrasound.png'
import physiotherapy from '../../images/physiotherapy.png'
import cosmetology from '../../images/cosmetology.png'
import dermotology from '../../images/dermatology.png'
import diet from '../../images/diet.png'
import ginecology from '../../images/maternity.png'
import endocrinology from '../../images/thyroid.png'
import lab from '../../images/lab.png'

class aboutSection extends Component {
  render() {
    return (
      <>
        <section className="section-sp1 about-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-30">
                <div className="about-thumb-area">
                  <ul>
                    <li>
                      <img className="about-thumb1" src={aboutThumb1} alt="" />
                    </li>
                    <li>
                      <img className="about-thumb2" src={aboutThumb2} alt="" />
                    </li>
                    <li>
                      <img className="about-thumb3" src={aboutThumb3} alt="" />
                    </li>
                    <li>
                      <div className="exp-bx">
                        10<span> il xidmətinizdə </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="heading-bx">
                  <h6 className="title-ext text-secondary">
                    Müayinənin ən doğru ünvanı{' '}
                  </h6>
                  <h2 className="title">XİDMƏTLƏTİMİZ </h2>
                  <p>
                    Biz sizə klinikamızda ən yaxşı texnologiyalarla müayinə,
                    peşəkar həkimlərimiz tərəfindən konsultasiya, yüksək
                    keyfiyyətli müalicə təqdim edirik.
                  </p>
                </div>
                <div className="row">
                  <Link
                    to="/usm"
                    className=" ourServicces col-lg-6 col-sm-6 mb-30 mb-sm-20"
                  >
                    <div className="feature-container feature-bx1 feature1">
                      <div className="icon-md">
                        <span className="icon-cell">
                          <img src={usm} alt="" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="ttr-title"> USM müayinə </h4>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/dermatology"
                    className=" ourServicces col-lg-6 col-sm-6 mb-30 mb-sm-20"
                  >
                    <div className="feature-container feature-bx1 feature2">
                      <div className="icon-md">
                        <span className="icon-cell">
                          <img src={dermotology} alt="" />
                        </span>
                      </div>
                      <Link to="/dermatology" className="icon-content">
                        <h4 className="ttr-title">Dermatologiya</h4>
                      </Link>
                    </div>
                  </Link>
                  <Link
                    to="/laboratory"
                    className=" ourServicces col-lg-6 col-sm-6 mb-30 mb-sm-20"
                  >
                    <div className="feature-container feature-bx1 feature3">
                      <div className="icon-md">
                        <span className="icon-cell">
                          <img src={lab} alt="" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="ttr-title">Laboratoriya</h4>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/physiotherapy"
                    className=" ourServicces col-lg-6 col-sm-6 mb-30 mb-sm-20"
                  >
                    <div className="feature-container feature-bx1 feature4">
                      <div className="icon-md">
                        <span className="icon-cell">
                          <img src={physiotherapy} alt="" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="ttr-title">Fizioterapiya</h4>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/cosmetology"
                    className=" ourServicces col-lg-6 col-sm-6 mb-30 mb-sm-20"
                  >
                    <div className="feature-container feature-bx1 feature5">
                      <div className="icon-md">
                        <span className="icon-cell">
                          <img src={cosmetology} alt="" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="ttr-title">Kosmetologiya</h4>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="dietology"
                    className=" ourServicces col-lg-6 col-sm-6 mb-30 mb-sm-20"
                  >
                    <div className="feature-container feature-bx1 feature6">
                      <div className="icon-md">
                        <span className="icon-cell">
                          <img src={diet} alt="" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="ttr-title">Dietologiya</h4>
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/gynecology"
                    className=" ourServicces col-lg-6 col-sm-6 mb-30 mb-sm-20"
                  >
                    <div className="feature-container feature-bx1 feature1">
                      <div className="icon-md">
                        <span className="icon-cell">
                          <img src={ginecology} alt="" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="ttr-title">Ginekologiya</h4>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/endocrinology"
                    className=" ourServicces col-lg-6 col-sm-6 mb-30 mb-sm-20"
                  >
                    <div className="feature-container feature-bx1 feature2">
                      <div className="icon-md">
                        <span className="icon-cell">
                          <img src={endocrinology} alt="" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="ttr-title">Endokrinologiya</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate-wave" src={ptImg1} alt="" />
          <img className="pt-img2 animate2" src={ptImg2} alt="" />
          <img className="pt-img3 animate-rotate" src={ptImg5} alt="" />
          <img className="pt-img4 animate-wave" src={ptImg4} alt="" />
          <img className="pt-img5 animate2" src={ptImg5} alt="" />
        </section>
      </>
    )
  }
}

export default aboutSection
