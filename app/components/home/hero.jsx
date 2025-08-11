import React from 'react'
import Image from 'next/image'

import t_details from '@/assets/img/Gerczew.png'

export default function HeroArea() {
  return (
    <div className="tm-hero-wrapper p-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-7">
            <div className="tm-details-content-wrap z-index-5">
              <div className="tm-hero-content tp_fade_left">
                <span className="tm-hero-landing tm-hero-subtitle">
                  Gerczew Stomatologia
                </span>
                <h5 className="tm-hero-landing tm-hero-title">
                  Twoje marzenie <br /> o{' '}
                  <span style={{ fontStyle: 'italic' }}>idealnym uśmiechu</span>{' '}
                  zaczyna się tutaj.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5">
            <div className="tm-details-thumb">
              <Image
                src={t_details}
                alt="team-details-img"
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
