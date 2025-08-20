'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeaderMenus from './header-menus'
import useSticky from '@/hooks/use-sticky'
import logo from '@/assets/img/logo/4.png'
import logo_2 from '@/assets/img/logo/logo-white.png'
import MobileOffcanvas from '@/components/offcanvas/mobile-offcanvas'
import { Facebook, InstagramTwo } from '../../components/svg'

export default function HeaderEleven({ transparent = false, cls = '' }) {
  const { sticky, headerRef, headerFullWidth } = useSticky()
  const [openOffCanvas, setOpenOffCanvas] = useState(false)
  useEffect(() => {
    headerFullWidth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <header className="tp-header-height z-index-5" ref={headerRef}>
        <div
          id="header-sticky"
          className={`tp-inner-header-area ${cls} ${
            transparent ? 'transparent' : 'tp-inner-header-style-2'
          } tp-inner-header-mob-space ${sticky ? 'header-sticky' : ''}`}
        >
          <div className="container container-1800">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-logo tp-header-logo">
                  <Link
                    className={`${transparent ? 'ab-logo-1' : 'logo-1'}`}
                    href="/"
                  >
                    <Image src={transparent ? logo_2 : logo} alt="logo" />
                  </Link>
                  <Link
                    className={`${transparent ? 'ab-logo-2' : 'logo-2'}`}
                    href="/"
                  >
                    <Image src={transparent ? logo : logo_2} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-xl-block">
                <div className="tp-inner-header-right-wrap text-center">
                  <div className="tp-inner-header-menu header-main-menu">
                    <nav className="tp-main-menu-content">
                      {/* header menus */}
                      <HeaderMenus />
                      {/* header menus */}
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-right-action text-end">
                  <div className="tp-offcanvas-social">
                    <ul className="d-none d-xl-block">
                      <li>
                        <a
                          href="https://www.instagram.com/gerczew.stomatologia"
                          target="_blank"
                        >
                          <InstagramTwo />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=61562122764881"
                          target="_blank"
                        >
                          <Facebook />
                        </a>
                      </li>
                    </ul>
                    <div className="tp-inner-bar tp-header-bar d-xl-none">
                      <button
                        onClick={() => setOpenOffCanvas(true)}
                        className="tp-offcanvas-open-btn"
                      >
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffCanvas}
      />
      {/* off canvas */}
    </>
  )
}
