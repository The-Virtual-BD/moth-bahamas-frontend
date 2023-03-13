import Image from "next/image";

export default function Carousel() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item position-relative hero-img active" data-bs-interval="2500">
          <Image
            src="/img/slides/slide-1.jpg"
            layout="fill"
            alt="..."
            objectFit="cover"
          />
        </div>
        <div className="carousel-item position-relative hero-img" data-bs-interval="2500">
          <Image
            src="/img/slides/slide-6.jpg"
            layout="fill"
            alt="..."
            objectFit="cover"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span
          className="fas fa-arrow-circle-left fs-2"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span
          className="fas fa-arrow-circle-right fs-2"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
