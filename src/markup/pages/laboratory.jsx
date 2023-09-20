import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
// Import Images
import bnrImg1 from '../../images/banner/img1.jpg'
import waveBlue from '../../images/shap/wave-blue.png'
import circleDots from '../../images/shap/circle-dots.png'
import plusBlue from '../../images/shap/plus-blue.png'
import pdf from '../../images/icon/pdf.png'
import pdffile from '../../pdfs/lab-price.pdf'
import pp from '../../images/team/pp.png'

//
const content = [
  {
    thumb: pp,
    title: 'Dr. Səbinə Hüseynova ',
    subtitle: 'Laborant-həkim',
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
                  <h1>Laboratoriya</h1>
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
                        Laboratoriya
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
                      <h2 className="title mb-15">Laboratoriya </h2>
                      <p className="mb-0">
                        Laboratoriya xidmətinin başlıca məqsədi həkimi vaxtında,
                        dəqiq ve etibarlı informasiya ilə təyin etməkdir. Məhz
                        bunun nəticəsində müalicə həkimi hər hansı bir patoloji
                        prosesin olması və ya olmaması, xəstəliyin inkişaf
                        mərhələlərində həkimə müraciət edərkən, gizli gedişə
                        malik bir xəstəliklər zamani ilkin müayinə metodudur.
                        Bizdə öz işimizdə çalışırıq ki, bu müayinələri maksimal
                        dərəcədə dəqiq yerinə yetirilsin və qısa müddət ərzində
                        həkimə və pasiyentə çatdırılsın.
                      </p>{' '}
                      <br />
                      <p>
                        {' '}
                        Laborator analizləri aşağidakı bölümlərdən ibarətdir .
                      </p>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-8 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>
                            <Link>
                              <span>Qanın müayinəsi </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Sidiyin müayinəsi </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Nəcisin müayinəsi </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Spermanın müayinəsi </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Urogenital sıyrıntının müayinəsi</span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Ana südünün müayinəsi </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Prostat vəzi şirəsinin müayinəsi </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Bəlğəmin müayinəsi </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Yaradan sıyrıntının müayinəsi </span>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <span>Digər biomateriallar </span>
                            </Link>
                          </li>
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
                          Hormonal analizlər necə verilməlidir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Hormon müayinələri üçün qan nümunələri səhər
                            saatlarında acqarına götürülməlidir. Qan nümunəsinin
                            götürülməsindən öncə fiziki və emosional gərginlik,
                            fizioterapevtik prosedurlar, dərman preparatları (bu
                            halda dərman qəbulunun dayandırılması qərarı müalicə
                            həkimi tərəfindən qəbul edilir), spirtli içki və
                            yağlı qida qəbulu yolverilməzdir Qadınlardan qan
                            nümunələri müalicə həkiminin xüsusi göstərişləri
                            olmadığı halda menstrual tsiklin müəyyən günlərində
                            götürülür: LH, FSH, Estradiol hormonları tsiklin
                            2-5-ci günlərində Progesteron 19-24-cü günlərində 17
                            OH progesteron 4-5 ci günlərində götürülməsi
                            məqsədəuyğundur. Prolaktin analizinin yuxudan 2 saat
                            sonra verilməsi tövsiyyə olunur Kortizol analizi
                            üçün saat 10:00 a kimi yaxınlaşmaq lazımdır
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Sutkalıq sidik necə toplanmalıdır?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Sidik 24 saat ərzində sterilizasıya olunmuş balona
                            yığılır. Səhər ilkin sidik atılır, vaxt qeyd olunur,
                            24 saat ərzində ifraz olunan bütün sidik toplanılır.
                            Ümumi miqdarı nəzərdən keçirilərək qeyd edilir. Ən
                            az 20ml olmaqla birdəfəlik steril konteyner əlavə
                            olunur 2 saat ərzində klinikaya çatdırılır.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Hamiləliyin təyini üçün hansı analizləri verməyiləm?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Müasir tibbin təklif etdiyi hamiləliyin
                            müəyyənləşdirilməsinin ən etibarlı yolu qanda
                            β-xorionik qonadotropin hormonunun müayinəsidir.
                            Dölün uşaqlığın divarlarına sabitləndiyi zaman
                            istehsal olunan hormondur və hamiləliyin 4-cü
                            günündən etibarən aşkar olunur.{' '}
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Urogenital nahiyədən götürülən yaxma analizinin
                          şərtləri nələrdir?{' '}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Qadınlarda: <br />
                            Cinsi pəhriz - 2 gün Son sidik <br />
                            ifrazından 3 saat keçdikdən sonra <br />
                            Kolposkopiya(Vaginal USM )müayinəsindən əvvəl və ya
                            24 saat sonra <br /> Vaginal şam qəbulundan 3 gün
                            sonra <br />
                            Adəti qanaxmadan 2 gün əvvəl və ya bittikdən 3 gün
                            sonra.
                            <br /> Antibiotik tərkibli dərmanların qəbulundan 14
                            gün keçməlidir. Müayinə götürüləcəyi günü dərindən
                            yuyunmaq olmaz. ( ilıq su ilə yuyunma mümkündür).{' '}
                            <br />
                            Qızlarda (virgo) yaxma analizi vaginadan götürülür.{' '}
                            <br /> <br />
                            Bəylər üçün şərtlər: <br /> Müayinə götürüləcəyi gün
                            sidiyə çıxılmamalı və ya son sidik ifrazından 4-5
                            saat sonra Antibiotik tərkibli dərmanların
                            qəbulundan 14 gün keçməlidir
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          Qanın kliniki analizinə hansı göstəricilər daxildir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Qanın ümumi analizinə eritrositlər, hemoqlobin,
                            leykositlər, rəng göstəriciləri, hematokrit,
                            retikulositlər, trombositlər aiddir.
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
                          download="laboratory-price-list-dimed.pdf"
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
