'use client'
import { gsap } from 'gsap'
import React from 'react'
import { useGSAP } from '@gsap/react'
import useScrollSmooth from '@/hooks/use-scroll-smooth'
import { ScrollSmoother, ScrollTrigger, SplitText } from '../plugins'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)
import klinika from '@/assets/img/about/klinika_7.jpg'
import smiling_girl from '@/assets/img/smiling-girl-4.jpg'

// animation
import { panelTwoAnimation } from '@/utils/panel-animation'
import { titleAnimation, fadeAnimation } from '@/utils/title-animation'
import Image from 'next/image'
import Link from 'next/link'
import HeroArea from '../components/home/hero'
import { Tag, UpArrow } from '../components/svg'
import Testimonials from '../components/home/testimonials'
import { MovingImages } from '../components/home/moving-images'
import Services from '../components/services/services'
import LineText from '../components/line-text'
import FooterOne from '../layouts/footers/footer-one'
import FooterTwo from '../layouts/footers/footer-two'

const HomePage = () => {
  useScrollSmooth()

  useGSAP(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        fadeAnimation()
      }, 100)
    }

    const timer = setTimeout(() => {
      titleAnimation()
      panelTwoAnimation()
    }, 100)
    return () => clearTimeout(timer)
  })

  return (
    <>
      <HeroArea />

      <div className="showcase-details-2-area fq-faq-bdr pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp_fade_right">
                  dr Weronika Gerczew
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Tag />
                  Gabinet stomatologiczny w Bydgoszczy
                </span>
                <span className="ab-inner-subtitle mb-25">
                  <Tag />
                  Bonding zębów
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">
                  Dr Weronika Gerczew to absolwentka Uniwersytetu Medycznego im.
                  Karola Marcinkowskiego w Poznaniu. Na co dzień łączy ogromną
                  wiedzę i doświadczenie z empatią i indywidualnym podejściem do
                  każdego pacjenta. Jej zawodowe pasje to przede wszystkim
                  endodoncja mikroskopowa oraz protetyka estetyczna.
                </p>
                <p className="pb-25">
                  Zarówno w codziennej pracy, jak i w relacji z pacjentami,
                  kieruje się wrażliwością, spokojem i dbałością o każdy detal.
                  Wierzy, że piękny uśmiech to coś więcej niż estetyka — to
                  pewność siebie, która zmienia codzienne życie.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <Link className="tp-btn-black-square" href="/o-nas">
                      Dowiedz się więcej
                      <span>
                        <UpArrow />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="showcase-details-2-area pt-120 pb-120">
        <MovingImages />
      </div>

      <Services isHomePage={true} />

      <div className="tp-shop-banner-area pt-120 pb-120">
        <div className="container-fluid">
          <div className="tp-shop-banner-anim">
            <Image
              data-speed=".8"
              className="w-100"
              src={klinika}
              alt="Gerczew Stomatologia"
              // width={900}
              style={{ height: 'auto' }}
            />
          </div>
        </div>
      </div>

      <Testimonials />

      <LineText cls={'mt-120 pb-120'} />

      {/* <Testimonials style_2={true} /> */}

      {/* <ImageSlider /> */}

      {/* big text */}
      {/* <div className="pt-80">
        <BigText />
      </div> */}
      {/* big text */}
      {/* <FooterTwo /> */}
    </>
  )
}

export default HomePage
