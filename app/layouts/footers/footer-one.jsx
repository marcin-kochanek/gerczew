import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Email, Location } from '@/components/svg'
import logo from '@/assets/img/logo/logo-white.png'

const social_data = [
  {
    id: 1,
    icon: 'fa-brands fa-facebook-f',
    link: 'https://www.facebook.com/',
  },
  {
    id: 2,
    icon: 'fa-brands fa-instagram-in',
    link: 'https://www.linkedin.com/',
  },
]

export default function FooterOne() {
  return (
    <footer>
      <div className="tp-footer-6-area black-bg pt-100">
        <div className="container container-1300">
          <div className="tp-footer-6-widget-wrap">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-60">
                <div className="tp-footer-6-widget footer-col-6-1">
                  <div className="tp-footer-6-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="tp-footer-6-talk">
                    <span>Masz pytania? Zadzwoń</span>
                    <h4>
                      <a href="tel:+67041390762">+48 503 647 102</a>
                    </h4>
                  </div>
                  <div className="tp-footer-6-contact">
                    <div className="tp-footer-6-contact-item d-flex align-items-start">
                      <div className="tp-footer-6-contact-icon">
                        <span>
                          <Location />
                        </span>
                      </div>
                      <div className="tp-footer-6-contact-content">
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-60">
                <div className="tp-footer-6-widget footer-col-6-2">
                  <h4 className="tp-footer-6-widget-title">Category</h4>
                  <div className="tp-footer-6-list">
                    <ul>
                      <li>
                        <a href="#">Our Story</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-4 mb-60">
                <div className="tp-footer-6-widget footer-col-6-3"></div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 mb-60">
                <div className="tp-footer-6-widget footer-col-6-4">
                  <div className="tp-footer-6-social-box">
                    <h4 className="tp-footer-6-widget-title">Obserwuj nas</h4>
                    <div className="tp-footer-6-social">
                      {social_data.map((item) => (
                        <a key={item.id} href={item.link} target="_blank">
                          <i className={item.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-copyright-2-area tp-copyright-2-bdr-top black-bg">
          <div className="container container-1300">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="tp-copyright-2-left text-center text-md-start">
                  <p className="mb-0">
                    All rights reserved — {new Date().getFullYear()} © Pan
                    Programista
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
