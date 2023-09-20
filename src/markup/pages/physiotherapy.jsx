import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
// Import Images
import bnrImg1 from '../../images/banner/img1.jpg'
import waveBlue from '../../images/shap/wave-blue.png'
import circleDots from '../../images/shap/circle-dots.png'
import plusBlue from '../../images/shap/plus-blue.png'
import pdf from '../../images/icon/pdf.png'
import pdffile from '../../pdfs/price.pdf'
import teamMember1 from '../../images/team/member1.jpg'
import teamMember2 from '../../images/team/member2.jpg'
//
const content = [
  {
    thumb: teamMember1,
    title: 'Dr. Addition Smith',
    subtitle: 'Dentist',
  },
  {
    thumb: teamMember2,
    title: 'Dr. Mahfuz Riad',
    subtitle: 'Chiropractor',
  },
  {
    thumb: teamMember2,
    title: 'Dr. Mahfuz Riad',
    subtitle: 'Chiropractor',
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
                  <h1>Fizioterapiya </h1>
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
                        Fizioterapiya
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
                      <h2 className="title mb-15">Fizioterapiya </h2>
                      <p className="mb-0">
                        Fizioterapiya əsas məqsəd bölümün əsas məqsədi xəstənin
                        patologiyasına əsaslanaraq fiziki sağlamlığını bərpa
                        edib normal həyat keçirməsinə imkan yaradır. Bəzi
                        xəstəliklər vardırki, onları müalicəsi zamanı
                        fizioterapiyadan istifadə eləmək xəstəni cərrahi
                        əməliyyatlardan xilas edir. Müasir günümüzdə
                        fizioterapiya müalicəsi ən təhlükəsiz müalicə vasitəsi
                        hesab edilir. Fizioterapiya müalcəsi zamanı digər
                        müalicələr kimi hər şey qeyd olunmalı və diqqətdə
                        saxlanılmalıdır:
                      </p>
                      <br /> <br />
                      <h5>Fizioterapiya hansı xəstəliklərdə tətbiq olunur?</h5>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-8 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>
                            Tənəffüs sistemi – bronxitlər, obstruksiyalar,
                            pnevmoniyalar, astmalar və s.
                          </li>
                          <li>Stomatoloji xəstəliklərdə</li>
                          <li>Oftalmoloji xəstəliklərdə</li>
                          <li>Uroloji xəstəliklərdə</li>
                          <li>
                            {' '}
                            İnfeksion xəstəliklərdə – parotit, angina, kəskin
                            respirator xəstəliklər{' '}
                          </li>
                          <li>
                            Oynaq, onurğa birləşdirici toxuma xəstəlikləri.
                          </li>
                          <li>Yanıqlarda</li>
                          <li> Dəri xəstəliklərində</li>
                          <li>Sinir- əzələ xəstəliklərində</li>
                          <li>Pediatrik xəstəliklərdə</li>
                        </ul>
                      </div>
                      {/* <>
                        <h2>Həkimlərimiz</h2> <br />
                        {content.map((item) => (
                          <div className="col-lg-4 col-sm-6">
                            <div className="team-member mb-30">
                              <div className="team-media">
                                <img src={item.thumb} alt="" />
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
                      </> */}
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
                          Fizioterapiya zamanı ağrı hiss edilirmi?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Fizioterapiya müxtəlif cihazarla tətbiq olunur.Uyğun
                            cihazlar və proseduralar təyin edildiyində ağrı
                            olmur.Reabilitasiyada gərilmə məşqləri zamanı ağrı
                            ola bilər,ama bunun sizə zərəri olmaz.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Fizioterapiyanın orqanizmə zərəri varmi?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Həkim nəzarətində tətbiq edilən fizioterapiyanın
                            zərəri yoxdur.Fizioterapiyanın köməyi ilə çox zaman
                            xəstəyə cərrahi müdaxiləyə ehtiyac bilmədən
                            müalicəni təmin etmək mümkündür.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Fizioterapiyadan daha çox fayda görmək üçün xəstələr
                          nə edə bilər?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Həkiminizin sizə verdiyi məsləhətlərə müalicədən
                            sonrakı dövrdə də davam etsəniz müalicədən
                            gördüyünüz xeyir artıracaq və uzun müddətli olmasını
                            təmin edəcəksiniz.Həmçinin sizə verilən məşq
                            proqramını düzgün və mütəmadi olaraq etməniz
                            müalicədə uğur üçün əsasdır.
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
                            <span>Hava vannaları</span>
                          </Link>
                        </li>

                        <li>
                          <Link>
                            <span>Su ilə müalicə</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Mineral sularla müalicə</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Isti və ya soyuqla müaicəə</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Elektriklə müalicə</span>
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link>
                            <span>Elektromaqnitlə müalicə</span>
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link>
                            <span>Mexaniki təsirlərlə müalicə</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Massaj</span>
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link>
                            <span>üalicə bədən tərbiyəsi</span>
                          </Link>{' '}
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
                          download="test.pdf"
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
