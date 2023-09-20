import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MenusItems = (isMenuOpen, setIsMenuOpen) => {
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
        // {
        //   id: 'booking',
        //   displayName: 'Booking',
        //   linkName: 'booking',
        // },
        // {
        //   id: 'error',
        //   displayName: 'Error 404',
        //   linkName: 'error-404',
        // },
        // {
        //   id: 'formLogin',
        //   displayName: 'Login / Register',
        //   linkName: 'form-login',
        // },
      ],
    },
    {
      id: 'services',
      name: 'Xidmələrimiz',
      linkName: 'services',
    },

    // {
    //   id: 'services',
    //   name: 'Xidmələrimiz',
    //   linkName: '',

    //   subItems: [
    //     {
    //       id: 'services',
    //       displayName: 'Xidmələrimiz',
    //       linkName: 'services',
    //     },
    //     {
    //       id: 'serviceDetail',
    //       displayName: 'Service Detail',
    //       linkName: 'services-categories',
    //     },
    //   ],
    // },
    // {
    //   id: 'blog',
    //   name: 'Blog',
    //   linkName: '#',

    //   subItems: [
    //     {
    //       id: 'blogGrid',
    //       displayName: 'Blogs',
    //       linkName: 'blog-grid',
    //     },
    //     {
    //       id: 'blogDetails',
    //       displayName: 'Blog Details',
    //       linkName: 'blog-details',
    //     },
    //   ],
    // },
    // {
    //   id: 'contactUs',
    //   name: 'Əlaqə',
    //   linkName: 'contact-us',
    // },
  ]

  return (
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
            <Link to={`/${item.linkName}`}>{item.name}</Link>
          )}
          {(isMobileView || activeItem === item.id) && item.subItems && (
            <ul className="sub-menu">
              {item.subItems.map((subItem, index) => (
                <li key={subItem.id} onClick={() => {}}>
                  <Link to={`/${subItem.linkName}`}>
                    <span>{subItem.displayName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export default MenusItems
