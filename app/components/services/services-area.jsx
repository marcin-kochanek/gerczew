import services_data from '../../data/services-data'
import ServiceItem from './service-item'

export default function as() {
  return (
    <>
      <div className="tp-team-area pt-120 pb-120 fix">
        <div className="container">
          <div className="row">
            {services_data.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                <ServiceItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
