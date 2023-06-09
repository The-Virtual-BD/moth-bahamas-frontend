import Link from "next/link";
import React from "react";

export default function HousingIslandCard({ title, url, img }) {
  return (
    <div
      className="card bg-dark text-white card-shadow border-0"
      style={{ width: 250, height: 250 }}
    >
      <img src={img} className="h-100" alt="..." />
      <div className="card-img-overlay bg-overlay">
        <div className="d-flex justify-content-center align-items-center h-100">
          <Link href={url}>
            <a className="btn btn-green">{title}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
