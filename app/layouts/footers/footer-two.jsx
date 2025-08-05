import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RightArrow } from '@/components/svg'
import { Location, Phone } from '../../components/svg'
import logo from '@/assets/img/logo/4.png'

export default function FooterTwo({ whiteFooter = true, topCls = '' }) {
  return (
    <footer className="white-bg">
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? 'tp-footer-white' : 'black-bg'
        } tp-copyright-2-bdr-top tp-copyright-white`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 mt-50 mb-50">
              <div className="footer-col-2-1">
                <div className="tp-footer-2-widget-logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>

                <div className="tp-footer-2-widget-text">
                  <p>
                    Twoje marzenie
                    <br />
                    o idealnym uśmiechu <br /> zaczyna się tutaj.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-4 col-md-12 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <ul>
                    <li>
                      <a href="#">Strona główna</a>
                    </li>
                    <li>
                      <a href="#">Usługi</a>
                    </li>
                    <li>
                      <a href="#">Cennik</a>
                    </li>
                    <li>
                      <a href="#">Metamorfozy</a>
                    </li>
                    <li>
                      <a href="#">O nas</a>
                    </li>
                    <li>
                      <a href="#">Kontakt</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-xl-6 col-lg-6 col-md-12 mt-50 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Umów się na wizytę</h4>
                <div className="tp-footer-2-contact">
                  <div className="tp-footer-2-contact-item">
                    <div className="tp-footer-2-contact-content">
                      <a>+48 503 647 102</a>
                    </div>
                  </div>
                </div>
                <div className="tp-footer-2-contact">
                  <div className="tp-footer-2-contact-item">
                    <div className="tp-footer-2-contact-content">
                      <a href="https://www.google.com/maps" target="_blank">
                        ul. Tadeusza Boya-Żeleńskiego 25
                        <br />
                        85-980 Bydgoszcz
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? 'tp-copyright-white' : 'black-bg'
        }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  All rights reserved — {new Date().getFullYear()} © Pan
                  Progamista
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a className="mb-10" href="#">
                  Instagram
                </a>
                <a className="mb-10" href="#">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  )
}
