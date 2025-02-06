import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaHeart, FaSyncAlt, FaSearch } from "react-icons/fa";

function Cart2() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleClick = (index) => {
    if (hoverIndex === index) {
      setHoverIndex(null); // Close the hover if clicked again
    } else {
      setHoverIndex(index); // Open the hover effect on click
    }
  };

  const products = [
    { name: "Camera", price: "23.00", image: "/image/product-1.jpg" },
    { name: "Blue Sweater", price: "99.99", image: "/image/product-2.jpg" },
    { name: "Lamp", price: "50.00", image: "/image/product-3.jpg" },
    { name: "Shoes", price: "89.99", image: "/image/product-4.jpg" },
    { name: "Watch", price: "99.00", image: "/image/product-5.jpg" },
    { name: "Headphones", price: "99.00", image: "/image/product-6.jpg" },
    { name: "Smartphone", price: "99.00", image: "/image/product-7.jpg" },
    { name: "Sunscream", price: "49.00", image: "/image/product-8.jpg" },
  ];

  return (
    <div className="container mt-5">
      <div className="row align-items-center p-0">
        <div className="col-12 col-lg-3">
          <h1 className="mb-0">OUR PRODUCTS</h1>
        </div>
        <div className="col-12 col-lg-9">
          <hr style={{ border: "1px dashed grey" }} />
        </div>
      </div>

      <div className="row m-0 py-4 justify-content-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            style={{ cursor: "pointer" }}
          >
            <div className="card border-0 shadow-sm p-4 text-center">
              <div className="position-relative">
                <img
                  src={product.image}
                  alt="Product"
                  className="img-fluid product-image"
                  style={{ maxHeight: "250px", objectFit: "contain" }}
                />
                {hoverIndex === index && (
                  <div className="overlay-icons d-flex justify-content-center align-items-center">
                    <button className="btn btn-light mx-1">
                      <FaShoppingCart />
                    </button>
                    <button className="btn btn-light mx-1">
                      <FaHeart />
                    </button>
                    <button className="btn btn-light mx-1">
                      <FaSyncAlt />
                    </button>
                    <button className="btn btn-light mx-1">
                      <FaSearch />
                    </button>
                  </div>
                )}
              </div>
              <div className="card-body">
                <NavLink
                  to="/product"
                  className="text-dark text-decoration-none fs-5 fw-semibold"
                >
                  {product.name}
                </NavLink>
                <p className="mt-2 mb-1">
                  <span className="fs-4 fw-bold text-dark">
                    ${product.price}
                  </span>
                  <span className="text-muted ms-2 text-decoration-line-through">
                    ${product.price}
                  </span>
                </p>
                <div className="text-warning">
                  ★ ★ ★ ★ ★ <span className="text-muted fs-6">(99)</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart2;

