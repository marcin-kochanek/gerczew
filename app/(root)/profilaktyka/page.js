'use client'
import React from 'react'
import Image from 'next/image'
import photo_1 from '@/assets/img/home-01/services/profilaktyka.jpg'

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
                  Profilaktyka i estetyka
                  <br />w stomatologii
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceWrapper>
        <div className="blog-details-top-text">
          <p>
            Profilaktyka chorób zębów jest najważniejszym czynnikiem w trosce o
            zachowanie pełnego i zdrowego uzębienia pacjenta na całe życie.
            Możemy ją podzielić na profilaktykę domową (mycie zębów, nitkowanie,
            używanie płynów do płukania) oraz gabinetową. W zależności od
            rodzaju uzębienia wyróżniamy: profilaktykę dzieci i profilaktykę
            dorosłych.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">Profilaktyka dzieci</h4>
          <p>
            Profilaktyka dzieci jest częścią dziedziny jaką jest stomatologia
            dziecięca. Rodzice z dziećmi powinni zgłaszać się na pierwsze
            przeglądy stomatologiczne w momencie zauważenia pierwszych zębów
            mlecznych (+/- ok 6 miesiąca życia dziecka). Następie umawiać się na
            wizyty kontrolne wyznaczone przez lekarza prowadzącego. Pozwoli to
            na wczesne wykrycie nieprawidłowości oraz oswojenie malucha ze
            środowiskiem gabinetu. Takie działanie może w przyszłości skutkować
            brakiem dentofobii – strachu przed dentystą.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Zabiegi profilaktyczne u dzieci
          </h4>
          <p>
            Profilaktyka chorób zębów u dzieci składa się z poniższych zabiegów:
          </p>
          <div className="mb-20 ml-20">
            <ul>
              <li>
                <b>Lakowanie</b> jest to pokrycie bruzd zębów trzonowych
                mlecznych oraz trzonowych i przedtrzonowych stałych lakiem
                zawierającym fluor. Bruzdy stają się płytsze przez co łatwiej
                jest utrzymać higienę oraz zapobiec rozwojowi próchnicy.
              </li>
              <li>
                <b>Lakierowanie (fluoryzacja)</b> to „malowanie” zębów
                preparatami z dużą dawką fluoru. Poprzez fluoryzację wzmacniamy
                zęby chroniąc je przed działaniem bakterii i rozwojem próchnicy.
              </li>
            </ul>
          </div>
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
          <h4 className="blog-details-left-subtitle">Profilaktyka dorosłych</h4>
          <p>
            W ciągu kilku minut po spożyciu posiłku w jamie ustnej zaczynają
            gromadzić się bakterie. Efektem ich obecności jest tzw. „miękki
            osad” (zęby są chropowate). Nieusunięty lub niedokładnie usunięty
            przez pacjenta osad (zła technika szczotkowania, zła szczoteczka
            itp.) w ciągu kilku dni zamienia się w tzw. „twardy osad”. Tak
            tworzy się kamień, którego pacjent nie jest już w stanie
            samodzielnie usunąć. Długie zaleganie kamienia powoduje początkowo
            zaczerwienienie, ból i krwawienie dziąseł, następnie zanik kości i
            rozchwianie zębów. Takie objawy niestety często skutkują
            koniecznością usunięcia zębów.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">Profilaktyka dorosłych</h4>
          <p>
            W ciągu kilku minut po spożyciu posiłku w jamie ustnej zaczynają
            gromadzić się bakterie. Efektem ich obecności jest tzw. „miękki
            osad” (zęby są chropowate). Nieusunięty lub niedokładnie usunięty
            przez pacjenta osad (zła technika szczotkowania, zła szczoteczka
            itp.) w ciągu kilku dni zamienia się w tzw. „twardy osad”. Tak
            tworzy się kamień, którego pacjent nie jest już w stanie
            samodzielnie usunąć. Długie zaleganie kamienia powoduje początkowo
            zaczerwienienie, ból i krwawienie dziąseł, następnie zanik kości i
            rozchwianie zębów. Takie objawy niestety często skutkują
            koniecznością usunięcia zębów.
          </p>
          <p>
            Aby zapobiec powyższemu scenariuszowi u osób dorosłych najczęstszym
            działaniem profilaktycznym jest skaling z wypolerowaniem. Inne
            metody to piaskowanie.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">Skaling</h4>
          <p>
            Skaling to usunięcie kamienia nad i poddziąsłowego za pomocą skalera
            emitującego ultradźwięki. Rozbijają one kamień, którego pacjent nie
            jest w stanie usunąć samodzielnie w domu.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">Piaskowanie</h4>
          <p>
            U pacjentów, którzy spożywają duże ilości kawy, herbaty lub palą
            papierosy, często na powierzchni zębów pojawia się nieestetyczny,
            czarny osad. W celu poprawienia estetyki i przywrócenia „białego
            uśmiechu” zalecamy piaskowanie. Polega na usunięciu osadów za pomocą
            specjalnego piasku pod dużym ciśnieniem. Wbrew panującym opiniom,
            piaskowanie wykonywane pod nadzorem lekarza stomatologa lub
            higienistki stomatologicznej nie jest szkodliwe. Co więcej, jest
            jedynym sposobem na usunięcie osadów, których pacjent nie może
            usunąć poprzez szczotkowanie.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Polishing (polerowanie)
          </h4>
          <p>
            Następnie, po dokładnym oczyszczeniu zębów poprzez skaling lub
            piaskowanie, zęby są dokładnie polerowane szczoteczką i specjalną
            pastą. To działanie ma na celu wygładzenie powierzchni zęba i
            spowolnienie odkładnia się kamienia i osadów. Ta część zabiegu
            higienizacji nazywa się polishing.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">Fluoryzacja</h4>
          <p>
            Na końcu, w celu wzmocnienia oraz zmniejszenia nadwrażliwości zębów
            stosujemy fluoryzację. Fluoryzacja to inaczej pokrycie zębów
            preparatem z dawką fluoru większą niż w paście do mycia zębów.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            W naszej placówce zabieg higienizacji wykonuje dyplomowana
            higienistka lub lekarz dentysta. Oczyszczą zęby z kamienia i osadu
            oraz zabezpieczą je fluorem. Udzielą Państwu instruktażu higieny
            jamy ustnej oraz doradzą w indywidualnym doborze środków jamy
            ustnej. Zapraszamy na wizytę!
          </h4>
        </div>
      </ServiceWrapper>
    </section>
  )
}
