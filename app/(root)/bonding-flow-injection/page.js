'use client'
import React from 'react'
import Image from 'next/image'
import photo_1 from '@/assets/img/home-01/services/chirurgia-stomatologiczna.jpg'
import photo_2 from '@/assets/img/home-01/services/periodontologia.jpg'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import useScrollSmooth from '@/hooks/use-scroll-smooth'
import { ScrollSmoother, ScrollTrigger, SplitText } from '../../plugins'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

// animation
import { fadeAnimation, titleAnimation } from '@/utils/title-animation'
import ServiceWrapper from '../../components/services/service-wrapper'
import { QuoteThree } from '../../components/svg'

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
                  Bonding i Flow Injection
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceWrapper>
        <div className="blog-details-top-text">
          <p>
            W Gerczew Stomatologia w Bydgoszczy oferujemy dwa wyjątkowe
            rozwiązania: bonding kompozytowy oraz flow injection – techniki,
            które pozwalają na estetyczną korektę uśmiechu bez ingerencji w
            strukturę zębów. To szybkie, bezinwazyjne metody, gwarantujące
            spektakularny efekt już podczas jednej wizyty
          </p>
        </div>
        <div className="blog-details-blockquote tp_fade_bottom mt-120">
          <blockquote>
            <span className="quote-icon">
              <QuoteThree />
            </span>
            <p>
              Nowoczesna estetyka – bez szlifowania, bez bólu, bez kompromisów
            </p>
            <span className="blockquote-info">Weronika Gerczew</span>
          </blockquote>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">Bonding kompozytowy</h4>
          <p>
            Bonding to ręczne modelowanie zębów przy użyciu specjalnego
            materiału kompozytowego, stosowanego również w estetycznych
            wypełnieniach. Metoda ta pozwala:
          </p>
          <div className="mb-20 ml-20">
            <ul>
              <li>
                usunąć drobne niedoskonałości – przebarwienia, ukruszenia
                krawędzi, diastemy,
              </li>
              <li>
                nałożyć materiał „z ręki”, co daje bardzo naturalny efekt
                kształtu i koloru,
              </li>
              <li>
                przeprowadzić zabieg bez znieczulenia (chyba że pacjent
                potrzebuje),
              </li>
              <li>
                uzyskać natychmiastowy rezultat – po związaniu materiału
                światłem lampy
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Flow Injection (injection molding)
          </h4>
          <p>Flow Injection to zaawansowana, szablonowa wersja bondingu:</p>
          <div className="mb-20 ml-20">
            <ul>
              <li>
                Rozpoczyna się od wax-up&apos;u – modelu woskowego
                projektującego przyszły uśmiech,
              </li>
              <li>
                Na tej podstawie tworzy się silikonowy szablon, który idealnie
                dopasowuje się do zębów,
              </li>
              <li>
                Do indeksu wprowadzany jest flow-kompozyt, a po jego utwardzeniu
                przez szablon uzyskujemy precyzyjny, powtarzalny kształt,
              </li>
              <li>
                To metoda w pełni kontrolowana, minimalnie inwazyjna – często
                bez potrzeby szlifowania, idealna przy rekonstrukcji przedniego
                odcinka, również po leczeniu ortodontycznym.
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">Zalety obu technik</h4>
          <div className="mb-20 ml-20">
            <ul>
              <li>Brak szlifowania – pełna ochrona naturalnych zębów,</li>
              <li>Szybkość – efekt osiągany często podczas jednej wizyty,</li>
              <li>
                Naturalny efekt – dzięki materiałom najwyższej klasy, estetyka
                utrzymuje się przez lata{' '}
              </li>
              <li>
                Komfort – bezbolesność, brak stresu, możliwość wykonania zabiegu
                bez znieczulenia.
              </li>
            </ul>
          </div>
          <p>
            Oferujemy najnowsze metody leczenia co umożliwia najlepszy wybór
            leczenia dedykowany każdemu pacjentowi. Korzystają z najnowszych
            technologii wykonywania prac protetycznych.
          </p>
        </div>
        <div className="blog-details-thumb-box">
          <div className="row">
            <div className="col-md-6">
              <div className="blog-details-thumb">
                <Image
                  className="w-100 mb-20"
                  src={photo_1}
                  alt="details-thumb"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-details-thumb">
                <Image
                  className="w-100 mb-20"
                  src={photo_2}
                  alt="details-thumb"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle tp_fade_bottom">
            W <b>Gerczew Stomatolgia</b> korzystamy z najwyższej jakości
            materiałów i nowoczesnych urządzeń, by każda metamorfoza była
            wyjątkowa. Dzięki bondingowi i flow injection możesz uzyskać uśmiech
            piękny, naturalny i trwały – bez konieczności szlifowania.
          </h4>
          <h4 className="blog-details-left-subtitle tp_fade_bottom">
            Chcesz poznać najlepsze rozwiązanie dopasowane do Ciebie?
          </h4>
          <h4 className="blog-details-left-subtitle tp_fade_bottom">
            Zapraszamy na konsultację!
          </h4>
        </div>
      </ServiceWrapper>
    </section>
  )
}
