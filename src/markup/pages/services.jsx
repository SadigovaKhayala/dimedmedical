import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Elements
import FeatureSection3 from '../elements/feature-section3'
import TeamSection from '../elements/team'
import LatestNewsSection from '../elements/latest-news-slider'

// Import Images
import bnrImg1 from '../../images/banner/img1.jpg'
import waveBlue from '../../images/shap/wave-blue.png'
import circleDots from '../../images/shap/circle-dots.png'
import plusBlue from '../../images/shap/plus-blue.png'
import lab from '../../images/servicesIcons/laboratory.png'
import dermotology from '../../images/servicesIcons/dermotology.png'
import endocrinology from '../../images/servicesIcons/endocrinology.png'
import usm from '../../images/servicesIcons/usm.png'
import ginecology from '../../images/servicesIcons/ginecology.png'
import fizioterapiya from '../../images/servicesIcons/fizioterapiya.png'
import diet from '../../images/servicesIcons/diet.png'
import cosmetology from '../../images/servicesIcons/kosmetology.png'

class Services extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner"
              style={{ backgroundImage: 'url(' + bnrImg1 + ')' }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Xidmətlərimiz</h1>
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
                        Xidmətlərimiz
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
              <img className="pt-img2 animate2" src={circleDots} alt="" />
              <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
            </div>
          </div>

          <section className="section-area section-sp1">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx2 feature1">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell iconServices">
                        <img src={lab} alt="" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Laboratoriya</h3>
                      <p>
                        Phasellus venenatis porta rhoncus. Integer et viverra
                        felis.
                      </p>
                      <Link to="/laboratory" className="btn btn-primary light">
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx2 feature1">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell iconServices">
                        <img src={usm} alt="" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">USM müayinəsi </h3>
                      <p>
                        Phasellus venenatis porta rhoncus. Integer et viverra
                        felis.
                      </p>
                      <Link to="/usm" className="btn btn-primary light">
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx2 feature3">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell iconServices">
                        <img src={endocrinology} alt="" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Endokrinologiya</h3>
                      <p>
                        Phasellus venenatis porta rhoncus. Integer et viverra
                        felis.
                      </p>
                      <Link
                        to="/endocrinology "
                        className="btn btn-primary light"
                      >
                        Ətraflı{' '}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx2 feature3">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell iconServices">
                        <img src={dermotology} alt="" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Dermotologiya</h3>
                      <p>
                        Phasellus venenatis porta rhoncus. Integer et viverra
                        felis.
                      </p>
                      <Link to="/dermatology" className="btn btn-primary light">
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx2 feature3">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell iconServices">
                        <img src={fizioterapiya} alt="" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Physiotherapy</h3>
                      <p>
                        Phasellus venenatis porta rhoncus. Integer et viverra
                        felis.
                      </p>
                      <Link
                        to="/physiotherapy"
                        className="btn btn-primary light"
                      >
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx2 feature3">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell iconServices">
                        <img src={ginecology} alt="" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Ginekologiya</h3>
                      <p>
                        Phasellus venenatis porta rhoncus. Integer et viverra
                        felis.
                      </p>
                      <Link to="/gynecology" className="btn btn-primary light">
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx2 feature3">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell iconServices">
                        <img src={diet} alt="" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Dietologiya</h3>
                      <p>
                        Phasellus venenatis porta rhoncus. Integer et viverra
                        felis.
                      </p>
                      <Link to="/dietology" className="btn btn-primary light">
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx2 feature3">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell iconServices">
                        <img src={cosmetology} alt="" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Kosmetologiya</h3>
                      <p>
                        Phasellus venenatis porta rhoncus. Integer et viverra
                        felis.
                      </p>
                      <Link to="/cosmetology" className="btn btn-primary light">
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FeatureSection3 />

          <TeamSection />

          <LatestNewsSection />
        </div>
      </>
    )
  }
}

export default Services
