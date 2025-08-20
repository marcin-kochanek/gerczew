import React from 'react'

export default function FaqItem({ item }) {
  return (
    <div className="accordion-items tp-award-list-item">
      <h2 className="accordion-header">
        <button
          className="accordion-buttons collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${item.id}`}
          aria-expanded="true"
          aria-controls={`collapse-${item.id}`}
        >
          {item.question}
          <span className="accordion-icon"></span>
        </button>
      </h2>
      <div
        id={`collapse-${item.id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {item.services.map((service, i) => (
            <div key={i} className="row">
              <p className="col-xl-10 col-8">{service.service}</p>
              <p className="col-xl-2 col-4 text-end">
                {service.price}
                {service.price == 'bezpłatnie' ||
                service.price == 'wycena indywidualna'
                  ? ''
                  : ' zł'}
              </p>
            </div>
          ))}
          {item.additional_info && (
            <ul className="mb-20">
              <b>Dodatkowe informacje:</b>
              {item.additional_info?.map((info, i) => (
                <li className="ml-20" key={i}>
                  {info}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
