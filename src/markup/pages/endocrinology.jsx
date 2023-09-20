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
import doc from '../../images/icon/doc.png'
import pdffile from '../../pdfs/price.pdf'

import pp from '../../images/team/pp.png'

//
const content = [
  {
    thumb: pp,
    title: 'Dr. Günel Rəhimova ',
    subtitle: 'Endokrinoloq',
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
                  <h1>Endokrinologiya </h1>
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
                        Endokrinologiya
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
                      <h2 className="title mb-15">Endorinologiya </h2>
                      <p className="mb-0">
                        Endokrin sistemi daxili vəzləri bir araya toplayan bir
                        sistemdir. Daxili vəzlər hormon sintezi və ifrazatı
                        yerinə yetirən organlardır. Bu hormonlar
                        reproduksiya,metabolizm, böyümə və inkişaf proseslərini
                        kontrol edir. Hormonlar həm də ətrafa verdiyimiz
                        reaksiyanı kontrol edir və bədənimizin funksiyaları üçün
                        lazımi miqdarda enerji və qida ehtiyatını təmin etməyə
                        köməkçi olurlar. Endokrin sistem hipotalamus, hipofiz,
                        tiroid, paratiroid, pankreas, böyrəküstü vəz,
                        yumurtalıqlar (qadında overlər, kişidə testislər) kimi
                        daxili sekresiya vəzlərindən ibarətdir.
                      </p>
                      <br /> <br />
                      <h5>
                        {' '}
                        Endokrinoloqun müayinə etdiyi xəstəliklər hansılardır?
                      </h5>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>
                            <Link>
                              <span> Diabet</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Qalxanvari vəz xəstəlikləri </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Metabolik pozuntular </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Reproduktiv xəstəliklər </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Menopauza </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Osteoporoz </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Hipertenziya </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>
                                {' '}
                                Yağ metabolizmi ilə bağlı xəstəliklər
                              </span>
                            </Link>
                          </li>{' '}
                          <li>
                            <Link>
                              <span> Sonsuzluq </span>
                            </Link>
                          </li>{' '}
                          <li>
                            <Link>
                              <span>
                                {' '}
                                Cirtdanboyluluq və boyun həddindən artıq olması{' '}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span> Sekresiya vəzlərinin şişləri </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span> Artıq çəki və piylənmə </span>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <>
                        <h2>Həkimlərimiz</h2> <br />
                        {content.map((item) => (
                          <div className="col-lg-5 col-sm-6 mt-4">
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
                        <Accordion.Header>Akromeqaliya nədir?</Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Akromeqaliya hipofiz vəzindən böyümə hormonu
                            ifrazının artması ilə xarakterizə olunan bir
                            xəstəlikdir.Akromeqaliya zamanı hipofiz vəzində
                            adətən adenom olmuş olur. Müalicəsi cərrahi,dərman
                            müalicəsi və ya şüa terapiyası ilə olur.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          “Zəhərli”, “tənbəl” və “düyünlü” zob xəstəlikləri
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            İlkin xəstə qrupu, yəni “zəhərli zob”la gələn
                            xəstələr daha çox oqranizmin normadan çox işləməsi
                            ilə bağlı xəstələr şikayət edir. Bu zaman bütün
                            orqanizm başlayır çox işləməyə. Məsələn, ürəkdə
                            döyüntülər olur, əsəbilik olur, tərləmələr olur,
                            qarın getmələri olur, psixoloji problemlər olur –
                            bir şeyə fokuslana bilməmək kimi problemlər olur.
                            İkinci qrup xəstələrdə də tam əksi, kütlük olur,
                            qəbizlik olur, dəri quruluğu olur, saç tökülmələri
                            olur. Və üçüncü qrup xəstəliklər, yəni düyünlə və ya
                            böyümə ilə gələn xəstəliklər də daha çox bu böyümüş
                            düyünün qalxanabənzər vəzin ətrafındakı orqanları
                            sıxması nəticəsində ya boğulma, nəfəs borusunu
                            basması ilə, ya udqunma problemi və ya səs tellərinə
                            gedən sinirləri sıxaraq səs problemi kimi
                            şikayətlərlə bizə müraciət edilir.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Hipofiz vəzi nədir ?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            İnsan orqanizminin yeniyetməlik dövrünün sonuna
                            qədər böyüməsini təmin edən və böyüməni dayandıran
                            da hipofiz vəzdir. Hipofiz, eyni zamanda
                            bədənimizdəki karbonhidrat və yağ mübadiləsini
                            tənzimləyir. Lazım gəldikdə hüceyrələrdəki zülal
                            hazırlanmasını da artırır. Hipofiz az miqdarda
                            hormon ifraz etdikdə orqanizm boyatmadan qalır,
                            cırtdan boyluluq (nanismus), ətrafın zəif inkişaf
                            etməsi (micromelia) və infantilizm deyilən hal
                            meydana çıxır. Hipofiz vəzi artıq miqdarda hormon
                            ifraz etdikdə isə divlik (giqantizm) adlanan bir
                            anomaliya yaranır.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Hormonal pozğunluq nədir ?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Hormonal pozğunluq çox geniş bir anlayışdır.
                            Hormonal pozğunluq dedikdə, qadınlar tərəfindən
                            menstruasiya pozğunluğu , tüklənmə və sonsuzluq,
                            hamiləlik ilə əlaqədar hormonlar başa düşülür.
                            Hormon pozğunluğu termininin tez-tez istifadə
                            edildiyi başqa bir vəziyyət də menstruasiya
                            nizamsızlıqlarıdır. Menstruasiyannizamsızlığı bəzən
                            qadınlıq hormonları deyilən (FSH, estrogen və s.)
                            hormonlarındakı pozğunluqlara bağlı olur. Qadınlarda
                            menstruasiya nizamı, tüklənmə və sonsuzluq ilə
                            əlaqədar başlıca hormonlar bunlardır: <br /> • FSH:
                            Beyində hipofiz orqanından ifraz olunur. Başlıca
                            vəzifəsi yumurtalıqları xəbərdar edərək estrogen
                            hormonunun istehsalını artırmaqdır. <br /> • LH:
                            Beyində hipofiz orqanından ifraz olunur.
                            Yumurtalıqlar üzərinə təsir göstərir və yetkin
                            yumurtanın meydana gəlməsini, çatlamasını təmin
                            edir. <br /> • Testosteron: Əsas kişilik hormonu
                            kimi bilinsə də, qadınlarda aşağı səviyyədə olur.
                            Artması qadınlarda həddindən artıq tüklənməyə səbəb
                            olur. <br /> • Progesteron: Yumurtalıqlardan ifraz
                            olunur. Menstruasiya dövrünün ikinci yarısında
                            xüsusilə təsirlidir. Hamiləliyin başlaması və
                            davamına təsir göstərir. <br />• Prolaktin (süd
                            hormonu): Beyində hipofiz orqanından ifraz olunur.
                            Prolaktin hormonunun artması menstruasiya
                            nizamsızlığı, hamilə qala bilməmə kimi problemlər
                            yarada bilər.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          Uşaqlarda diabet əlamətləri nələrdir ?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Əgər uşağınızda ağız quruluğu, çox su içmə, çox
                            sidiyə çıxma və çəki itirmə problemi varsa,
                            endokrinoloqa müraciət etmək lazımdır. Çünki burada
                            Tip 1 diabet xəstəliyi, yəni şəkərli diabet
                            xəstəliyi və şəkərsiz diabet xəstəliyi olma ehtimalı
                            var. Eyni zamanda hər hansı bir yeri kəsilirsə və ya
                            yara əmələ gəlirsə, yaranın yaxşılaşmağında gecikmə
                            olursa, yaxşılaşmırsa, o zaman mütləq uşaq
                            endokrinoloquna müraciət etmək lazımdır. Yəni
                            şəkərli diabetdə bu əlamətlər olur.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>Osteoparoz nədir?</Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Osteoparoz-sümük əriməsi müalicə olunmazsa
                            sınıqlarla nəticələnəcək və ömürlük yataqlıq
                            vəziyyəti ilə sonlanacaq bir xəstəlikdir.
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
                            <span> Diabet</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Qalxanvari vəz xəstəlikləri </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Metabolik pozuntular </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Reproduktiv xəstəliklər </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Menopauza </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Osteoporoz </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Hipertenziya </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span> Yağ metabolizmi ilə bağlı xəstəliklər</span>
                          </Link>
                        </li>{' '}
                        <li>
                          <Link>
                            <span> Sonsuzluq </span>
                          </Link>
                        </li>{' '}
                        <li>
                          <Link>
                            <span>
                              {' '}
                              Cirtdanboyluluq və boyun həddindən artıq olması{' '}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span> Sekresiya vəzlərinin şişləri </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span> Artıq çəki və piylənmə </span>
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
