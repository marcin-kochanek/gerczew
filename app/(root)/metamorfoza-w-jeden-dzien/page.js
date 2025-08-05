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
import { QuoteThree } from '../../components/svg'

export default function ServicePage() {
  useScrollSmooth()

  useGSAP(() => {
    const timer = setTimeout(() => {
      titleAnimation()
      fadeAnimation()
    }, 100)
    return () => clearTimeout(timer)
  })
  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120">
      <div className="tm-hero-area tm-hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tm-hero-content">
                <span className="tm-hero-subtitle">Gerczew Stomatologia</span>
                <h4 className="tm-hero-title tp_fade_right">
                  Metamorfoza w jeden dzień
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceWrapper>
        <div className="blog-details-top-text">
          <p>
            W Gerczew Stomatologia doskonale rozumiemy, że nie każdy ma czas na
            długotrwałe leczenie. Dlatego oferujemy metamorfozę uśmiechu, którą
            można wykonać nawet podczas jednej wizyty – dzięki nowoczesnemu,
            wysokoestetycznemu <b>bondingowi kompozytowemu.</b>
          </p>
        </div>

        <div className="blog-details-blockquote tp_fade_bottom mt-120">
          <blockquote>
            <span className="quote-icon">
              <QuoteThree />
            </span>
            <p>
              Nowy uśmiech bez szlifowania – szybka, bezbolesna i spektakularna
              zmiana
            </p>
            <span className="blockquote-info">Weronika Gerczew</span>
          </blockquote>
        </div>

        <div className="blog-details-left-content">
          <p>To rozwiązanie idealne dla osób, które:</p>
          <div className="mb-20 ml-20">
            <ul>
              <li>chcą rozjaśnić i odświeżyć uśmiech,</li>
              <li>
                zmagają się z drobnymi przebarwieniami, starciami, przerwami lub
                nierównościami,
              </li>
              <li>
                nie są w pełni zadowolone z wyglądu zębów po leczeniu
                ortodontycznym
              </li>
              <li>
                szukają szybkiej i nieinwazyjnej poprawy bez konieczności
                szlifowania zębów
              </li>
            </ul>
          </div>
        </div>

        <div className="blog-details-thumb-box tp_fade_bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="blog-details-thumb">
                <Image
                  className="w-100 mb-20"
                  src={details_thumb_1}
                  alt="details-thumb"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-details-thumb">
                <Image
                  className="w-100 mb-20"
                  src={details_thumb_2}
                  alt="details-thumb"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="blog-details-left-content">
          <p>
            Wykorzystujemy materiały kompozytowe klasy premium, które do
            złudzenia przypominają naturalne szkliwo – zarówno pod względem
            koloru, jak i połysku. Dzięki precyzyjnej aplikacji i perfekcyjnemu
            polerowaniu uzyskujemy efekt świeżego, symetrycznego uśmiechu, który
            utrzymuje się przez lata.
          </p>

          <div className="blog-details-left-content">
            <h4 className="blog-details-left-subtitle">
              Bonding to bezpieczna, szybka i w 100% bezbolesna metamorfoza –
              bez ingerencji w strukturę zębów.
            </h4>
            <h4 className="blog-details-left-subtitle">
              Twój nowy uśmiech może powstać nawet w jeden dzień.
            </h4>
          </div>
        </div>
      </ServiceWrapper>
    </section>
  )
}
