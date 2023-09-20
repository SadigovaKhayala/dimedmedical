import React, { Component } from 'react'

// Import Images
import sevilx from '../../images/team/sevilx.png'
import raufdr from '../../images/team/raufdr.png'
import nabatx from '../../images/team/nabatx.png'
import nazax from '../../images/team/nazax.png'
import sevdax from '../../images/team/sevdax.png'
import nergizx from '../../images/team/nergizx.png'
import samirex from '../../images/team/samirex.png'
import agadr from '../../images/team/agadr.png'
import pp from '../../images/team/pp.png'
import ptImg1 from '../../images/shap/trangle-orange.png'
import ptImg2 from '../../images/shap/square-dots-orange.png'
import ptImg3 from '../../images/shap/line-circle-blue.png'
import ptImg4 from '../../images/shap/wave-blue.png'
import ptImg5 from '../../images/shap/circle-dots.png'

const teamMembers = [
  {
    name: 'Dr. Samirə Rzayeva',
    specialization: 'Direktor',
    image: samirex,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
  {
    name: 'Dr. Ağarza Rzayev',
    specialization: 'Təsisçi',
    image: agadr,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },

  {
    name: 'Dr. Rauf Soltanov',
    specialization: 'Həkim Radioloq',
    image: raufdr,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
  {
    name: 'Dr. Nabatxanim Xalilova ',
    specialization: 'Terapevt',
    image: nabatx,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
  {
    name: 'Dr. Nərgiz Haşımzadə ',
    specialization: 'Tibb üzrə fəlsəfə doktoru - Psixoloq',
    image: nergizx,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
  ,
  {
    name: 'Dr. Nəzakət Mirzəliyeva ',
    specialization: 'Ginekoloq',
    image: nazax,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
  {
    name: 'Dr. Günel Rəhimova   ',
    specialization: 'Endokrinoloq',
    image: nazax,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
  ,
  {
    name: 'Dr. Sevda  Hacıyeva',
    specialization: 'Həkim Radioloq',
    image: sevdax,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
  ,
  {
    name: 'Dr. Sevil Ramazanova ',
    specialization: 'Ginekoloq',
    image: sevilx,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
  ,
  {
    name: ' Dr. Səbinə Hüseynova ',
    specialization: 'Həkim -laborant',
    image: pp,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
  ,
  {
    name: 'Dr. Kamilə  Novruzova ',
    specialization: 'Kosmetoloq',
    image: pp,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
  {
    name: 'Musayeva Səbinə ',
    specialization: 'Tibb-bacısı ',
    image: pp,
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/' },
      { platform: 'LinkedIn', link: 'https://www.linkedin.com/' },
      { platform: 'Instagram', link: 'https://www.instagram.com/' },
    ],
  },
]

class TeamSection extends Component {
  render() {
    return (
      <>
        <section className="section-area section-sp3 team-wraper">
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Kollektivimiz </h6>
              <h2 className="title">Peşəkar Komandamız ilə tanış olun </h2>
            </div>
            <div className="row justify-content-center">
              {teamMembers.map((teamMember, index) => (
                <div key={index} className="col-lg-4 col-sm-6 mb-30">
                  <div className="team-member">
                    <div className="team-media">
                      <img src={teamMember.image} alt={teamMember.name} />
                    </div>
                    <div className="team-info">
                      <div className="team-info-content">
                        <h4 className="title">{teamMember.name}</h4>
                        <span className="text-secondary">
                          {teamMember.specialization}
                        </span>
                      </div>
                      <ul className="social-media">
                        {teamMember.socialMedia.map((social, index) => (
                          <li key={index}>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href={social.link}
                            >
                              <i
                                className={`fab fa-${social.platform.toLowerCase()}`}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img className="pt-img1 animate1" src={ptImg1} alt="" />
          <img className="pt-img2 animate2" src={ptImg2} alt="" />
          <img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
          <img className="pt-img4 animate-wave" src={ptImg4} alt="" />
          <img className="pt-img5 animate-wave" src={ptImg5} alt="" />
        </section>
      </>
    )
  }
}

export default TeamSection
