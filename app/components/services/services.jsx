import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UpArrow } from '../svg'

// images
import team_1 from '@/assets/img/home-04/brand/overly.png'
import team_2 from '@/assets/img/home-04/brand/overly.png'
import team_3 from '@/assets/img/home-04/brand/overly.png'

import sv_1 from '@/assets/img/icons/480px/tooth-cracked_hires.png'
import sv_2 from '@/assets/img/icons/480px/dental-implant_hires.png'
import sv_3 from '@/assets/img/icons/480px/c-arm_hires.png'
import sv_4 from '@/assets/img/icons/480px/tooth-caries_hires.png'
import sv_5 from '@/assets/img/icons/480px/dental-filling_hires.png'
import sv_6 from '@/assets/img/icons/480px/dental-machine_hires.png'
import sv_7 from '@/assets/img/icons/480px/protective-glasses_hires.png'
import sv_8 from '@/assets/img/icons/480px/dental-mirror_hires.png'
import sv_9 from '@/assets/img/icons/480px/smiling-mouth_hires.png'
import sv_10 from '@/assets/img/icons/480px/dental-crown_hires.png'

// team data
const services_data = [
  {
    id: 1,
    link: '/protetyka',
    icon: sv_1,
    name: 'Protetyka',
    description:
      'Protetyka obejmuje pełen zakres zabiegów protetycznych. Ich celem jest odbudowa zniszczonych, utraconych lub uszkodzonych zębów, przywrócenie ich naturalnego wyglądu i funkcji oraz poprawienie estetyki.',
  },
  {
    id: 2,
    link: '/leczenie-kanalowe',
    icon: sv_2,
    name: 'Implantologia',
    description:
      'Leczenie implantologiczne od lat 80. XX wieku odmienia życie milionów pacjentów z częściowymi lub całkowitymi brakami uzębienia, oferując im nową jakość życia i pewność siebie.',
  },
  {
    id: 3,
    link: '/endodoncja',
    icon: sv_3,
    name: 'Endodoncja',
    description:
      'Endodoncja, czyli leczenie kanałowe, to metoda leczenia chorób miazgi zęba. Przyczyny tego stanu mogą być różne: głęboka próchnica, uszkodzenia termiczne, przeciążenia zgryzowe, pęknięcia.',
  },
  {
    id: 4,
    link: '/stomatologia-zachowawcza',
    icon: sv_4,
    name: 'Stomatologia zachowawcza',
    description:
      'Stomatologia zachowawcza zajmuje się zapobieganiem, wykrywaniem i leczeniem próchnicy zębów we wszystkich fazach jej zaawansowania.',
  },
  {
    id: 5,
    link: '/bonding-flow-injection',
    icon: sv_5,
    name: 'Bonding zębów',
    description:
      'Bonding zębów to metoda nieinwazyjnej korekty zębów za pomocą specjalnego materiału kompozytowego, który stosujemy przy drobnych zmianach estetycznych.',
  },
  {
    id: 6,
    link: '/periodontologia',
    icon: sv_6,
    name: 'Periodontologia',
    description:
      'Periodontolog jest specjalistą zajmującym się leczeniem chorób przyzębia oraz błony śluzowej jamy ustnej.',
  },
  {
    id: 7,
    link: '/diagnostyka-stomatologiczna',
    icon: sv_7,
    name: 'Diagnostyka stomatologiczna',
    description:
      'Diagnostyka stomatologiczna to podstawowy sposób wykrycia i precyzyjnego rozpoznania chorób jamy ustnej.',
  },
  {
    id: 8,
    link: '/profilaktyka',
    icon: sv_8,
    name: 'Profilaktyka',
    description:
      'Profilaktyka chorób zębów jest najważniejszym czynnikiem w trosce o zachowanie pełnego i zdrowego uzębienia pacjenta na całe życie.',
  },
  {
    id: 9,
    link: '/wybielanie-zebow',
    icon: sv_9,
    name: 'Wybielanie zębów',
    description:
      'W Gerczew Stomatologia stosujemy metodę wybielania nakładkowego oraz gabinetową. Metoda gabinetowa skierowana do tych, którzy chcą uzyskać efekt natychmiastowy.',
  },
  {
    id: 10,
    link: '/metamorfoza-w-jeden-dzien',
    icon: sv_10,
    name: 'Metamorfoza w jeden dzień',
    description:
      'Metamorfoza uśmiechu, którą można wykonać nawet podczas jednej wizyty – dzięki nowoczesnemu, wysokoestetycznemu bondingowi kompozytowemu.',
  },
]

let servicesNumber

export default function Services({ isHomePage = false }) {
  servicesNumber = isHomePage ? 4 : services_data.length

  return (
    <>
      {isHomePage && (
        <div className="tp-team-4-area">
          <div className="container">
            <div className="tp-service-4-title-wrap">
              <div className="row align-items-end">
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="tp-service-4-title-box tp_fade_bottom">
                    <h4 className="tp-service-4-title">Poznaj nasze usługi</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`${isHomePage ? 'container-lg' : 'container'}`}>
        <div
          className={`${
            isHomePage ? 'g-5' : 'g-4'
          } row justify-content-stretch`}
          // style={{ justifyContent: 'stretch' }}
        >
          {services_data.slice(0, servicesNumber).map((item) => (
            <div
              key={item.id}
              className={`${
                isHomePage ? 'col-xl-6' : 'col-xl-4'
              } col-lg-6 col-md-6`}
            >
              <Link href={item.link}>
                <div
                  className="tp-service-4-item"
                  style={{
                    backgroundImage:
                      'url(/assets/img/home-04/brand/overly.png)',
                  }}
                >
                  <div className="tp-service-4-card"></div>

                  <div className="tp-service-4-content">
                    <div className="tp-service-4-shape">
                      <div className="tp-service-4-icon">
                        <Image
                          src={item.icon}
                          alt="icon"
                          style={{ height: '70px', width: '70px' }}
                        />
                      </div>
                      <span className="tp-service-4-title-sm">
                        <h2>{item.name}</h2>
                      </span>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {isHomePage && (
          <div className="row justify-content-end mt-30">
            <div className="col-auto">
              <Link className="tp-btn-black-square" href="/uslugi">
                Zobacz wszystkie
                <span>
                  <UpArrow />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
