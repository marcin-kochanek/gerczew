import React from 'react'
import Image from 'next/image'
import { CloseTwo, Facebook, InstagramTwo } from '../svg'

// images
import logo from '@/assets/img/logo/1.png'
import MobileMenus from './mobile-menus'

export default function MobileOffcanvas({ openOffcanvas, setOpenOffcanvas }) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? 'opened' : ''}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="/">
                <Image src={logo} alt="logo" />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus closeOffcanvas={() => setOpenOffcanvas(false)} />
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Gerczew Stomatologia</h3>

              <ul>
                <li>
                  <a>ul. Tadeusza Boya-Żeleńskiego 25</a>
                  <a>85-980 Bydgoszcz</a>
                </li>
                <li>
                  <a>Czynne: Pon-pt 10.00-18.00</a>
                </li>
                <li>
                  <a>Telefon: +48 503 647 102</a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <ul>
                <li>
                  <a href="#">
                    <InstagramTwo />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Facebook />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? 'opened' : ''}`}
      ></div>
    </>
  )
}
