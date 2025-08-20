import Link from 'next/link'
import Image from 'next/image'
import map from '@/assets/img/map_2.png'
import shape from '@/assets/img/inner-about/about/shape-1.png'

export default function ContactArea() {
  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
      <div className="container fq-faq-bdr pt-50">
        <div className="row">
          <div className="cn-contact-2-content col-xl-6 col-lg-6 col-md-12 col-12 mb-50 d-flex">
            <h4 className="cn-contact-2-title d-flex align-items-center">
              Gerczew <br />
              Stomatologia
            </h4>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-50">
            <div className="tp-footer-2-contact">
              <div className="tp-footer-2-contact-item">
                <div className="tp-footer-2-contact-content">
                  <a>Nr telefonu</a>
                </div>
                <h4 className="tp-contact-2-title">+48 503 647 102</h4>
              </div>
            </div>

            <div className="tp-footer-2-contact">
              <div className="tp-footer-2-contact-item">
                <div className="tp-footer-2-contact-content">
                  <a>Adres</a>
                </div>
                <h4 className="tp-contact-2-title">
                  ul. Tadeusza Boya-Żeleńskiego 25
                  <br />
                  85-980 Bydgoszcz
                </h4>
              </div>
            </div>

            <div className="tp-footer-2-contact">
              <div className="tp-footer-2-contact-item">
                <div className="tp-footer-2-contact-content">
                  <a href="https://www.google.com/maps" target="_blank"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container mb-120">
          <div className="row">
            <div className="col-xl-5">
              <div className="ab-about-category-title-box mb-40 p-relative">
                <h4 className="ab-about-category-title">
                  <span>Umów się na</span>
                  <br />
                  Wizytę
                </h4>
                <Image
                  className="ab-about-shape-1 d-block"
                  src={shape}
                  alt="shape"
                />
              </div>
            </div>
            <div className="col-xl-7">
              <div className="cn-contactform-wrap"></div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-xl-12">
            <div className="cn-contactform-2-map">
              <Link href="https://www.google.com/maps?ll=53.106959,18.023842&z=16&t=m&hl=pl&gl=PL&mapclient=embed&cid=8720690053386686069">
                <Image
                  className="w-100 mb-20"
                  src={map}
                  alt="details-map"
                  style={{ height: 'auto' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
