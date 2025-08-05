'use client'
import React from 'react'
import Image from 'next/image'
import implanty_1 from '@/assets/img/implanty/implanty.jpg'
import implanty_2 from '@/assets/img/implanty/implanty_2.jpg'

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
                <h4 className="tm-hero-title tp_fade_right">Implanty zębowe</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceWrapper>
        <div className="blog-details-top-text">
          <p>
            Leczenie implantologiczne od lat 80. XX wieku odmienia życie
            milionów pacjentów z częściowymi lub całkowitymi brakami uzębienia,
            oferując im nową jakość życia i pewność siebie.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title">
            Czym są implanty stomatologiczne?
          </h4>
          <p>
            Implanty stomatologiczne to niewielkie śruby wykonane z tytanu,
            które pełnią funkcję sztucznych korzeni utraconych zębów. Umieszcza
            się je w kości szczęki lub żuchwy podczas zabiegu chirurgicznego.
            Dzięki różnorodnym rozmiarom i długościom, implanty można idealnie
            dopasować do indywidualnych warunków anatomicznych pacjenta. Po
            zintegrowaniu się implantu z kością, wykonuje się odbudowę
            protetyczną – koronę, most lub protezę. Skuteczność tego typu
            leczenia przekracza 95%.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title">
            Jak przebiega leczenie implantologiczne?
          </h4>
          <p>
            Proces leczenia implantologicznego polega na stworzeniu trwałej,
            idealnie dopasowanej odbudowy protetycznej w miejscu utraconych
            zębów. Implanty zastępują korzenie brakujących zębów, a ich
            zastosowanie pozwala uniknąć szlifowania zdrowych zębów, co jest
            konieczne przy tradycyjnych mostach protetycznych.
          </p>
          <p>
            Podczas specjalistycznego zabiegu implant zostaje wprowadzony w
            kość, a po okresie integracji trwającym od 3 do 6 miesięcy, mocuje
            się do niego łącznik oraz koronę zęba.
          </p>
          <p>
            W przypadku całkowitego braku uzębienia istnieje możliwość odbudowy
            całego łuku zębowego, opierając się na kilku implantach – w formie
            stałego mostu lub protezy nakładkowej. Jednym z popularnych
            rozwiązań jest technika All-on-4 („wszystko na czterech”),
            umożliwiająca rekonstrukcję całej szczęki lub żuchwy na zaledwie
            czterech implantach.
          </p>
          <p>
            Współczesna implantologia, w połączeniu z technikami sterowanej
            regeneracji kości, otwiera nowe, niezwykle skuteczne możliwości
            leczenia i rehabilitacji narządu żucia, gwarantując pacjentom
            wyjątkowy komfort życia.
          </p>
        </div>
        <div className="blog-details-thumb-box tp_fade_bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="blog-details-thumb">
                <Image
                  className="w-100 mb-20"
                  src={implanty_1}
                  alt="details-thumb"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-details-thumb">
                <Image
                  className="w-100 mb-20"
                  src={implanty_2}
                  alt="details-thumb"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title">
            Dla kogo przeznaczone są implanty?
          </h4>
          <p>
            Implanty to idealne rozwiązanie dla dorosłych pacjentów, którzy
            oczekują najlepszych, wygodnych i trwałych metod uzupełniania braków
            w uzębieniu. Szczególnie skorzystają z nich osoby noszące
            tradycyjne, wyjmowane protezy, które odczuwają związany z nimi
            dyskomfort lub nie akceptują ich ze względów estetycznych czy
            psychologicznych.
          </p>
          <p>
            Utrata zębów może być wynikiem nie tylko chorób (takich jak
            próchnica czy paradontoza) lub naturalnego starzenia się organizmu,
            ale również urazów, wypadków czy uprawiania sportu. Niezależnie od
            przyczyny, implanty stomatologiczne pozwalają na przywrócenie pełnej
            funkcji żucia i estetyki uśmiechu.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title">
            Dlaczego warto zdecydować się na implanty zębowe?
          </h4>
          <div className="mb-20 ml-20">
            <ul>
              <li>
                <b>Estetyka</b>
                <br />
                Odbudowa na implantach pozwala na stworzenie perfekcyjnego,
                naturalnego uśmiechu. Kształt i kolor zębów dobierane są
                indywidualnie, zgodnie z oczekiwaniami pacjenta.
              </li>
              <li>
                <b>Zdrowie</b>
                <br />W przeciwieństwie do tradycyjnych protez, implanty nie
                powodują otarć, nadżerek czy stanów zapalnych. Dodatkowo,
                pomagają zachować strukturę kości, zapobiegając jej zanikowi.
              </li>
              <li>
                <b>Przywrócony smak</b>
                <br />
                Implanty nie zakłócają działania kubków smakowych, co pozwala na
                pełniejsze odczuwanie smaków.
              </li>
              <li>
                <b>Oszczędność</b>
                <br />
                Leczenie implantologiczne eliminuje konieczność szlifowania
                sąsiednich zdrowych zębów, wymaganego przy tradycyjnych mostach.
              </li>
              <li>
                <b>Pewność siebie</b>
                <br />
                Implanty zapewniają stabilność i bezpieczeństwo – nie wypadają i
                nie przesuwają się, co znacznie poprawia komfort podczas
                mówienia, jedzenia czy śmiechu.
              </li>
              <li>
                <b>Komfort</b>
                <br />
                Implanty są trwale zintegrowane z kością, nie trzeba ich
                zdejmować, co daje pełną swobodę w codziennym życiu – również
                podczas uprawiania sportu czy podróży.
              </li>
              <li>
                <b>Funkcjonalność</b>
                <br />
                Implanty przywracają prawidłowe funkcjonowanie narządu żucia, co
                korzystnie wpływa na zdrowie całego organizmu.
              </li>
              <li>
                <b>Trwałość</b>
                <br />
                Przy odpowiednim leczeniu, najwyższej jakości systemie
                implantologicznym i właściwej higienie jamy ustnej, implanty
                mogą służyć przez kilkadziesiąt lat, zachowując doskonałą
                estetykę i funkcjonalność.
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title">
            Standardowa procedura odbudowy zęba na implancie
          </h4>
          <div className="mb-20 ml-20">
            <ul>
              <li>
                <b>Konsultacja implantologiczna</b>
                <br />
                Pierwszym krokiem jest konsultacja z lekarzem implantologiem,
                podczas której na podstawie wywiadu, badania klinicznego oraz
                diagnostyki radiologicznej (np. zdjęcia RTG, tomografii)
                opracowywany jest indywidualny plan leczenia. Na tym etapie
                lekarz dobiera także odpowiedni rodzaj implantu, dostosowany do
                warunków anatomicznych pacjenta.
              </li>
              <li>
                <b>Okres osteointegracji</b>
                <br />
                Po implantacji następuje proces integracji implantu z kością –
                osteointegracja. W przypadku żuchwy trwa około 3 miesięcy,
                natomiast w szczęce – od 4 do 6 miesięcy. Na czas zrastania się
                implantu z kością można zastosować tymczasowe uzupełnienie
                protetyczne, aby pacjent mógł normalnie funkcjonować i
                przyzwyczaić się do nowego uzębienia.
              </li>
              <li>
                <b>Odsłonięcie implantu i założenie śruby gojącej</b>
                <br />
                Po zakończeniu osteointegracji implant zostaje odsłonięty, a
                śruba zamykająca wymieniana jest na śrubę gojącą. Zabieg
                przeprowadza się w znieczuleniu miejscowym. Celem jest
                wykształcenie szczelnego kołnierza dziąsła wokół implantu, co
                zabezpiecza go przed infekcjami.
              </li>
              <li>
                <b>Pobranie wycisku protetycznego</b>
                <br />
                Kolejny etap to pobranie wycisku jamy ustnej. Na jego podstawie
                technik w laboratorium protetycznym wykonuje precyzyjnie
                dopasowaną koronę, most lub protezę, które zostaną zamocowane na
                implantach.
              </li>
              <li>
                <b>Osadzenie pracy protetycznej</b>
                <br />
                Po zatwierdzeniu przez pacjenta kształtu, koloru i wysokości
                nowych zębów następuje ostateczne zamocowanie odbudowy
                protetycznej w jamie ustnej.
              </li>
              <li>
                <b>Wizyta kontrolna</b>
                <br />
                Po kilku dniach od osadzenia pracy protetycznej odbywa się
                wizyta kontrolna, mająca na celu sprawdzenie poprawności
                obciążenia nowej konstrukcji oraz ewentualne wprowadzenie
                korekt. Indywidualne warunki kostne pacjenta mogą wpływać na
                długość leczenia i rekonwalescencję, a w niektórych przypadkach
                możliwe jest przyspieszenie procesu odbudowy.
              </li>
              <li>
                <b>Zalecenia i opieka po zabiegu</b>
                <br />
                Pacjent powinien ściśle przestrzegać zaleceń lekarza dotyczących
                higieny jamy ustnej, diety, ograniczenia używek oraz regularnych
                wizyt kontrolnych. O implanty należy dbać równie starannie jak o
                naturalne zęby, aby zapewnić im trwałość i zdrowie na długie
                lata.
              </li>
              <li>
                <b>Trwałość</b>
                <br />
                Przy odpowiednim leczeniu, najwyższej jakości systemie
                implantologicznym i właściwej higienie jamy ustnej, implanty
                mogą służyć przez kilkadziesiąt lat, zachowując doskonałą
                estetykę i funkcjonalność.
              </li>
            </ul>
          </div>
          <p>
            Przed rozpoczęciem leczenia implantologicznego konieczne jest także
            wyleczenie wszystkich zębów oraz dokładna higienizacja jamy ustnej –
            usunięcie kamienia nazębnego i ognisk zapalnych, które mogą stanowić
            zagrożenie dla powodzenia zabiegu.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title">
            Rodzaje odbudowy zębów na implantach
          </h4>
          <p>
            <b>Odbudowa pojedynczego zęba</b>
            <br />
            To szybki i skuteczny zabieg, który pozwala na trwałe uzupełnienie
            braku zęba. Implant nie tylko przywraca funkcję żucia, ale również
            zapobiega zanikowi kości, a korona jest idealnie dopasowana do
            naturalnego uzębienia.
          </p>
          <p>
            <b>Odbudowa kilku zębów</b>
            <br />W przypadku większych braków możliwa jest odbudowa kilku zębów
            na kilku implantach – już na dwóch implantach można osadzić most
            protetyczny zastępujący 3–4 zęby.
          </p>
          <p>
            <b>Odbudowa całego łuku zębowego</b>
            <br />W przypadku bezzębia istnieje możliwość zastosowania
            wyjmowanej protezy mocowanej na 2 lub 4 implantach. Jeśli warunki
            kostne są odpowiednie, cały łuk zębowy może zostać odtworzony za
            pomocą mostu przykręcanego do 4 lub 6 implantów.
          </p>
          <p>
            <b>Odbudowa w przypadku deficytu kości</b>
            <br />
            Utrata zębów często prowadzi do zaniku kości. W takich sytuacjach
            stosuje się zabiegi odbudowy kości – wykorzystując kość własną
            pacjenta, materiały kościozastępcze lub czynniki wzrostu pozyskane z
            krwi pacjenta. Prawidłowe przygotowanie podłoża kostnego jest
            kluczowe dla sukcesu implantacji.
          </p>
        </div>
        <div className="blog-details-left-content">
          <h4 className="blog-details-left-title">
            Proces leczenia implantologicznego
          </h4>
          <p>
            Implantologia w <b>Gerczew Stomatologia</b> to starannie
            zaplanowany, inteligentny proces, w którym priorytetem są precyzja,
            jakość, komfort oraz bezpieczeństwo pacjenta. Dzięki zastosowaniu
            najnowocześniejszych metod leczenia estetycznego, łączących
            chirurgię stomatologiczną, ortodoncję, protetykę, implantologię oraz
            sterowaną regenerację kości, umożliwiamy pełną metamorfozę uzębienia
            i kreację wymarzonego uśmiechu – bez kompromisów.
          </p>
          <p>
            W codziennej praktyce korzystamy z najnowocześniejszych technologii
            diagnostycznych: tomografii komputerowej NewTom 5G do oceny ilości i
            jakości kości oraz skanera wewnątrzustnego Trios 3Shape, który
            precyzyjnie odwzorowuje anatomię jamy ustnej.
          </p>
          <p>
            Dodatkowo wykorzystujemy zaawansowane oprogramowanie do wirtualnego
            planowania rozmieszczenia implantów oraz projektowania przyszłych
            odbudów protetycznych.
          </p>
          <p>
            Każdy etap leczenia implantologicznego jest szczegółowo zaplanowany,
            uwzględniając indywidualne potrzeby pacjenta oraz anatomiczne
            warunki. Dzięki innowacyjnym technologiom oferujemy minimalnie
            inwazyjne zabiegi i możliwość wykonania natychmiastowych odbudów
            protetycznych, co znacząco skraca czas leczenia i zwiększa komfort
            Pacjenta.
          </p>
        </div>
      </ServiceWrapper>
    </section>
  )
}
