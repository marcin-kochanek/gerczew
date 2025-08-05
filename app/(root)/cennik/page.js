'use client'
import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins'
import useScrollSmooth from '@/hooks/use-scroll-smooth'
import FaqArea from '@/components/faq/faq-area'

import { fadeAnimation, titleAnimation } from '@/utils/title-animation'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

const FaqPage = () => {
  useScrollSmooth()

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation()
      titleAnimation()
    }, 100)
    return () => clearTimeout(timer)
  })
  return (
    <div className="pt-120 pb-20">
      <div className="tm-hero-area tm-hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tm-hero-content">
                <span className="tm-hero-subtitle">Gerczew Stomatologia</span>
                <h4 className="tm-hero-title tp_fade_right">Cennik</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FaqArea />
    </div>
  )
}

export default FaqPage
