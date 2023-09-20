import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

// Import Images
import lineCircleBlue from '../../images/shap/line-circle-blue.png'
import squareDotsOrange from '../../images/shap/square-dots-orange.png'
import waveBlue from '../../images/shap/wave-blue.png'
import squareRotate from '../../images/shap/square-rotate.png'
import sevilx from '../../images/team/sevilx.png'
import raufdr from '../../images/team/raufdr.png'
import nabatx from '../../images/team/nabatx.png'
import nazax from '../../images/team/nazax.png'
import sevdax from '../../images/team/sevdax.png'
import nergizx from '../../images/team/nergizx.png'
import samirex from '../../images/team/samirex.png'
import agadr from '../../images/team/agadr.png'
class ServicesSliderSection extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoPlay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 591,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }

    return (
      <>
        <section className="section-area section-sp1 service-wraper">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-7 mb-30">
              <div className="heading-bx">
                <h6 className="title-ext text-secondary">Həkimlərimiz </h6>
                <h2 className="title">
                  Düzgün diaqnoz üçün doğru həkim seçimi şərtdir.{' '}
                </h2>
                <p>Həkimlərimiz sahələrində ixtisaslaşmış mütəxəssislərdir.</p>
              </div>
              <Link to="/team" className="btn btn-secondary btn-lg shadow">
                Hamısına bax
              </Link>
            </div>
            <div className="col-xl-8 mb-15">
              <Slider {...settings} className="service-slide slick-arrow-none">
                <div className="slider-item">
                  <div className="feature-container doctorSlide feature-bx2 feature1">
                    <div className="feature-box-2xl mb-30 ">
                      <img className="sliderDoctorImg" src={sevilx} alt="" />
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Rauf Soltanov </h3>
                      <p>USM-Radioloq</p>
                      <Link
                        to="/service-detail"
                        className="btn btn-primary light"
                      >
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="slider-item">
                  <div className="feature-container doctorSlide feature-bx2 feature1">
                    <div className="feature-box-2xl mb-30 ">
                      <img className="sliderDoctorImg" src={sevdax} alt="" />
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Rauf Soltanov </h3>
                      <p>USM-Radioloq</p>
                      <Link
                        to="/service-detail"
                        className="btn btn-primary light"
                      >
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-container doctorSlide feature-bx2 feature1">
                    <div className="feature-box-2xl mb-30 ">
                      <img className="sliderDoctorImg" src={raufdr} alt="" />
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Rauf Soltanov </h3>
                      <p>USM-Radioloq</p>
                      <Link
                        to="/service-detail"
                        className="btn btn-primary light"
                      >
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="slider-item">
                  <div className="feature-container doctorSlide feature-bx2 feature1">
                    <div className="feature-box-2xl mb-30 ">
                      <img className="sliderDoctorImg" src={nabatx} alt="" />
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Rauf Soltanov </h3>
                      <p>USM-Radioloq</p>
                      <Link
                        to="/service-detail"
                        className="btn btn-primary light"
                      >
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="slider-item">
                  <div className="feature-container doctorSlide feature-bx2 feature1">
                    <div className="feature-box-2xl mb-30 ">
                      <img className="sliderDoctorImg" src={samirex} alt="" />
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Rauf Soltanov </h3>
                      <p>USM-Radioloq</p>
                      <Link
                        to="/service-detail"
                        className="btn btn-primary light"
                      >
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="slider-item">
                  <div className="feature-container doctorSlide feature-bx2 feature1">
                    <div className="feature-box-2xl mb-30 ">
                      <img className="sliderDoctorImg" src={nazax} alt="" />
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Rauf Soltanov </h3>
                      <p>USM-Radioloq</p>
                      <Link
                        to="/service-detail"
                        className="btn btn-primary light"
                      >
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-container doctorSlide feature-bx2 feature1">
                    <div className="feature-box-2xl mb-30 ">
                      <img className="sliderDoctorImg" src={nergizx} alt="" />
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Rauf Soltanov </h3>
                      <p>USM-Radioloq</p>
                      <Link
                        to="/service-detail"
                        className="btn btn-primary light"
                      >
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-container doctorSlide feature-bx2 feature1">
                    <div className="feature-box-2xl mb-30 ">
                      <img className="sliderDoctorImg" src={agadr} alt="" />
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Rauf Soltanov </h3>
                      <p>USM-Radioloq</p>
                      <Link
                        to="/service-detail"
                        className="btn btn-primary light"
                      >
                        Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <img className="pt-img1 animate-rotate" src={lineCircleBlue} alt="" />
          <img className="pt-img2 animate2" src={squareDotsOrange} alt="" />
          <img className="pt-img3 animate-wave" src={waveBlue} alt="" />
          <img className="pt-img4 animate1" src={squareRotate} alt="" />
        </section>
      </>
    )
  }
}

export default ServicesSliderSection
