import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

// images
import port_d_3 from '@/assets/img/metamorfozy/Metamorfoza4_po.jpg'
import port_d_4 from '@/assets/img/metamorfozy/Metamorfoza5_po.jpg'
import port_d_5 from '@/assets/img/metamorfozy/Metamorfoza6_po.jpg'
import port_d_6 from '@/assets/img/metamorfozy/Metamorfoza7_po.jpg'

const slider_images = [port_d_3, port_d_4, port_d_5, port_d_6]

const slider_setting = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 10000,
  effect: 'slide',
  breakpoints: {
    1400: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
}

export const MovingImages = () => {
  return (
    <div className="pd-visual-slider-wrap pb-40">
      <Swiper
        {...slider_setting}
        modules={[Autoplay, Navigation]}
        className="swiper-container pd-visual-slider-active"
      >
        {slider_images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div className="pd-visual-slider-thumb fix">
              <Image src={imgSrc} alt="port-img" style={{ height: 'auto' }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
