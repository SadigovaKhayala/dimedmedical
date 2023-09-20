import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
// Import Images
import bnrImg1 from '../../images/banner/img1.jpg'
import waveBlue from '../../images/shap/wave-blue.png'
import circleDots from '../../images/shap/circle-dots.png'
import plusBlue from '../../images/shap/plus-blue.png'
import servicesPic1 from '../../images/services/pic1.jpg'
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
                  <h1>Dermatologiya </h1>
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
                        Dermatologiya
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
                      <h2 className="title mb-15">Dermatologiya </h2>
                      <p className="mb-0">
                        Dermatologiya- dərinin quruluşu və funksiyasını, dəri
                        xəstəliklərinin əmələ gəlmə səbəblərini, xəstəliklərin
                        inkişaf mexanizmini , müalicə və profilaktikasını
                        öyrənir. Dəri xəstəliklərinin əmələ gəlmə səbəbləri
                        çoxdur və müxtəlifdir. Dəri həmişə xarici mühit
                        faktorlarının təsirinə məruz qalır. (müxtəlif
                        infeksiyalar, viruslar, bakteriyalar, ibtidailər, isti
                        və soyuğa, müxtəlif kimyəvi maddələrə və s.) Dəri
                        qan-damar, limfa və sinir sistemi vasitəsilə bütün
                        orqanizmlə sıx əlaqədardır. Buna görə də müxtəlif
                        üzvlərdə gedən fizioloji və patoloji proseslər dəriyə
                        müəyyən dərəcədə təsir göstərir.Həmin proseslərin bir
                        çoxu isə dərinin iştirakı ilə gedir. Buna görə də daxili
                        orqanların hər hansı bir xəstəliyi dəriyə də təsir
                        göstərə bilər və dəridə müəyyən dəyişikliklərin
                        yaranmasına səbəb ola bilər.
                      </p>
                      <br /> <br />
                      <h5> Dermatoloji xəstələr :</h5>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>
                            <Link>
                              <span> Papillomalar</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Sadə herpes (herpes simplex)</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Sadə herpes (herpes simplex) </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Kəmərləyici herpes (herpes zoster)</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Kandilomalar </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Atopik dermatit</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Kvinke ödemi</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span> Məxmərək</span>
                            </Link>
                          </li>{' '}
                          <li>
                            <Link>
                              <span> Kontakt dermatitləri</span>
                            </Link>
                          </li>{' '}
                          <li>
                            <Link>
                              <span> Ekzema</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span> Neyrodermatit </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Stafilakokk piodermitləri</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Qoturluq</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Mikozlar</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Psoriaz</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Vitiliqo</span>
                            </Link>
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
                          Saç tökülməsinin səbəbləri və müalicə üsulları
                          hansılardır?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Saçlar müxtəlif səbəblərdən tökülə bilər. Onlar
                            arasında stress, vitamin çatışmazlığı, hormonal
                            dəyişikliklər, saç dibinin seboreyası və bəzi dərman
                            preparatlarının qəbulu geniş yayılmışdır. Müalicə
                            sxemi saç tökülməsinin səbəbi və ağırlıq dərəcəsi
                            nəzərə alınmaqla tərtib olunur.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Dəri quruluğuna qarşı nə etmək olar?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Quruluğu aradan qaldırmaq məqsədilə dəriyə
                            nəmləndirici krem çəkmək və ildə 2 dəfə
                            biorevitalizasiya prosedurundan keçmək məsləhət
                            görülür.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Sızanaqlar necə müalicə olunur?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Sızanaqların yaranma səbəbləri və ağırlıq
                            dərəcəsindən asılı olaraq, xarici (yerli) və daxili
                            terapiya aparılır. Müalicə prosesində antibiotiklər,
                            retinoidlər, oral kontraseptivlər və digər
                            vasitələrdən istifadə edilir.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Akne hansı yaşda pisdir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Akne hər yaşda insanda meydana gələ bilər. 12 və 24
                            yaş arası insanlar ən çox aknedən əziyyət çəkənlər
                            kateqoriyasındadırlar. Ümumiyyətlə yeniyetməlik
                            yaşlarında başlayır, qızlar oğlanlardan daha çox
                            aknedən təsirlənərlər.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          Akne müalicə olunmasa nə olar?{' '}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Akne uzun müddət müalicə olunmasa dəridə böyük
                            ölçüdə yara izləri qalar, psixoloji gərginliklər
                            yaranar, özünə güvənmək və özünə hörmət etmə kimi
                            faktorlar ciddi problemlər yaradar.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          Akne üçün ən yaxşı müalicə metodu nədir?{' '}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Yüngül akne vulgaris üçün birinci addım müalicə
                            metodu ; benzoil peroksit və ya topikal retinoid ,
                            antibiotiklər daxil olmaqla topikal dərmanların
                            kombinasiyasıdır. Tetrasklinlər istifadə olunan ən
                            yaxşı oral antibiotikdir və doksisklin və
                            minosiklinin tetrasklindən daha çox fayda verdiyi
                            müşahidə olunub
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
                            <span> Papillomalar</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Sadə herpes (herpes simplex)</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Sadə herpes (herpes simplex) </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Kəmərləyici herpes (herpes zoster)</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Kandilomalar </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Atopik dermatit</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Kvinke ödemi</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span> Məxmərək</span>
                          </Link>
                        </li>{' '}
                        <li>
                          <Link>
                            <span> Kontakt dermatitləri</span>
                          </Link>
                        </li>{' '}
                        <li>
                          <Link>
                            <span> Ekzema</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span> Neyrodermatit </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Stafilakokk piodermitləri</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Qoturluq</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Mikozlar</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Psoriaz</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Vitiliqo</span>
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
                          download="dermotology.pdf"
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
