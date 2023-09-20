import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Import Images
import bnrImg1 from '../../images/banner/img1.jpg'
import trangleOrange from '../../images/shap/trangle-orange.png'
import squareDotsOrange from '../../images/shap/square-dots-orange.png'
import lineCircleBlue from '../../images/shap/line-circle-blue.png'
import waveBlue from '../../images/shap/wave-blue.png'
import circleDots from '../../images/shap/circle-dots.png'
import plusBlue from '../../images/shap/circle-dots.png'

import sevilx from '../../images/team/sevilx.png'
import raufdr from '../../images/team/raufdr.png'
import nabatx from '../../images/team/nabatx.png'
import nazax from '../../images/team/nazax.png'
import sevdax from '../../images/team/sevdax.png'
import nergizx from '../../images/team/nergizx.png'
import samirex from '../../images/team/samirex.png'
import agadr from '../../images/team/agadr.png'
import pp from '../../images/team/pp.png'

// Team Content
const content = [
  // {
  //   thumb: samirex,
  //   title: 'Dr. Samirə Rzayeva ',
  //   subtitle: 'Rəhbər',
  // },
  // {
  //   thumb: agadr,
  //   title: 'Dr. Rzayev Ağarza ',
  //   subtitle: 'Təsisçi',
  // },
  {
    thumb: nergizx,
    title: 'Dr. Nərgiz Haşımzadə ',
    subtitle: 'Tibb üzrə fəlsəfə doktoru - Psixoloq',
  },
  {
    thumb: raufdr,
    title: 'Dr. Rauf Soltanov                   ',
    subtitle: 'Həkim Radioloq',
  },
  {
    thumb: nabatx,
    title: 'Dr. Nabatxanım Xəlilova',
    subtitle: 'Terapevt',
  },
  {
    thumb: nazax,
    title: 'Dr. Nəzakət Mirzəliyeva ',
    subtitle: 'Ginekoloq',
  },
  {
    thumb: sevdax,
    title: 'Dr. Sevda  Hacıyeva',
    subtitle: 'Həkim Radioloq',
  },
  {
    thumb: sevilx,
    title: 'Dr. Sevil Ramazanova ',
    subtitle: 'Ginekoloq',
  },
  {
    thumb: pp,
    title: 'Dr. Səbinə Hüseynova ',
    subtitle: 'Ginekoloq',
  },
  {
    thumb: pp,
    title: 'Dr. Günel Rəhimova  ',
    subtitle: 'Endokrinoloq',
  },
  {
    thumb: pp,
    title: 'Dr. Kamilə  Novruzova ',
    subtitle: 'Kosmetoloq ',
  },
  {
    thumb: pp,
    title: 'Səbinə  ',
    subtitle: 'Tibb-bacısı  ',
  },
]

class Team extends Component {
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
                  <h1>Həkimlərimiz </h1>
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
                        Həkimlərimiz
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

          <section className="section-area section-sp1 team-wraper">
            <div className="container">
              <div className="row">
                {content.map((item) => (
                  <div className="col-lg-4 col-sm-6">
                    <div className="team-member mb-30">
                      <div className="team-media">
                        <img className="teamMedIaImg" src={item.thumb} alt="" />
                      </div>
                      <div className="team-info">
                        <div className="team-info-comntent">
                          <h4 className="title">{item.title}</h4>
                          <span className="text-secondary">
                            {item.subtitle}
                          </span>
                        </div>
                        <ul className="social-media">
                          <li>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://twitter.com/"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://www.linkedin.com/"
                            >
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://www.instagram.com/"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <img className="pt-img1 animate1" src={trangleOrange} alt="" />

            <img className="pt-img2 animate2" src={squareDotsOrange} alt="" />

            <img
              className="pt-img3 animate-rotate"
              src={lineCircleBlue}
              alt=""
            />

            <img className="pt-img4 animate-wave" src={waveBlue} alt="" />

            <img className="pt-img5 animate-wave" src={plusBlue} alt="" />
          </section>
        </div>
      </>
    )
  }
}

export default Team
