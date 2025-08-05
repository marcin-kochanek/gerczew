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
                  Diagnostyka stomatologiczna
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceWrapper>
        <div className="blog-details-top-text">
          <p>
            Diagnostyka stomatologiczna to podstawowy sposób wykrycia i
            precyzyjnego rozpoznania chorób jamy ustnej. Dzięki odpowiednio
            wczesnej i właściwie przeprowadzonej diagnostyce jesteśmy w stanie
            odpowiednio zdiagnozować chorobę i dobrać właściwy plan leczenia.
          </p>
        </div>
        <div className="blog-details-left-content">
          <p>
            Diagnostyka radiologiczna to nieinwazyjne badanie obrazowe
            polegające na wykonywaniu zdjęć diagnostycznych. Badania
            radiologiczne (RTG) mają szczególne znaczenie dla profesjonalnej
            diagnostyki stomatologicznej.
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
            Rodzaje badań jakie wykonujemy:
          </h4>
          <div className="mb-20 ml-20">
            <ul>
              <li>Punktowe RVG</li>
              <li>Pantomogram</li>
              <li>CBCT</li>
            </ul>
          </div>
          <p>
            Wszystkie zdjęcia wykonujemy techniką cyfrową, aby zagwarantować ich
            najwyższą jakość. Specjalistyczne oprogramowanie komputerowe daje
            możliwość wykonywania wielu pomiarów na zdjęciach. Dzięki temu
            możemy śledzić procesy chorobowe lub prawidłowe gojenie, które
            świadczy o sukcesie leczenia. Zdjęcie otrzymujemy jest natychmiast
            na monitorze komputera.W GerczewStomatolgia wykorzystujemy najnowszy
            sprzęt gwarantujący wysoką jakość badań i bezpieczeństwo naszych
            pacjentów.
          </p>
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
          <h4 className="blog-details-left-subtitle">
            RVG, czyli bezpieczne RTG
          </h4>
          <p>
            To bezpieczne badanie, podczas którego urządzenie diagnostyczne
            wykorzystuje minimalna dawkę promieniowania. Jest ona ponad 10
            krotnie niższa niż wtedy, kiedy wykonujemy tradycyjne zdjęcie
            rentgenowskie zęba na kliszy, czyli tradycyjne zdjęcie RTG. Uzyskane
            prześwietlenie zęba możemy powiększać, obracać, mierzyć w dowolny
            sposób na ekranie monitora w celu dokładnego wyjaśnienia wyniku
            badania pacjentom. Zdjęcia pojedynczych zębów wykorzystujemy m.in. w
            celu diagnostyki próchnicy, podczas leczenia endodontycznego
            (kanałowego) lub przed usunięciem zęba.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">Pantomogram</h4>
          <p>
            To badanie przeglądowe, pozwala wykryć toczące się bezobjawowo
            procesy patologiczne, nie widoczne wewnątrz jamy ustnej podczas
            badania klinicznego. Stomatologia zachowawcza, stomatologia
            estetyczna, chirurgia, protetyka, ortodoncja, a także
            periodontologia to dziedziny, dla których pantomogram stanowi
            niezbędną diagnostykę przed rozpoczęciem leczenia. Na jego podstawie
            możemy przeprowadzić konsultację i przedstawić plan leczenia już po
            pierwszej wizycie. Pantomogram pozwala oceniać np. stan zębów,
            kości, występowanie ognisk zapalnych, zęby zatrzymane (np. ósemki),
            zatoki szczękowe czy też choroby przyzębia. Dzięki zastosowaniu
            technologii cyfrowej możemy oglądać je bezpośrednio po wykonaniu na
            ekranie monitora.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">CBCT</h4>
          <p>
            CBCT (ang. Cone Beam Computed Tomography) jest nazywana również
            stożkową tomografią komputerową. Podczas tomografii CBCT lampa
            rentgenowska wykonuje obrót wokół głowy pacjenta, co pozwala na
            zebranie dużej ilości danych, umożliwiając tym samym uzyskanie
            szczegółowego obrazu badanego obszaru. Badanie CBCT charakteryzuje
            się większą dokładnością niż badanie RTG. Możliwe jest wykonanie
            rekonstrukcji (przetworzenia) skanów na obraz trójwymiarowy, co
            pozwala lekarzowi na obejrzenie badanej struktury pod dowolnym
            kątem. Dzięki zniwelowaniu nakładania się tkanek CBCT obciążona jest
            niskim ryzykiem wystąpienia artefaktów (zakłóceń), możliwe jest
            jednak ich powstanie, jeśli w trakcie skanowania pacjent się poruszy
            lub gdy w obrębie głowy będą się znajdować metalowe elementy. Obraz
            uzyskuje się w formie cyfrowej na komputerze.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            CBCT – wskazania do badania
          </h4>
          <p>
            Badanie CBCT ma zastosowanie praktycznie w każdej dziedzinie
            stomatologii. Tomografię stożkową wykonuje się w celu oceny struktur
            zębowych przed zabiegami implantacji, w diagnostyce zębów
            zatrzymanych, nadliczbowych i dodatkowych, schorzeń stawów
            skroniowo-żuchwowych i wad twarzoczaszki. CBCT jest także przydatna
            w planowaniu leczenia ortodontycznego, lecz metodą z wyboru w tej
            dziedzinie nadal jest zdjęcie pantomograficzne, ze względu na
            ekspozycję pacjenta na mniejszą dawki promieniowania. Badanie
            tomografii stożkowej wykonuje się również po urazach twarzoczaszki,
            ponieważ pozwala ono na dostrzeżenie nawet niewielkich złamań.
            Kolejnym wskazaniem do przeprowadzenia CBCT jest ocena przed
            rozpoczęciem leczenia kanałowego, ocena próchnicy czy chorób
            przyzębia, a także sytuacja, gdy zwykłe badanie RTG nie przyniesie
            wystarczających informacji do postawienia diagnozy lub zaplanowania
            leczenia.
          </p>
        </div>
      </ServiceWrapper>
    </section>
  )
}
