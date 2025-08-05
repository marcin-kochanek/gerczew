import React from 'react'

const ServiceWrapper = ({ children }) => {
  return (
    <div className="container fq-faq-bdr pt-80">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="postbox__wrapper">
            <div className="row justify-content-center">
              <div className="col-xl-10">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceWrapper
