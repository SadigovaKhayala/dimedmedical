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
                  <h1>Dietologiya </h1>
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
                        Dietologiya
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
                      <h2 className="title mb-15">Dietologiya </h2>
                      <p className="mb-0">
                        Dietologiya bölməsi sağlam insanın düzgün qidalanmasıyla
                        bağlı bütün məsələlərlə, həmçinin müxtəlif
                        xəstəliklərdən əziyyət çəkən və xüsusi qidalanmaya
                        ehtiyacı olan bir qrup insanların qidalanmasıyla məşğul
                        olur. Şöbənin işi, insan sağlamlığını möhkəmlədən
                        faktorların ayrılmaz bir hissəsinin qidalanma olmasının
                        tam anlayışında əsaslanır. Dietologiya bölməsi artıq
                        çəkini təhrik edən xəstəliklərin diaqnostikası və
                        müalicəsi ilə məşğul olur.
                      </p>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-8 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>
                            <Link>
                              <span>
                                Bədən çəkisinin peşəkar seqmentar analizi
                              </span>
                            </Link>
                          </li>

                          <li>
                            <Link>
                              <span>
                                Fərdi sağlam qidalanma planının tərtib olunması
                                və dəyişdirilməsi
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>
                                Fərdi arıqlama və çəki artırma planının təyini
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>
                                Maddələr mübadiləsinin pozğunluğu ilə müşahidə
                                olunan müxtəlif xəstəliklərdə düzgün qidalanma
                                planının təyini
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>
                                Qida gündəliyinin tərtibi və aparılması
                              </span>
                            </Link>
                          </li>
                          <li>
                            {' '}
                            <Link>
                              <span>
                                Ziyanlı vərdişlərin aydınlaşdırılması və sağlam
                                vərdişlərlə əvəz olunması
                              </span>
                            </Link>
                          </li>
                          <li>
                            {' '}
                            <Link>
                              <span>
                                Koqnitiv davranış terapiyasının aparılması
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>
                                Xəstəxana daxili qidalanma planının təyini
                              </span>
                            </Link>
                          </li>
                          <li>
                            {' '}
                            <Link>
                              <span>üalicə bədən tərbiyəsi</span>
                            </Link>{' '}
                          </li>
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
                          Qısa müddətə arıqlaya bilərəm?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            "Qısa müddətə arıqlaya bilərəm?" sualı dietoloqların
                            ən çox qarşılaşdığı sualdır. Dietoloqlar,
                            qeyri-sağlam və sürət çəki itkisinin sürətlə geri
                            qayıdacağını bildirirlər. Çəki atmaq üçün müddəti
                            qısaltmağın faydası yoxdur. Əks halda, sağlamlıq
                            problemləri ilə üzləşə bilərsiniz.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          İdeal atılan çəki nə qədər olmalıdır?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            ÜST sağlam çəki itkisinin həftədə 0.5-1 kq arasında
                            olduğunu qeyd edirlər. Obez problemi olanların daha
                            sürətli arıqlaması da ehtimallar arasındadır. Ayda 6
                            kq və daha çox çəki atmaq sağlamlıq problemlərinə
                            səbəb ola bilər.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Çörək yeməyərək sürətli arıqlaya bilərəm?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Artıq çəki tabuları arasında çörək yemək var. Sağlam
                            çəki atmaq və verilən çəkiləri geri qazanmamaq üçün
                            çörəyi kəsməməlisiniz. Hər yeməkdə 1 taxıllı çörək
                            yeyərək iştahanızı nizamlaya bilərsiniz.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          What types of systems do you support?
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
                          We Teach You How To Feel Better?
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
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          How Can I Contact You?
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
                            <span>
                              Bədən çəkisinin peşəkar seqmentar analizi
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link>
                            <span>
                              Fərdi sağlam qidalanma planının tərtib olunması və
                              dəyişdirilməsi
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>
                              Fərdi arıqlama və çəki artırma planının təyini
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>
                              Maddələr mübadiləsinin pozğunluğu ilə müşahidə
                              olunan müxtəlif xəstəliklərdə düzgün qidalanma
                              planının təyini
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Qida gündəliyinin tərtibi və aparılması</span>
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link>
                            <span>
                              Ziyanlı vərdişlərin aydınlaşdırılması və sağlam
                              vərdişlərlə əvəz olunması
                            </span>
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link>
                            <span>
                              Koqnitiv davranış terapiyasının aparılması
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>
                              Xəstəxana daxili qidalanma planının təyini
                            </span>
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
