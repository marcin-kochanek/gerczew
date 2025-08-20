import React from 'react'
import Link from 'next/link'
import menu_data from '@/data/menu-data'

export default function MobileMenus({ closeOffcanvas }) {
  const [navTitle, setNavTitle] = React.useState('')

  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle('')
    } else {
      setNavTitle(menu)
    }
  }
  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {menu_data.map((menu) => (
            <li key={menu.id} className="has-dropdown">
              <div>
                <Link href={menu.link} onClick={closeOffcanvas}>
                  {menu.title}
                </Link>
                {menu.dropdown_menus && (
                  <button
                    className="dropdown-toggle-btn"
                    onClick={() => openMobileMenu(menu.title)}
                  >
                    <i className="fa-light fa-plus"></i>
                  </button>
                )}
              </div>

              {menu.dropdown_menus && (
                <ul
                  className="tp-submenu submenu"
                  style={{
                    display: navTitle === menu.title ? 'block' : 'none',
                  }}
                >
                  {menu.dropdown_menus.map((mm, i) => (
                    <li key={i}>
                      <Link href={mm.link} onClick={closeOffcanvas}>
                        {mm.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
