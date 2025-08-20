'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import { PrevIcon, NextIcon } from '../svg'

// testimonial data
const testimonial_data = [
  {
    id: 1,
    name: 'machtrans',
    designation: 'Rok temu',
    desc: `"Przysnęłam (zasnęłam) w trakcie leczenia. To jest możliwe jeśli trafi się do takiej dentystki jak dr Weronika Gerczew. Można jej zaufać ze leczenie będzie bezbolesne, solidne i dokładne. Plomby nie wypadają. Co ważne ma szacunek do zębów. Robi wszystko aby wyleczyć i uratować. Polecam dr Gerczew bo warto."`,
  },

  {
    id: 2,
    name: 'Agnieszka Rżany',
    designation: 'Rok temu',
    desc: `"Lepszej Pani Stomatolog w Bydgoszczy nie ma. Z czystym sumieniem polecam każdemu. Gabinet czysty, zadbany, a Pani Doktor jest przemiłą osobą, która bardzo dobrze zna się na swoim fachu. 10/10"`,
  },
  {
    id: 3,
    name: 'Natalia Kucharska',
    designation: 'Rok temu',
    desc: `"Polecam wszystkim Panią Dr. Weronikę. Wspaniały dentysta, człowiek z pasją i niesamowitym, ciepłym oraz profesjonalnym podejściem do pacjenta."`,
  },
  {
    id: 4,
    name: 'Dariusz Jagodka',
    designation: 'Rok temu',
    desc: `"Z usług Pani doktor korzystam od lat. Dziś pierwszy raz byłem dodatkowo z dziećmi (7 i 9lat). I choć rzadko można to powiedzieć o wyjściu do dentystki. BYŁO SUPER. Mimo, że córka miała założone dwa wypełnienia to jej komentarz był: "Tato, było super, pierwszy raz się nic nie bałam!"`,
  },
]

const slider_setting = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 1000,
  breakpoints: {
    1400: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: '.tp-testimonial-prev',
    nextEl: '.tp-testimonial-next',
  },
}

export default function Testimonials({ style_2 = true }) {
  return (
    <div className="container">
      <div className="p-relative">
        <div
          className={`tp-studio-testimonial-area tp-studio-plr white-bg fix`}
        >
          <div className="tp-studio-testimonial-title-box d-none d-md-block">
            <h4 className="tp-studio-testimonial-title">Opinie</h4>
          </div>
          <div className="tp-testimonial-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="tp-testimonial-slider-wrapper p-relative">
                    <div className="tp-testimonial-arrow-box d-none d-lg-block">
                      <button className="tp-testimonial-prev">
                        <span>
                          <PrevIcon />
                        </span>
                      </button>
                      <button className="tp-testimonial-next">
                        <span>
                          <NextIcon />
                        </span>
                      </button>
                    </div>
                    <Swiper
                      {...slider_setting}
                      modules={[Navigation]}
                      className="swiper-container tp-testimonial-slider-active fix"
                    >
                      {testimonial_data.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="tp-testimonial-item text-center">
                            <p>{item.desc}</p>
                            <span>
                              <em>{item.name}</em> - {item.designation}
                            </span>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
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
