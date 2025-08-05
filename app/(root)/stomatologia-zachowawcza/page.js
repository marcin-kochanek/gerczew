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
                  Stomatologia zachowawcza
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceWrapper>
        <div className="blog-details-top-text">
          <p>
            Stomatologia zachowawcza zajmuje się zapobieganiem, wykrywaniem i
            leczeniem próchnicy zębów we wszystkich fazach jej zaawansowania. Do
            tego celu lekarze dentyści w naszej klinice używają najnowszych
            metod leczenia wspierając się najnowocześniejszymi urządzeniami
            diagnostyczno-medycznymi dostępnymi na rynku.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Stomatologia zachowawcza obejmuje:
          </h4>
          <div className="mb-20 ml-20">
            <ul>
              <li>
                badania kontrolne – regularne (dorośli co 6 m-cy, dzieci co 3
                m-ce)
              </li>
              <li>leczenie próchnicy – wypełnienia</li>
              <li>
                stomatologię estetyczną – licówki, rekonstrukcje, odbudowa na
                włóknie szklanym
              </li>
              <li>
                odtwarzanie utraconych tkanek zęba z powodu zaburzonego rozwoju
                szkliwa lub w wyniku urazu
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Stomatologia zachowawcza pozwala na:
          </h4>
          <div className="mb-20 ml-20">
            <ul>
              <li>zadbanie o piękny, zdrowy uśmiech</li>
              <li>
                estetyczne wypełnienie ubytków z wykorzystaniem trwałych
                materiałów, które nie odróżniają się od naturalnego koloru zęba
              </li>
              <li>bezbolesne wyleczenie ubytków</li>
              <li>pozbycie się nieprzyjemnego zapachu z ust</li>
              <li>
                zapobieganie chorobom dziąseł, przyzębia oraz poważniejszym
                schorzeniom ogólnym m.in. nerek, serca, płuc
              </li>
              <li>
                pozbycie się bólu zębów spowodowanego występowaniem próchnicy
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
          <h4 className="blog-details-left-subtitle">Jak leczymy próchnicę?</h4>
          <p>
            Leczenie obejmuje oczyszczenie zęba z próchnicy, a następnie
            wypełnienie ubytku materiałem. Do leczenia wykorzystujemy najwyższej
            klasy wypełnienia renomowanych producentów, gwarantując wysoką
            jakość i trwałość wykonanych wypełnień. Zapewniamy także
            znieczulenie, dzięki któremu leczenie jest bezbolesne.
          </p>
          <p>
            Naszą ofertę stomatologii zachowawczej kierujemy do osób w każdym
            wieku. Wykonujemy wypełnienia zarówno w zębach mlecznych i stałych
            materiałem odpowiednio dobranym do indywidualnej sytuacji. Dla
            dzieci mamy do dyspozycji kolorowe wypełnienia, które mogą być
            atrakcją oraz zachętą do odwiedzenia gabinetu stomatologicznego.
            Stosuje się je do wypełniania ubytków w zębach mlecznych.
          </p>
        </div>
        <div className="blog-details-left-content">
          <p>
            W Gerczew Stomatolgia pracujemy na wysokojakościowych i wysoko
            estetycznych materiałach. Zapraszamy na wizytę.
          </p>
        </div>
      </ServiceWrapper>
    </section>
  )
}
