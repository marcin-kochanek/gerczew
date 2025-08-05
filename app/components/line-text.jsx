import React from 'react'
import Marquee from 'react-fast-marquee'
import { StarSquare } from './svg'

const textArray = [
  'Projektujemy piękne uśmiechy, które zmieniają życie.',
  'Projektujemy piękne uśmiechy, które zmieniają życie.',
  'Projektujemy piękne uśmiechy, które zmieniają życie.',
  'Projektujemy piękne uśmiechy, które zmieniają życie.',
  'Projektujemy piękne uśmiechy, które zmieniają życie.',
  'Projektujemy piękne uśmiechy, które zmieniają życie.',
]

export default function LineText({ cls = '' }) {
  return (
    <div className={`tp-line-text-wrap tp-line-text-wrap-2 pb-120 ${cls}`}>
      <div className="tp-line-text-slide">
        <Marquee speed={50} autoFill={true}>
          {textArray.map((text, index) => (
            <div key={index} className="tp-line-content">
              <h4 className="tp-footer-4-big-title mr-120">{text}</h4>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
