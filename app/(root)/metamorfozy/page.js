'use client'
import React from 'react'
import ReactCompareImage from 'react-compare-image'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins'
import useScrollSmooth from '@/hooks/use-scroll-smooth'

import { fadeAnimation, titleAnimation } from '@/utils/title-animation'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

const PortfolioShowcaseMain = () => {
  useScrollSmooth()

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation()
      titleAnimation()
    }, 100)
    return () => clearTimeout(timer)
  })
  return (
    <div className="pt-120">
      <div className="tm-hero-area tm-hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tm-hero-content">
                <span className="tm-hero-subtitle">Gerczew Stomatologia</span>
                <h4 className="tm-hero-title tp_fade_right">Metamorfozy</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container fq-faq-bdr pt-80">
        <div className="row">
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza1_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza1_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 01</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza2_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza2_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 02</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza3_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza3_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 03</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza4_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza4_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 04</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza5_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza5_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 05</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza5_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza5_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 05</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza6_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza6_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 06</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza7_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza7_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 07</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza8_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza8_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 08</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza9_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza9_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 09</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-blog-list-item">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-blog-list-content-wrap">
                  <div className="tp-blog-list-thumb anim-zoomin-wrap">
                    <div className="project-details-img-comparison">
                      <ReactCompareImage
                        leftImage="/assets/img/metamorfozy/Metamorfoza10_przed.jpg"
                        rightImage="/assets/img/metamorfozy/Metamorfoza10_po.jpg"
                        handleSize={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 tp-blog-list-container">
                <div className="tp-blog-list-content tp-flex-column">
                  <div className="tp-blog-list-title-wrap">
                    <h4 className="tp-blog-list-title-sm">
                      Metamorfoza uśmiechu <br /> metodą Bondingu
                    </h4>
                  </div>
                </div>

                <div className="tp-blog-list-meta">
                  <span>Metamorfoza 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioShowcaseMain
