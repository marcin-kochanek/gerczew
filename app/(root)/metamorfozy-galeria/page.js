'use client'
import React, { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
// animation
import {
  bounceAnimation,
  heroBgAnimation,
  heroTitleAnim,
} from '@/utils/title-animation'

import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins'
import useScrollSmooth from '@/hooks/use-scroll-smooth'
import Reels from '@/components/home/reels'
import { fadeAnimation, titleAnimation } from '@/utils/title-animation'

import { panelOneAnimation } from '@/utils/panel-animation'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

const PortfolioShowcaseMain = () => {
  useScrollSmooth()

  useEffect(() => {
    document.body.classList.add('tp-smooth-scroll')
    return () => {
      document.body.classList.remove('tp-smooth-scroll')
    }
  }, [])

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation()
      titleAnimation()
      heroTitleAnim()
      heroBgAnimation()
      // bounce animation
      bounceAnimation()

      // panel animation
      panelOneAnimation()
    }, 100)
    return () => clearTimeout(timer)
  })
  return (
    <div className="pt-120">
      <div className="tm-hero-area tm-hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tm-hero-content">
                <span className="tm-hero-subtitle">Gerczew Stomatologia</span>
                <h4 className="tm-hero-title tp_fade_right">Galeria</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container fq-faq-bdr pt-80">
        <Reels />
      </div>
    </div>
  )
}

export default PortfolioShowcaseMain
