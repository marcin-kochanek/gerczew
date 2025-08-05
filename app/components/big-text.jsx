import Link from 'next/link'
import React from 'react'

export default function BigText({ cls = '' }) {
  return (
    <div className={`sv-big-text-area pb-80 ${cls}`}>
      <div className="container container-1530">
        <div className="sv-small-text-box d-flex justify-content-between">
          <span>DIGITAL DESIGN EXPERIENCE</span>
          <span>CREATIVE STUDIO</span>
        </div>
        <div className="sv-big-text-box">
          <h4 className="sv-big-text tp_fade_right">
            <Link href="/contact">Get in Touch</Link>
          </h4>
        </div>
      </div>
    </div>
  )
}
