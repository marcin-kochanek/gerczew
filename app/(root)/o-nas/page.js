'use client'
import { gsap } from 'gsap'
import React from 'react'
import { ScrollSmoother, ScrollTrigger, SplitText } from '../../plugins'
import useScrollSmooth from '@/hooks/use-scroll-smooth'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

import pani_gerczew from '@/assets/img/about/pani-gerczew.jpg'
import klinika_1 from '@/assets/img/about/klinika_1.jpg'
import klinika_2 from '@/assets/img/about/klinika_2.jpg'
import klinika_3 from '@/assets/img/about/klinika_3.jpg'
import klinika_4 from '@/assets/img/about/klinika_4.jpg'
import klinika_5 from '@/assets/img/about/klinika_5.jpg'
import klinika_6 from '@/assets/img/about/klinika_6.jpg'

// animation
import { fadeAnimation, titleAnimation } from '@/utils/title-animation'
import Image from 'next/image'
import { QuoteThree } from '@/components/svg'

const AboutPage = () => {
  useScrollSmooth()

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation()
      titleAnimation()
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
                <h4 className="tm-hero-title tp_fade_right">O nas</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container fq-faq-bdr pt-80">
        <div className="row">
          <div className="col-xl-12">
            <div className="showcase-details-2-section-box">
              <h4 className="showcase-details-2-section-title">
                dr Weronika Gerczew
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="postbox__wrapper">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="blog-details-left-content">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          Dr Weronika Gerczew to absolwentka Uniwersytetu
                          Medycznego im. Karola Marcinkowskiego w Poznaniu. Na
                          co dzień łączy ogromną wiedzę i doświadczenie z
                          empatią i indywidualnym podejściem do każdego
                          pacjenta. Jej zawodowe pasje to przede wszystkim
                          endodoncja mikroskopowa oraz protetyka estetyczna.
                        </p>
                        <p>
                          Jako członkini Polskiego Towarzystwa Endodontycznego
                          nieustannie poszerza swoje kompetencje, uczestnicząc w
                          licznych szkoleniach i konferencjach. W leczeniu
                          kanałowym wykorzystuje mikroskop i najnowocześniejsze
                          technologie, dzięki którym może z powodzeniem
                          podejmować się nawet trudnych, złożonych przypadków —
                          zawsze z celem, by uratować naturalny ząb, jeśli tylko
                          jest to możliwe.
                        </p>
                        <p>
                          Dr Gerczew z ogromną starannością wykonuje również
                          licówki, korony i mosty, dbając nie tylko o
                          funkcjonalność, ale także o estetykę i naturalność
                          uśmiechu. Współpracuje z renomowanym laboratorium
                          protetycznym, co pozwala na tworzenie prac
                          perfekcyjnie dopasowanych do indywidualnych potrzeb
                          pacjenta.
                        </p>
                        <p>
                          Jej znakiem rozpoznawczym są także małoinwazyjne
                          metamorfozy z użyciem bondingu i metody flow injection
                          – rozwiązania, które pozwalają odmienić uśmiech w
                          zaledwie jeden dzień, bez potrzeby szlifowania zębów.
                          Dzięki świetnemu wyczuciu kształtu, koloru i proporcji
                          potrafi stworzyć uśmiech, który wygląda naturalnie i
                          po prostu “pasuje” do twarzy.
                        </p>
                        <p>
                          Zarówno w codziennej pracy, jak i w relacji z
                          pacjentami, kieruje się wrażliwością, spokojem i
                          dbałością o każdy detal. Wierzy, że piękny uśmiech to
                          coś więcej niż estetyka — to pewność siebie, która
                          zmienia codzienne życie.
                        </p>
                        <p>
                          Prywatnie jest mamą dwójki dzieci, miłośniczką sztuki,
                          designu i mody. Te pasje często przenika do jej pracy,
                          bo jak sama mówi — stomatologia estetyczna to forma
                          nowoczesnej sztuki użytkowej.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <Image
                          className="w-100 mb-20"
                          src={pani_gerczew}
                          alt="details-thumb"
                          style={{ height: 'auto' }}
                        />
                      </div>
                    </div>

                    {/* <div className="postbox__blockquote">
                      <blockquote>
                        <span className="quote-icon">
                          <QuoteThree />
                        </span>
                        <p>Projektujemy piękne uśmiechy, które zmieniają życie.</p>
                        <span className="blockquote-info">
                          Gerczew Stomatologia
                        </span>
                      </blockquote>
                    </div> */}

                    <div className="blog-details-blockquote tp_fade_bottom mt-120">
                      <blockquote>
                        <span className="quote-icon">
                          <QuoteThree />
                        </span>
                        <p>
                          Komfort, precyzja, estetyka – w trosce o Twój uśmiech.
                        </p>
                        <span className="blockquote-info">
                          Weronika Gerczew
                        </span>
                      </blockquote>
                    </div>

                    <h4 className="blog-details-left-title mt-120">
                      Jak wygląda nasza klinika?
                    </h4>
                  </div>
                </div>
                <div className="showcase-details-thumb-wrap pb-40">
                  <div className="container container-1430">
                    <div className="row gx-80">
                      <div className="col-xl-12">
                        <div className="showcase-details-thumb mb-80">
                          <Image
                            data-speed=".8"
                            src={klinika_6}
                            alt="details-thumb"
                            style={{ height: 'auto' }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="showcase-details-thumb mb-80">
                          <Image
                            data-speed=".8"
                            src={klinika_3}
                            alt="details-thumb"
                            style={{ height: 'auto' }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="showcase-details-thumb mb-80">
                          <Image
                            data-speed=".8"
                            src={klinika_2}
                            alt="details-thumb"
                            style={{ height: 'auto' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gx-80">
                      <div className="col-xl-12">
                        <div className="showcase-details-thumb mb-80">
                          <Image
                            data-speed=".8"
                            src={klinika_1}
                            alt="details-thumb"
                            style={{ height: 'auto' }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="showcase-details-thumb mb-80">
                          <Image
                            data-speed=".8"
                            src={klinika_4}
                            alt="details-thumb"
                            style={{ height: 'auto' }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="showcase-details-thumb mb-80">
                          <Image
                            data-speed=".8"
                            src={klinika_5}
                            alt="details-thumb"
                            style={{ height: 'auto' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
