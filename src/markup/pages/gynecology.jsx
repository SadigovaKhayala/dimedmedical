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
import nazax from '../../images/team/nazax.png'

//
const content = [
  {
    thumb: nazax,
    title: 'Dr. Nəzakət Mirzəliyeva ',
    subtitle: 'Ginekoloq ',
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
                  <h1>Ginekologiya </h1>
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
                        Ginekologiya
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
                      <h2 className="title mb-15">Ginekologiya </h2>
                      <p className="mb-0">
                        Ginekologiya - qadın reproduktiv sistemi xəstəliklərinin
                        profilaktikasını və müalicəsini tədqiq edən elmdir.Cinsi
                        yetkinlik dövründən başlayaraq klimakterik perioda qədər
                        qadın orqanizminin fizioloji fəaliyyətinə məhz
                        həkim-ginekoloq nəzarət edir.
                      </p>{' '}
                      <br />
                      <p>
                        {' '}
                        Ginekologlarımız tərəfindən müalicə edilən xəstəliklər
                      </p>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-8 mb-30">
                        <ul className="list-check-squer mb-0">
                          <ul className="">
                            <li>
                              <Link>
                                <span>
                                  Cinsi yolla keçən xəstəliklər (xlamidioz,
                                  ureaplazmoz, mikoplazmoz, trixomoniaz, genital
                                  herpes)
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link>
                                <span> Bakterial vaginoz</span>
                              </Link>
                            </li>
                            <li>
                              <Link>
                                <span>vulvovaginal kandidoz </span>
                              </Link>
                            </li>
                            <li>
                              <Link>
                                <span> Vulvovaginit, servisit, endometrit</span>
                              </Link>
                            </li>
                            <li>
                              <Link>
                                <span>Servikal kanalın polipləri</span>
                              </Link>
                            </li>
                            <li>
                              {' '}
                              <Link>
                                <span>
                                  Poliplər, endometrium hiperplaziyası
                                </span>
                              </Link>
                            </li>
                            <li>
                              {' '}
                              <Link>
                                <span>Menstrual siklin pozulması</span>
                              </Link>
                            </li>
                            <li>
                              <Link>
                                <span>Uşaqlıq boynunun xəstəlikləri</span>
                              </Link>
                            </li>
                            <li>
                              {' '}
                              <Link>
                                <span>Uşaqlıq mioması</span>
                              </Link>{' '}
                            </li>
                            <li>
                              {' '}
                              <Link>
                                <span>Yumurtalıqların sistləri</span>
                              </Link>{' '}
                            </li>
                            <li>
                              {' '}
                              <Link>
                                <span> Endometrioz</span>
                              </Link>{' '}
                            </li>
                            <li>
                              {' '}
                              <Link>
                                <span>sonsuzluq</span>
                              </Link>{' '}
                            </li>
                            <li>
                              {' '}
                              <Link>
                                <span>
                                  {' '}
                                  Kontrasepsiya (qorunma) metodunun seçimi
                                </span>
                              </Link>{' '}
                            </li>{' '}
                            <li>
                              {' '}
                              <Link>
                                <span>Predmenstrual sindrom</span>
                              </Link>{' '}
                            </li>{' '}
                            <li>
                              {' '}
                              <Link>
                                <span>Vulva xəstəlikləri</span>
                              </Link>{' '}
                            </li>
                            <li>
                              {' '}
                              <Link>
                                <span>
                                  menopauza (klimaks) dövrünün başlanması ilə
                                  əlaqəli problemlər
                                </span>
                              </Link>{' '}
                            </li>
                          </ul>
                        </ul>
                      </div>

                      <>
                        <h2>Həkimlərimiz</h2> <br />
                        {content.map((item) => (
                          <div className="col-lg-5 col-sm-6">
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
                        <Accordion.Header>
                          Hamiləlik boyunca hər ay neçə kq kökəlmək olar?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Hamiləlikdə çəki artımının izlənməsi çox
                            əhəmiyyətlidir. İdeal kilosunda olan bir ana
                            namizədi üçün ilk üç ay müddətində hər ayda 0.5-1
                            kilo, sonrakı aylarda isə 1.5-2 kilo çəki artımı
                            normaldır. Hamiləlikdə nə qədər kilo alabiləcəyiniz
                            öncəki çəkinizdən çox asılıdır. Lakin bu proses tam
                            olaraq belə getmir. Çəkinizindən asılı olmayaraq siz
                            gündəlik özünüzün və körpənizin ehtiyyacı olan
                            zülal, vitamin bir sözlə dəyərli qidaları mütləq
                            qəbul etməlisiniz. Çəkiniz ləng artırsa bu o
                            deməkdir ki, körpəniz sağlam qida ilə tam təmin
                            olunmur. Hamiləlikdə sürətli çəki artımı diabet,
                            uşağın ağır çəkili olması, venaların varikoz
                            genişlənməsinəsəbəb ola bilər
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Ürək bulanma və qusma məni çox narahat edir, bundan
                          necə xilas ola bilərəm?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            İlk öncə bilməlisiniz ki, ürək bulanma, qusma, ağız
                            şirəsi ifrazının artması, şişkinliklər, dəri
                            problemləri və digər bu kimi toksikozlar hamiləlik
                            sonlandıqdan sonra keçib gedən patoloji haldan başqa
                            birşey deyil. Səhərlər yavaş-yavaş qalxın və bir az
                            tez-tez nəfəs alın, yataqdan durmadan nahar etməyi
                            sınayın, arabir quru meyvə,nanə, limon və zəncəfil
                            yeyin, acı yeməklər uzaq olun və fizki aktiv olun.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Mioma (Fibroid) Nədir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Fibroidlər hamar, xərçəngsiz şişlərdir və uşaqlıq
                            yolunda və ya onun ətrafında inkişaf edə bilər.
                            Qismən əzələ toxumasından ibarət olan miomlar nadir
                            hallarda serviksdə əmələ gəlir, lakin onlar inkişaf
                            etdikdə, adətən, uşaqlığın yuxarı hissəsinin böyük
                            hissəsində də rast gəlinir. (i) Uterusun bu
                            hissəsindəki fibromalara fibroma və ya leyomioma da
                            deyilir. Həkimlər pelvik müayinə zamanı əksər
                            fibromaları görə və ya hiss edə bilərlər.
                            Simptomlara səbəb olanlar cərrahi yolla və ya daha
                            az invaziv prosedurlarla aradan qaldırıla bilər.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Mioma əməliyyatı nə zaman edilməlidir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Uşaqlıq mioması uşaqlıq yolunda böyüyən xərçəngsiz
                            şişlərdir. Onlar həmçinin fibroidlər kimi
                            tanınırlar. Əgər həkiminiz sizə mioma (yaxud uşaqlıq
                            mioması) diaqnozu qoyubsa, onun qadın uşaqlığının ən
                            çox rast gəlinən xoşxassəli şişi olduğunu və müalicə
                            oluna biləcəyini bilmək lazımdır. Beləliklə, mioma
                            nədir? Səbəbləri, simptomları və müalicə variantları
                            haqqında daha çox məlumat əldə etmək üçün məqaləni
                            oxumağa davam edin.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className="sticky-top pb-1">
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
