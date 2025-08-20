'use client'
import React from 'react'
import Image from 'next/image'
import leczenie_kanalowe_1 from '@/assets/img/about/leczenie-kanalowe_2.jpg'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import useScrollSmooth from '@/hooks/use-scroll-smooth'
import { ScrollSmoother, ScrollTrigger, SplitText } from '../../plugins'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

// animation
import { titleAnimation, fadeAnimation } from '@/utils/title-animation'
import ServiceWrapper from '../../components/services/service-wrapper'

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
                  Leczenie kanałowe
                  <br />
                  pod mikroskopem
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceWrapper>
        <div className="blog-details-top-text">
          <p>
            Endodoncja, czyli leczenie kanałowe, to metoda leczenia chorób
            miazgi zęba. Przyczyny tego stanu mogą być różne; między innymi
            głęboka próchnica, uszkodzenia termiczne, przeciążenia zgryzowe,
            pęknięcia a także złamanie zęba. Leczenie kanałowe polega na
            usunięciu chorej tkanki z komory i kanałów zęba, zdezynfekowaniu i
            wypełnieniu odpowiednim materiałem. Dostępna jest radiowizjografia i
            tomografia, a leczenie kanałowe odbywa się w powiększeniu pod
            mikroskopem.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title">
            Leczenie kanałowe pod mikroskopem
          </h4>
          <p>
            Leczenie kanałowe nie byłoby trudne, gdyby kanały były proste jak
            rurki. Niestety to skomplikowany system bardzo wąskich przestrzeni o
            zakrzywionym przebiegu, które mają rozgałęzienia. Trudność polega na
            dotarciu do wszystkich trudno dostępnych miejsc kanałów. Z tego
            powodu konieczna jest do tego wiedza, doświadczenie lekarza, a także
            nowoczesne technologie. W GerczewStomatologia w leczeniu
            endodontycznym wykorzystujemy najnowocześniejszy mikroskop marki
            Zeiss. Mikroskop pozwala na wielokrotne powiększenie obrazu
            leczonego zęba. W rezultacie lekarz widzi dokładnie całą komorę zęba
            oraz jego kanały, co pozwala je dokładnie opracować i oczyścić.
          </p>
        </div>

        <div className="showcase-details-thumb-wrap">
          <div className="row gx-80">
            <div className="col-xl-12">
              <div className="showcase-details-thumb">
                <Image
                  data-speed=".8"
                  src={leczenie_kanalowe_1}
                  alt="details-thumb"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title">
            Jakie są zalety endodoncji z użyciem mikroskopu?
          </h4>
          <div className="mb-20 ml-20">
            <ul>
              <li>większe bezpieczeństwo dla pacjenta,</li>
              <li>powiększenie widoku pola zabiegowego,</li>
              <li>zwiększona skuteczność i dokładność,</li>
              <li>pozbycie się nieprzyjemnego zapachu z ust</li>
              <li>
                zęby których tradycyjną metodą nie jesteśmy w stanie wyleczyć
                lub były przeznaczone na ekstrakcję mogą prawidłowo funkcjonować
                przez długie lata.
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title">Mikroskop umożliwia:</h4>
          <div className="mb-20 ml-20">
            <ul>
              <li>
                znalezienie wszystkich, nawet nietypowo zlokalizowanych ujść
                kanałów (kanały dodatkowe, nietypowa anatomia zęba)
              </li>
              <li>wyjęcie złamanych narzędzi z kanału</li>
              <li>
                umożliwia dokładne oczyszczenie kanałów zębowych i precyzyjne
                ich wypełnienie (kanały wąskie/zobliterowane/zakrzywione)
              </li>
              <li>
                ocenę złamań i pęknięć tkanek zęba, które są niewidoczne bez
                mikroskopu
              </li>
              <li>zamknięcie perforacji (czyli otworów w zębie)</li>
              <li>
                wyjęcie starego wypełnienia z całej długości kanałów podczas
                powtórnego leczenia kanałowego
              </li>
              <li>
                wyjęcie starych, metalowych wkładów, cementów oraz wkrętów
                protetycznych
              </li>
              <li>
                w szczególnych przypadkach leczenie przez korony i mosty
                protetyczne bez konieczności ich zdejmowania i niszczenia
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title tp_fade_bottom">
            W naszej placówce wykonujemy zabiegi endodontyczne pod mikroskopem
            operacyjnym. Posiadamy, najnowszy sprzęt, a także pracujemy na
            najwyższej jakości materiałach. Zapraszamy na wizytę.
          </h4>
        </div>
      </ServiceWrapper>
    </section>
  )
}
