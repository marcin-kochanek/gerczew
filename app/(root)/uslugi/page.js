'use client'
import React from 'react'
import Image from 'next/image'
import details_thumb_1 from '@/assets/img/home-01/services/chirurgia-stomatologiczna.jpg'
import details_thumb_2 from '@/assets/img/home-01/services/periodontologia.jpg'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import useScrollSmooth from '@/hooks/use-scroll-smooth'
import { ScrollSmoother, ScrollTrigger, SplitText } from '../../plugins'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

// animation
import { titleAnimation, fadeAnimation } from '@/utils/title-animation'
import ServiceWrapper from '../../components/services/service-wrapper'
import Services from '../../components/services/services'
import { imageRevealAnimation } from '../../utils/image-reveal-anim'

export default function ServicePage() {
  useScrollSmooth()

  useGSAP(() => {
    const timer = setTimeout(() => {
      titleAnimation()
      fadeAnimation()
      imageRevealAnimation()
    }, 100)
    return () => clearTimeout(timer)
  })
  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="tm-hero-area tm-hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tm-hero-content">
                <span className="tm-hero-subtitle">Gerczew Stomatologia</span>
                <h4 className="tm-hero-title tp_fade_right">Nasze usługi</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container fq-faq-bdr pt-80">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="postbox__wrapper">
              <div className="row justify-content-center">
                <Services />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
