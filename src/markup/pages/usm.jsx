import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
// Import Images
import bnrImg1 from '../../images/banner/img1.jpg'
import waveBlue from '../../images/shap/wave-blue.png'
import circleDots from '../../images/shap/circle-dots.png'
import plusBlue from '../../images/shap/plus-blue.png'
import pdf from '../../images/icon/pdf.png'
import pdffile from '../../pdfs/usm-price-list.pdf'
import raufdr from '../../images/team/raufdr.png'
import sevdax from '../../images/team/sevdax.png'

//
const content = [
  {
    thumb: raufdr,
    title: 'Dr. Rauf Soltanov',
    subtitle: 'Radioloq',
  },
  {
    thumb: sevdax,
    title: 'Dr. Sevda Hacıyeva',
    subtitle: 'Radioloq',
  },
]
class ServiceDetail extends Component {
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
                  <h1>Ultrasəs müayinəsi </h1>
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
                        Ultrasəs müayinəsi
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
                <div className="col-lg-8 mb-30">
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h2 className="title mb-15">Ultrasəs müayinəsi </h2>
                      <p className="mb-0">
                        Ultrasəs müayinə (USM) səs dalğalarından faydalanaraq
                        daxili orqanların görüntüləmə üsuludur. Son illər
                        ərzində, Ultrasəs müayinəsi əvəzolunmaz bir müayinə
                        olaraq tibbə daxil olmuş və orqanizmə zərərsiz olduğunu
                        təsdiqləmişdir. Daha informativ və praktiki cəhətdən
                        zərərsiz olan bu metod ilə aşağıda müayinələr mümkündür:
                      </p>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>Qarın boşluğu orqanlarının müayinəsi </li>
                          <li>Böyrəklərin müayinəsi </li>
                          <li>Kiçik çanaq orqanlarının müayinəsi </li>
                          <li>Qalxanabənzər vəzinin müayinəsi </li>
                          <li> Hamiləliyin müayinəsi </li>
                          <li> Hamiləliyin dopplerogrfiyası</li>
                        </ul>
                      </div>

                      <>
                        <h2>Həkimlərimiz</h2> <br />
                        {content.map((item) => (
                          <div className="col-lg-5 col-sm-6">
                            <div className="team-member mb-30">
                              <div className="team-media">
                                <img
                                  classname="teamMedIaImg"
                                  src={item.thumb}
                                  alt=""
                                />
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
                      </>
                    </div>
                  </div>

                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">Tez-tez verilən suallar </h4>
                    </div>
                    <Accordion
                      defaultActiveKey="0"
                      className="accordion ttr-accordion1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Usm sağlamlığa ziyandırmı?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Hamiləlik zamanı hansı intervalla Usm müayinə
                          edilməlidir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Usm ilə hansı orqanların müayinəsi mümkündür?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Hamiləliyin doppler müayinəsi neçənci həftədə
                          olunmalıdır?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          Uşağın cinsiyyəti hamiləliyin neçənci həftəsindən
                          etibarən bilinir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className="sticky-top pb-1">
                    <div className="widget">
                      {/* <ul className="service-menu">
                        <li>
                          <Link>
                            <span>Qarın boşluğu orqanlarının müayinəsi</span>
                          </Link>
                        </li>

                        <li>
                          <Link>
                            <span>Böyrəklərin müayinəsi </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Kiçik çanaq orqanlarının müayinəsi </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Qalxanabənzər vəzinin müayinəsi </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Hamiləliyin müayinəsi </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Hamiləliyin dopplerogrfiyası </span>
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                    <div className="widget">
                      <div className="brochure-bx">
                        <h5 className="title-head">
                          Qiymətlərimizlə tanış olmaq üçün{' '}
                        </h5>

                        <a
                          href={pdffile}
                          download="usm-price-list-dimed.pdf"
                          className="download-link"
                        >
                          <img src={pdf} alt="" />
                          <h5 className="title">Qiymət cədvəlini yükləyin </h5>
                          <span>Yüklə</span>
                        </a>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default ServiceDetail
