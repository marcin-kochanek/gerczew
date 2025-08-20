'use client'
import React from 'react'
import Image from 'next/image'
import photo_1 from '@/assets/img/home-01/services/periodontologia.jpg'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import useScrollSmooth from '@/hooks/use-scroll-smooth'
import { ScrollSmoother, ScrollTrigger, SplitText } from '../../plugins'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

// animation
import { titleAnimation, fadeAnimation } from '@/utils/title-animation'
import ServiceWrapper from '@/components/services/service-wrapper'

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
                <h4 className="tm-hero-title tp_fade_right">Periodontologia</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceWrapper>
        <div className="blog-details-top-text">
          <p>
            Periodontolog jest specjalistą zajmującym się leczeniem chorób
            przyzębia oraz błony śluzowej jamy ustnej. Przyzębie to otaczający
            zęby zespół tkanek, do których należą dziąsła, okostna, ozębna i
            kość wyrostka zębodołowego. To one chronią zęby przed infekcjami i
            utrzymują je w kościach szczęki i żuchwy. Najczęstszą chorobą
            przyzębia jest paradontoza, która nieleczona może skutkować utratą
            zęba.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Leczenie periodontologiczne
          </h4>
          <p>
            W naszym gabinecie oferujemy kompleksowe i profesjonalne podejście
            do diagnozowania i leczenia chorób przyzębia. Zapewniamy najwyższą
            jakość opieki i skuteczne metody leczenia.
          </p>
          <p>
            Choroby przyzębia, takie jak zapalenie dziąseł czy paradontoza, mogą
            prowadzić do poważnych konsekwencji dla Twojego zdrowia jamy ustnej.
            Nieleczone schorzenia przyzębia mogą prowadzić do utraty zębów oraz
            wpływać na ogólny stan zdrowia organizmu. Leczenie
            periodontologiczne pozwala skutecznie zwalczać choroby przyzębia,
            przywracając zdrowie dziąseł i zapobiegając dalszym uszkodzeniom.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Parodontoza, czyli zapalenie przyzębia
          </h4>
          <p>
            Leczenie paradontozy jest tym skuteczniejsze, im szybsza jest
            wczesna diagnoza. Paradontoza objawia się poprzez wcześniejsze
            symptomy:
          </p>
          <div className="mb-20 ml-20">
            <ul>
              <li>krwawiące i zaczerwienione dziąsła</li>
              <li>nadwrażliwość zębów</li>
              <li>tworzenie się szpar między zębami</li>
              <li>przesuwanie i chwianie się zębów</li>
              <li>nieprzyjemny zapach z jamy ustnej</li>
            </ul>
          </div>
          <p>
            Jeśli zauważyłeś u siebie powyższe objawy świadczące o chorobach
            przyzębia jak najszybciej skontaktuj się z periodontologiem.
            Nieleczona paradontoza grozi nie tylko utratą zębów, ale może
            spowodować infekcję całego organizmu.
          </p>
        </div>
        <div className="blog-details-thumb-box tp_fade_bottom">
          <div className="row">
            <div className="col-xl-12">
              <div className="showcase-details-thumb">
                <Image
                  data-speed=".8"
                  src={photo_1}
                  alt="details-thumb"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Leczenie i profilaktyka chorób przyzębia
          </h4>
          <p>
            Stan zapalny pojawia się, gdy nagromadzona płytka nazębna zajmuje
            powierzchnię zęba i dostaje się pod dziąsło. W naszym gabinecie
            zajmujemy się leczeniem chorób przyzębia oraz wykonujemy zabiegi
            profilaktyczne, które w całym procesie mają ogromne znaczenie.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Jakie zabiegi wykonuje periodontolog?
          </h4>
          <p>
            Zabiegi profilaktyczne wykonywane przez periodontologa w naszym
            gabinecie:
          </p>
          <div className="mb-20 ml-20">
            <ul>
              <li>
                SKALING jest zabiegiem polegającym na usunięciu kamienia
                nazębnego naddziąsłowego i poddziąsłwego z powierzchni zębów.
              </li>
              <li>
                KIRETAŻ ZAMKNIETY to zabieg wykonywany w celu usunięcia
                zapalenia przyzębia i zapobiegania dalszemu postępowi choroby.
                Polega na oczyszczeniu korzeni zęba z resztek zainfekowanego
                bakteryjnie kamienia poddziąsłowego za pomocą kiret.
              </li>
              <li>
                SZYNOWANIE stosuje się, kiedy pojawia się ruchomość zębów. Jest
                to zabieg, w którym łączy się pojedyncze zęby w blok. Celem jest
                wzmocnienie rozchwianych zębów i dalsze zapobieganie ich
                przesuwaniu lub wyważaniu.
              </li>
            </ul>
          </div>
        </div>
      </ServiceWrapper>
    </section>
  )
}
