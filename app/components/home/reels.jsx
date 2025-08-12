'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Navigation } from 'swiper/modules'
import { NextIcon, Dots, PrevIcon } from '@/components/svg'
import Image from 'next/image'
// import TeamModal from '../modal/team-modal'
const team_data = [
  {
    id: 1,
    path: 'https://res.cloudinary.com/dtkg1nutj/video/upload/v1754986278/reels_1_i20nmp.mp4',
  },
  {
    id: 2,
    path: 'https://res.cloudinary.com/dtkg1nutj/video/upload/v1754986279/reels_2_hlvnft.mp4',
  },
  {
    id: 3,
    path: 'https://res.cloudinary.com/dtkg1nutj/video/upload/v1754986278/reels_4_cp347n.mp4',
  },
  {
    id: 4,
    path: 'https://res.cloudinary.com/dtkg1nutj/video/upload/v1754986274/reels_3_vohjea.mp4',
  },
]
const slider_setting = {
  slidesPerView: 3,
  loop: true,
  autoplay: false,
  spaceBetween: 30,
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
  navigation: {
    prevEl: '.project-details-1-prev',
    nextEl: '.project-details-1-next',
  },
}

const Reels = ({ spacing = 'pt-20' }) => {
  const [showModal, setShowModal] = React.useState(false)
  const [teamItem, setTeamItem] = React.useState(null)
  function handleTeamModal(team) {
    setShowModal(!showModal)
    setTeamItem(team)
  }
  return (
    <>
      <div className={`tp-team-area ${spacing} pb-120 fix`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-team-slider-wrapper">
                <Swiper
                  {...slider_setting}
                  modules={[Autoplay, FreeMode, Navigation]}
                  className="swiper-container tp-team-slider-active"
                >
                  {team_data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="d-flex justify-content-center marque fix mb-30">
                        <video height="640" width="auto" autoPlay muted loop>
                          <source src={item.path} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="pd-navigation-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                    <a className="project-details-1-prev">
                      <i className="fa-sharp fa-regular fa-arrow-left"></i>
                      <span>Prev</span>
                    </a>
                    <a>
                      <span>
                        <Dots />
                      </span>
                    </a>
                    <a className="project-details-1-next">
                      <span>Next</span>
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team modal */}
      {/* {teamItem && (
        <TeamModal
          setShowModal={setShowModal}
          showModal={showModal}
          teamItem={teamItem}
        />
      )} */}
      {/* team modal */}
    </>
  )
}

export default Reels
