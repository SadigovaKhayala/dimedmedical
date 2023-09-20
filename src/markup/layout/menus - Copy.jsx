import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MenusItems = ({ onMenuItemClick }) => {
  const [activeItem, setActiveItem] = useState(null)
  const [isMobileView, setIsMobileView] = useState(false)

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

  const closeMenu = () => {
    onMenuItemClick()
  }

  const menuItems = [
    {
      id: 'home',
      name: 'Home',
      linkName: '#',
    },
    {
      id: 'pages',
      name: 'Pages',
      linkName: '#',

      subItems: [
        {
          id: 'aboutus',
          displayName: 'About Us',
          linkName: 'about-us',
        },
        {
          id: 'team',
          displayName: 'Our Team',
          linkName: 'team',
        },
        {
          id: 'faq',
          displayName: "FAQ's",
          linkName: 'faq',
        },
        {
          id: 'booking',
          displayName: 'Booking',
          linkName: 'booking',
        },
        {
          id: 'error',
          displayName: 'Error 404',
          linkName: 'error-404',
        },
        {
          id: 'formLogin',
          displayName: 'Login / Register',
          linkName: 'form-login',
        },
      ],
    },
    {
      id: 'services',
      name: 'Services',
      linkName: '',

      subItems: [
        {
          id: 'services',
          displayName: 'Service',
          linkName: 'services',
        },
        {
          id: 'serviceDetail',
          displayName: 'Service Detail',
          linkName: 'service-detail',
        },
      ],
    },
    {
      id: 'blog',
      name: 'Blog',
      linkName: '#',

      subItems: [
        {
          id: 'blogGrid',
          displayName: 'Blogs',
          linkName: 'blog-grid',
        },
        {
          id: 'blogDetails',
          displayName: 'Blog Details',
          linkName: 'blog-details',
        },
      ],
    },
    {
      id: 'contactUs',
      name: 'Contact Us',
      linkName: 'contact-us',
    },
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
            <Link to="#" onClick={closeMenu}>
              {item.name}
              <i className={`fas fa-plus`}></i>
            </Link>
          ) : (
            <Link to={`/${item.linkName}`} onClick={closeMenu}>
              {item.name}
            </Link>
          )}
          {(isMobileView || activeItem === item.id) && item.subItems && (
            <ul className="sub-menu">
              {item.subItems.map((subItem, index) => (
                <li key={subItem.id}>
                  <Link to={`/${subItem.linkName}`} onClick={closeMenu}>
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
