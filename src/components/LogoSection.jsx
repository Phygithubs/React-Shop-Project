import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function LogoSection() {
  const logos = [
    { id: 1, src: "/image/vendor-1.jpg", alt: "Fruity Pebbles", name: "Fruity Pebbles" },
    { id: 2, src: "/image/vendor-2.jpg", alt: "DataXChange", name: "DataXChange" },
    { id: 3, src: "/image/vendor-3.jpg", alt: "BluePhlare", name: "BluePhlare" },
    { id: 4, src: "/image/vendor-4.jpg", alt: "Fuzion Source", name: "Fuzion Source" },
    { id: 5, src: "/image/vendor-5.jpg", alt: "TechCom", name: "TechCom" },
    { id: 6, src: "/image/vendor-6.jpg", alt: "Atomized Media", name: "Atomized Media" },
    { id: 7, src: "/image/vendor-7.jpg", alt: "NextGen Tech", name: "NextGen Tech" },
    { id: 8, src: "/image/vendor-8.jpg", alt: "InnovaCorp", name: "InnovaCorp" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex + 1 < logos.length ? prevIndex + 1 : 0
      );
    }, 4000); // Faster transition: 1.5 seconds

    return () => clearInterval(interval);
  }, [logos.length]);

  // Rotate cards based on startIndex
  const visibleLogos = [
    ...logos.slice(startIndex, startIndex + itemsToShow),
    ...logos.slice(0, Math.max(0, startIndex + itemsToShow - logos.length)),
  ];

  return (
    <div className="container my-5">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center">
        {visibleLogos.map((logo) => (
          <div key={logo.id} className="col d-flex align-items-stretch">
            <div className="card logo-card border-0 shadow-sm rounded p-4 w-100 d-flex flex-column align-items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid logo-img"
                style={{ maxHeight: "100px", objectFit: "contain" }}
              />
              <p className="mt-3 fw-bold text-dark">{logo.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoSection;
