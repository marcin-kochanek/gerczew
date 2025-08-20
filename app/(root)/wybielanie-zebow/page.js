'use client'
import React from 'react'
import Image from 'next/image'
import photo_1 from '@/assets/img/home-01/services/wybielanie-zebow.jpg'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import useScrollSmooth from '@/hooks/use-scroll-smooth'
import { ScrollSmoother, ScrollTrigger, SplitText } from '../../plugins'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

// animation
import { fadeAnimation, titleAnimation } from '@/utils/title-animation'
import ServiceWrapper from '../../components/services/service-wrapper'

export default function ServicePage() {
  useScrollSmooth()

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation()
      titleAnimation()
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
                  Wybielanie zębów
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceWrapper>
        <div className="blog-details-top-text">
          <p>
            W Gerczew Stomatologia stosujemy metodę wybielania nakładkowego oraz
            gabinetową. Metoda gabinetowa skierowana do tych, którzy chcą
            uzyskać efekt natychmiastowy. Po zabiegu wybielania należy liczyć
            się z nadwrażliwością zębów oraz koniecznością stosowania „białej
            diety” przez wyznaczony okres czasu.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Przed zabiegiem wybielania zębów
          </h4>
          <p>
            Pacjent przed zabiegiem musi mieć odpowiednio przygotowane zęby.
            Wyczyszczone z osadu, płytki nazębnej, kamienia. W tym celu zwykle
            poddaje się zabiegom higienizacji (skaling ultradźwiękowy lub
            piaskowanie, polerowanie). Należy również bezwzględnie wyleczyć duże
            ubytki próchnicowe.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Wskazania po zabiegu wybielania zębów
          </h4>
          <p>
            Przez dwie godziny po zabiegu nie należy jeść i pić niczego poza
            wodą mineralną. Aby utrwalić efekt wybielania przez dwie doby po
            zabiegu należy unikać pokarmów i napojów barwiących zęby, gdyż w tym
            okresie szkliwo zębów jest częściowo odwodnione i szczególnie
            narażone na ponowne wchłonięcie barwników. Należy unikać m. in.
            kawy, herbaty, czerwonego wina, jagód, czerwonych buraczków,
            barszczu, potraw z curry, coli i innych napojów gazowanych, soków
            owocowych. Zalecana jest tak zwana „biała dieta”, czyli pokarmy nie
            posiadające barwników. Nie przestrzeganie rygoru „białej diety” może
            zaowocować utratą efektu wybielania, gdyż częściowo odwodnione
            szkliwo wraca do stanu sprzed zabiegu intensywnie chłonąc płyny z
            jamy ustnej. Osoby palące powinny zrezygnować z palenia co najmniej
            na dwie doby po zabiegu. Przez dobę po zabiegu należy również unikać
            spożywania bardzo gorących i bardzo zimnych pokarmów i napojów ze
            względu na mogącą wystąpić przejściową nadwrażliwość pozabiegową.
          </p>
          <p>
            Drogi Pacjencie!, po wybielaniu należy liczyć się z nadwrażliwością
            zębów jaka może pojawić się po wykonanym zabiegu oraz z
            koniecznością stosowania tzw. „białej diety” przez wyznaczony czas.
            Należy unikać spożywania produktów kwaśnych oraz silnie barwionych.
            Dolegliwości bólowe mogą pojawić się szczególnie przy zmianach
            temperatury, zwłaszcza na zimno, a także podczas spożywania kwaśnych
            napojów oraz posiłków. Zazwyczaj nadwrażliwość znika maksymalnie w
            ciągu 3 dni. Środek wybielający w kontakcie z tkanką miękką , może
            wywołać białe plamy oraz czasowe podrażnienie – znika bezpowrotnie
            zazwyczaj w ciągu 2 godzin.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Ważne informacje dla pacjenta
          </h4>
          <p>
            Kolor wypełnień oraz uzupełnień protetycznych przy wybielaniu nie
            ulega zmianie i po zakończonej terapii trzeba będzie je wymienić
            (zwykle w okresie 7-14 dni po zakończonym wybielaniu).
          </p>
          <p>
            Zęby martwe nie ulegają wybielaniu. W tym przypadku może być
            konieczne zastosowanie wybielania endo- pojedynczego zęba martwego –
            można zapytać o takie wybielanie stomatologa.
          </p>
          <p>
            Zęby które uległy przebarwieniu z powodu stosowania antybiotyku
            (tetracyklina), mogą wybielać się mniej intensywnie.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Przeciwwskazania, czyli nie wybielamy gdy:
          </h4>
          <div className="mb-20 ml-20">
            <ul>
              <li>kobieta w ciąży, karmiąca piersią,</li>
              <li>
                niedawno przebyte zabiegi chirurgiczne na dziąsłach lub
                cierpiących na zapalenie dziąseł, choroby przyzębia oraz osoby
                uczulone na składniki preparatu,
              </li>
              <li>pacjenci poniżej 16 roku życia,</li>
              <li>
                duże ubytki próchnicowe, pęknięcia szkliwa, nieszczelności w
                odbudowach, odsłąnięta zębina oraz inne czynniki mogące być
                przyczyną niepowodzenia należy wyleczyć przed rozpoczęciem
                zabiegu.
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-details-thumb-box">
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
          <h4 className="blog-details-left-subtitle tp_fade_bottom">
            Zapraszamy do <b>Gerczew Stomatolgia</b> na konsultację, na której
            lekarz dokładnie wyjaśni i dobierze najlepszą dla Państwa metodę
            wybielania.
          </h4>
        </div>
      </ServiceWrapper>
    </section>
  )
}
