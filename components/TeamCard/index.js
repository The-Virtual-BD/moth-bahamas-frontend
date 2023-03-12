import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export default function TeamCard({ name, designation, photo, email, phone }) {
  return (
    <div className={styles.card}>
      <img className={`${styles.img} card-shadow`} src={photo} alt="" />
      <div className={styles.content}>
        <h6>{name}</h6>
        <p>{designation}</p>
        <span>
          <Link href={`mailto:${email && email}`}>
            <a>
              <i className="fas fa-envelope fs-3 m-2" />
            </a>
          </Link>
          <Link href={`tel:${phone}`}>
            <a>
              <i className="fas fa-phone-alt fs-3 m-2" />
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
}
