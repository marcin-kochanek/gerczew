import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceItem({ item }) {
  return (
    <div className="tp-team-item tp-hover-btn-wrapper marque fix mb-30">
      <div className="tp-hover-btn-item">
        <Image src={item.image} alt="team-img" width={375} height={464} />
      </div>
      <div className="tp-team-content">
        {/* <span>{item.designation}</span> */}
        <h4
          className="tp-team-title-sm"
        >
          <Link href={item.link}>{item.name}</Link>
        </h4>
      </div>
    </div>
  );
}
