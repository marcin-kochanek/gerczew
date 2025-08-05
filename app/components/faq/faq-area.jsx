import FaqItem from './faq-item'
import { services_price_data } from '@/data/service-prices-data'

export default function FaqArea() {
  return (
    <div className="container fq-faq-area fq-faq-bdr pt-80 pb-140">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="fq-faq-wrapper">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {services_price_data.map((item) => (
                  <FaqItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
