import Link from 'next/link'
import Image from 'next/image'
import map from '@/assets/img/map_2.png'

export default function ContactArea() {
  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
      <div className="container fq-faq-bdr pt-80">
        {/* <div className="cn-contactform-2-bg black-bg"> */}
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
          {/* <div className="col-xl-12">
              <div className="cn-contactform-wrap">
                <h4 className="cn-contactform-2-title">Umów wizytę</h4>
                <div className="cn-contactform-2-subtitle mb-25">
                  <p>Gerczew Stomatologia</p>
                  <p>ul. Tadeusza Boya-Żeleńskiego 25</p>
                  <p>85-980 Bydgoszcz</p>
                  <br />
                  <p>Pon-pt 10.00 – 18.00</p>
                  <p>Telefon: +48 503 647 102</p>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </div>
    // </div>
  )
}
