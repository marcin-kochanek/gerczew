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
                <h4 className="tm-hero-title tp_fade_right">Protetyka</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceWrapper>
        <div className="blog-details-top-text">
          <p>
            Protetyka obejmuje pełen zakres zabiegów protetycznych. Ich celem
            jest odbudowa zniszczonych, utraconych lub uszkodzonych zębów,
            przywrócenie ich naturalnego wyglądu i funkcji oraz poprawienie
            estetyki.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">Leczenie protetyczne</h4>
          <p>
            Niewielu z nas zdaje sobie sprawę, jak poważne konsekwencje może za
            sobą nieść utrata chociażby jednego zęba. To nie tylko problem
            natury estetycznej, który sprawia, że czujemy się mniej atrakcyjni i
            wstydzimy się uśmiechać. Braki w uzębieniu mogą doprowadzić do wad
            zgryzu i wymowy, rozchwiania sąsiednich zębów, a nawet zapadnięcia
            się policzków. Dlatego lekarze dentyści edukują, by uzupełniać
            ubytki.
          </p>
          <p>
            Leczenie protetyczne polega na wykonaniu w laboratorium protetyki
            stomatologicznej uzupełnień, które odbudowują tkanki zębów bądź
            całkowicie je zastępują. Wśród uzupełnień protetycznych wyróżniamy
            m.in. licówki, korony, mosty, nakłady (inlay/onlay/overlay,
            endokorona),wkłady koronowo-korzeniowe, protezy szkieletowe,
            całkowite, struktury mocowane do implantów.
          </p>
          <div className="mb-20 ml-20">
            <ul>
              <li>
                <b>Licówka</b> to najbardziej estetyczna i mało inwazyjna metoda
                rekonstrukcji zębów przednich korony zęba.
              </li>
              <li>
                <b>Korona protetyczna</b> to estetyczna i funkcjonalna odbudowa
                całej korony zęba.
              </li>
              <li>
                <b>Most</b> to odbudowa protetyczna uzupełniające brakujące
                zęby, umocowana na stałe na zębach własnych żywych lub po
                leczeniu endodontycznym.
              </li>
              <li>
                <b>Nakłady koronowe</b> typu inlay /onlay/overlay/endokorona to
                rodzaj wykonywanych w laboratorium wypełnień, które dają
                możliwość odtworzenia idealnego kształtu zębów z bardzo dużymi
                ubytkami.
              </li>
              <li>
                <b>Wkłady koronowo-korzeniowe</b> to podbudowa protetyczna
                wykonywana na zachowanych korzeniach (po leczeniu
                endodontycznym=zęby martwe) w przypadku utraty korony zęba.
              </li>
              <li>
                <b>Protezy zębowe</b> to uzupełnienia protetyczne stosowane w
                wypadku rozległych braków w uzębieniu, gdy nie można zastosować
                uzupełnień stałych.Wykonujemy protezy: akrylowe, szkieletowe,
                acetalowe, overdenture- protezy których utrzymanie jest
                ulepszone dzięki wykorzystaniu korzeni własnych zębów lub
                implantów.
              </li>
              <li>
                <b>Protezy kombinowane</b> to protezy zębowe połączone z
                uzupełnieniami stałymi za pomocą zasuw, zatrzasków lub koron
                teleskopowych. Implanto- protetyka To dziedzina, która zajmuje
                się rozwiązaniami protetycznymi opartymi na implantach (implant
                zastępuje korzeń zęba). W zakres procedur wchodzą: korony,
                mosty, protezy.
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Uzupełnienia protetyczne zapewniają:
          </h4>
          <div className="mb-20 ml-20">
            <ul>
              <li>poprawę i korektę kształtu zębów</li>
              <li>
                likwidację nieestetycznych przebarwień, przekrzywień, przerw
              </li>
              <li>odbudowę startych i zniszczonych zębów</li>
              <li>uzupełnienie braków w uzębieniu</li>
              <li>
                odbudowę złamanych i ukruszonych lub nieestetycznych zębów
                przednich i bocznych
              </li>
              <li>ochronę zębów w przypadku zaciskania lub zgrzytania</li>
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
          <h4 className="blog-details-left-subtitle">
            Zabieg zakładania koron i mostów
          </h4>
          <p>
            Proces zakładania korony/mostu zaczyna się od przygotowania zęba, co
            obejmuje usunięcie zniszczonej tkanki i odpowiednie wycięcie, aby
            stworzyć miejsce na koronę. Następnie{' '}
            <a href="https://grzegorzewicz-stomatologia.pl/" content="_blank">
              stomatolog
            </a>{' '}
            pobiera wycisk zęba, który posłuży do wykonania precyzyjnie
            dopasowanej korony czy mostu w laboratorium protetycznym. Na czas
            produkcji korony może zostać umieszczona na zębie pacjenta
            tymczasowa nakładka/tymczasowy most.
          </p>
          <p>
            Po otrzymaniu gotowej korony lub mostu z laboratorium, jest ona
            trwale przytwierdzana na zębie za pomocą specjalnego kleju lub
            cementu stomatologicznego.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Główne zalety koron zębowych i mostów to:
          </h4>
          <div className="mb-20 ml-20">
            <ol>
              <li>
                <b>Poprawa estetyki:</b> korony i mosty wykonane z odpowiednich
                materiałów są niemal identyczne z naturalnymi zębami, co
                sprawia, że uzupełnienia są dyskretne i estetyczne.
              </li>
              <li>
                <b>Poprawa funkcji:</b>uszkodzone lub zniszczone zęby mogą
                powodować trudności w gryzieniu i żuciu. Korony przywracają
                pełną funkcjonalność zębom.
              </li>
              <li>
                <b>Ochrona zęba:</b> korony chronią osłabione zęby, zmniejszając
                ryzyko pęknięć i dalszych uszkodzeń.
              </li>
              <li>
                <b>Trwałość:</b> korony/mosty wykonane z odpowiednich materiałów
                są wytrzymałe i mogą wytrzymać wiele lat, jeśli są odpowiednio
                pielęgnowane.
              </li>
            </ol>
          </div>
          <p>
            Należy podkreślić, że dobór odpowiedniej protezy stomatologicznej, w
            tym koron zębowych, powinien być zawsze dokonany przez
            doświadczonego specjalistę, który przeprowadzi odpowiednią diagnozę
            i dobierze najodpowiedniejsze rozwiązanie dla danego przypadku.
          </p>
          <p>
            Jeśli zauważyłeś u siebie powyższe objawy świadczące o chorobach
            przyzębia jak najszybciej skontaktuj się z periodontologiem.
            Nieleczona paradontoza grozi nie tylko utratą zębów, ale może
            spowodować infekcję całego organizmu.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Rodzaje koron zębowych i mostów
          </h4>
          <p>
            Istnieje kilka rodzajów koron zębowych, różniących się materiałem,
            zastosowaniem i wyglądem. Oto najczęściej spotykane rodzaje koron na
            zęby:
          </p>
          <div className="mb-20 ml-20">
            <ol>
              <li>
                Korony/mosty porcelanowe: są to jedne z najpopularniejszych
                koron zębowych ze względu na ich doskonałą estetykę. Korony
                porcelanowe są wytwarzane w laboratorium dentystycznym i
                charakteryzują się naturalnym wyglądem, który doskonale imituje
                kształt i kolor naturalnego zęba. Mają zastosowanie w przednich
                i bocznych zębach.
              </li>
              <li>
                Korony/mosty metalowo-porcelanowe (ceramika na metalu): to
                rodzaj koron, które łączą zalety zarówno porcelany, jak i
                metalu. Metalowa struktura zapewnia wytrzymałość i trwałość
                korony, podczas gdy porcelana pokrywa zewnętrzną warstwę,
                nadając estetyczny wygląd. Często są używane w przypadkach,
                gdzie potrzebne jest połączenie wytrzymałości i estetyki, np. w
                przypadku bocznych zębów.
              </li>
              <li>
                Korony/mosty ceramiczne: te korony są w całości wykonane z
                ceramiki, co sprawia, że są doskonale estetyczne, bez obecności
                metalu. Są bardziej odpowiednie do stosowania w przednich
                zębach, gdzie wymagany jest naturalny wygląd.
              </li>
              <li>
                Korony/mosty z metalu (np. złota): korony z metalu, takie jak
                korony złote, są bardzo wytrzymałe i odporne na ścieranie. Mają
                zastosowanie w obszarach, gdzie estetyka nie jest priorytetem,
                na przykład w tylnej części jamy ustnej.
              </li>
              <li>
                Korony/mosty 3D/CAD-CAM: nowoczesny rozwój technologii umożliwił
                wprowadzenie koron zębowych projektowanych i wytwarzanych za
                pomocą komputerowego wspomagania projektowania (CAD) i
                komputerowego wspomagania wytwarzania (CAM). Dzięki temu korony
                te są bardzo precyzyjne, dobrze dopasowane i wyglądają
                estetycznie.
              </li>
              <li>
                Korony/mosty tymczasowe: są zazwyczaj wykonane z akrylu i służą
                do tymczasowej ochrony przygotowanego zęba przed uszkodzeniami
                do czasu osadzenia stałej korony.
              </li>
            </ol>
          </div>
          <p>
            Rodzaj korony zębowej wybiera się w zależności od indywidualnych
            potrzeb pacjenta, lokalizacji zęba, budżetu oraz innych czynników.
            Ważne jest, aby konsultować się z doświadczonym{' '}
            <a href="https://grzegorzewicz-stomatologia.pl/" content="_blank">
              dentystą
            </a>
            ,który pomoże podjąć najlepszą decyzję w danym przypadku.
          </p>
          <p>
            Jeśli zauważyłeś u siebie powyższe objawy świadczące o chorobach
            przyzębia jak najszybciej skontaktuj się z periodontologiem.
            Nieleczona paradontoza grozi nie tylko utratą zębów, ale może
            spowodować infekcję całego organizmu.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle">
            Leczenie zaburzeń stawów skroniowo-żuchwowych
          </h4>
          <p>
            Odrębnym działem protetyki jest leczenie zaburzeń stawów
            skroniowo-żuchwowych. Głównymi objawami są bóle okolicy stawu
            skroniowo-żuchwowego, trzaski, trzeszczenia przy ruchach żuchwy.
            Metodą leczenia jest szyna. Szyna relaksacyjna to nakładka na zęby,
            która ochrania zęby w nocy.
          </p>
          <p>
            Każdemu pacjentowi proponujemy indywidualny plan leczenia bazujący
            na kilku opcjach i wygodnych rozwiązaniach dla pacjenta. Plan
            leczenia może dotyczyć braku części zęba, braku całego zęba, braku
            kilku zębów lub całkowitego bezzębia. Pacjent wraz z lekarzem
            wybierają najlepszą opcję leczenia protetycznego w danym przypadku.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-subtitle tp_fade_bottom">
            W <b>Gerczew Stomatolgia</b> dobierzemy najlepszy sposób
            rekonstrukcji braków zębowych. Współpracujemy z jednym z najlepszych
            laboratoriów w Polsce co pozwala na tworzenie prac najlepiej
            dobranych pod względem estetycznym i funkcjonalnym i perfekcyjnie
            dopasowanych.
          </h4>
        </div>
      </ServiceWrapper>
    </section>
  )
}
