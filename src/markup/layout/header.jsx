import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sticky from 'react-stickynode'

// Images
import logo from '../../images/logo.png'
import closeIcon from '../../images/icon/close.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchFormOpen, setIsSearchBtn] = useState(false)

  const quikSearchBtn = () => setIsSearchBtn(!isSearchFormOpen)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const quikSearchClose = () => setIsSearchBtn(false)
  const closeMenu = () => setIsMenuOpen(false)
  const [activeItem, setActiveItem] = useState(null)
  const [isMobileView, setIsMobileView] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  const toggleSubmenu = (item) => {
    setActiveItem(item === activeItem ? null : item)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth >= 768)
    }

    // Check the screen size on initial render and whenever the window is resized
    handleResize()

    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const menuItems = [
    {
      id: 'home',
      name: 'Ana səhifə',
      linkName: '#',
    },
    {
      id: 'pages',
      name: 'Səhifələr',
      linkName: '#',

      subItems: [
        {
          id: 'aboutus',
          displayName: 'Haqqımızda',
          linkName: 'about-us',
        },
        {
          id: 'team',
          displayName: 'Həkimlərimiz',
          linkName: 'team',
        },
        {
          id: 'faq',
          displayName: 'Tez-tez verilən suallar ',
          linkName: 'faq',
        },
      ],
    },
    {
      id: 'services',
      name: 'Xidmələrimiz',
      linkName: 'services',
    },
  ]
  return (
    <header className="header header-transparent rs-nav">
      <Sticky enabled={true} className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container-fluid clearfix ">
            <div className="menu-logo logo-dark">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            <button
              className={`navbar-toggler    ${
                isMenuOpen ? 'active' : ''
              } burgerMenuIcon`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menuDropdown"
              aria-controls="menuDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <i class="fas fa-bars "></i>
            </button>

            <div className="secondary-menu">
              <ul>
                {/* <li className="search-btn">
									<button
										id="quikSearchBtn"
										type="button"
										className="btn-link"
										onClick={quikSearchBtn}
										>										
										<i className="las la-search"></i>
									</button>
								</li> */}
                {/* <li className="num-bx">
                  <a href="tel:(+01)999888777">
                    <i className="fas fa-phone-alt"></i> (+01) 999 888 777
                  </a>
                </li> */}
                <li className="btn-area">
                  <Link to="/contact-us" className="btn btn-primary shadow">
                    ƏLAQƏ <i className="btn-icon-bx fas fa-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={`menu-links navbar-collapse collapse justify-content-end  ${
                isMenuOpen ? 'show' : ''
              }`}
              id="menuDropdown"
            >
              <div className="menu-logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>

              <>
                <ul className="nav navbar-nav">
                  {menuItems.map((item) => (
                    <li
                      key={item.id}
                      className={`${activeItem === item.id ? 'open' : ''}`}
                      onClick={() => toggleSubmenu(item.id)}
                    >
                      {item.subItems ? (
                        <Link to="#">
                          {item.name}
                          <i className={`fas fa-plus`}></i>
                        </Link>
                      ) : (
                        <Link to={`/${item.linkName}`} onClick={closeMenu}>
                          {item.name}
                        </Link>
                      )}
                      {(isMobileView || activeItem === item.id) &&
                        item.subItems && (
                          <ul className="sub-menu">
                            {item.subItems.map((subItem, index) => (
                              <li key={subItem.id}>
                                <Link
                                  to={`/${subItem.linkName}`}
                                  onClick={closeMenu}
                                >
                                  <span>{subItem.displayName}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              </>

              <ul className="social-media">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-google"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>

              <div
                className="menu-close"
                id="menuClose"
                onClick={() => setIsMenuOpen(false)}
              >
                <img src={closeIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Sticky>

      <div className={`nav-search-bar ${isSearchFormOpen ? '' : ''}`}>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Type to search"
          />
          <span>
            <i className="ti-search"></i>
          </span>
        </form>
        {/* <span id="searchRemove" onClick={quikSearchClose}>
          <i className="ti-close"></i>
        </span> */}
      </div>
    </header>
  )
}

export default Header
