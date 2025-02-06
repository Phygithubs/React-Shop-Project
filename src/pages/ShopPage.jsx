import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function ShopPage() {
  const { addToCart} = useCart();
  const [hoverIndex, setHoverIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const handleMouseEnter = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  const categories = [
    { id: 1, name: "Electronics", image: "/image/cat-1.jpg", products: 100 },
    { id: 2, name: "Fashion", image: "/image/cat-2.jpg", products: 80 },
    { id: 3, name: "Home Decor", image: "/image/cat-3.jpg", products: 50 },
    { id: 4, name: "Beauty", image: "/image/cat-4.jpg", products: 120 },

    { id: 5, name: "Electronics", image: "/image/cat-2.jpg", products: 100 },
    { id: 6, name: "Fashion", image: "/image/cat-4.jpg", products: 80 },
    { id: 7, name: "Home Decor", image: "/image/cat-4.jpg", products: 50 },
    { id: 8, name: "Beauty", image: "/image/cat-1.jpg", products: 120 },

    { id: 9, name: "Electronics", image: "/image/cat-3.jpg", products: 100 },
    { id: 10, name: "Fashion", image: "/image/cat-2.jpg", products: 80 },
    { id: 11, name: "Home Decor", image: "/image/cat-1.jpg", products: 50 },
    { id: 12, name: "Beauty", image: "/image/cat-4.jpg", products: 120 },
  ];

  const products = [
    {
      id: 1,
      name: "Camera",
      price: 23.0,
      image: "/image/product-1.jpg",
      discount: 20,
      stock: 10,
      categoryId: 1,
    },
    {
      id: 2,
      name: "Blue Sweater",
      price: 99.99,
      image: "/image/product-2.jpg",
      discount: 10,
      stock: 5,
      categoryId: 2,
    },
    {
      id: 3,
      name: "Lamp",
      price: 50.0,
      image: "/image/product-3.jpg",
      discount: 15,
      stock: 0,
      categoryId: 3,
    },
    {
      id: 4,
      name: "Shoes",
      price: 89.99,
      image: "/image/product-4.jpg",
      discount: 10,
      stock: 20,
      categoryId: 3,
    },

    {
      id: 5,
      name: "Camera",
      price: 23.0,
      image: "/image/product-5.jpg",
      discount: 20,
      stock: 10,
      categoryId: 4,
    },
    {
      id: 6,
      name: "Blue Sweater",
      price: 99.99,
      image: "/image/product-6.jpg",
      discount: 10,
      stock: 5,
      categoryId: 5,
    },
    {
      id: 7,
      name: "Lamp",
      price: 50.0,
      image: "/image/product-7.jpg",
      discount: 15,
      stock: 0,
    },
    {
      id: 8,
      name: "Shoes",
      price: 89.99,
      image: "/image/product-8.jpg",
      discount: 10,
      stock: 20,
      categoryId: 6,
    },
  ];

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);

  const handleAddToCart = (product) => {
    // Assuming addToCart is a function from context that adds the product to the cart
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1, // Default to 1 quantity when the item is added
    };
    addToCart(itemToAdd); // Add the item to the cart using the context function
  };

  const filteredProducts = products
    .filter((product) => {
      if (!selectedCategory) return true;
      return (
        categories.find((cat) => cat.name === selectedCategory)?.id ===
        product.categoryId
      );
    })
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mt-5">
      {/* Promotional Banners */}
      <div className="pt-5">
        <div className="row">
          <div className="col-12 col-md-6 p-2 position-relative overflow-hidden">
            <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins">
              <p className="fs-6 m-0 save-text">Save 20%</p>
              <h4 className="fw-medium">Special Offer</h4>
              <button className="btn btn-outline-light rounded-0 px-4 mt-3">
                Shop Now
              </button>
            </div>
            <img
              style={{ filter: "brightness(65%)" }}
              src="/image/offer-1.jpg"
              alt="Special Offer"
              className="w-100 h-100 object-fit-cover transition hover-scale"
            />
          </div>
          <div className="col-12 col-md-6 p-2 position-relative overflow-hidden">
            <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins">
              <p className="fs-6 m-0 save-text">Save 20%</p>
              <h4 className="fw-medium">Special Offer</h4>
              <button className="btn btn-outline-light rounded-0 px-4 mt-3">
                Shop Now
              </button>
            </div>
            <img
              style={{ filter: "brightness(65%)" }}
              src="/image/offer-2.jpg"
              alt="Special Offer"
              className="w-100 h-100 object-fit-cover transition hover-scale"
            />
          </div>
        </div>
      </div>

      {/* Filters and Sorting Section */}
      <div className="d-flex justify-content-between align-items-center my-4">
        <div className="d-flex gap-2">
          <select
            className="form-select"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            className="form-select"
            onChange={handleSortChange}
            value={sortOption}
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search for products..."
        />
      </div>

      {/* Categories Section */}
      <div className="row align-items-center mt-5">
        <div className="col-12 col-lg-3">
          <h1 className="mb-0 fw-bold">Categories</h1>
        </div>
        <div className="col-12 col-lg-9">
          <hr style={{ border: "1px dashed grey" }} />
        </div>
      </div>

      <div className="row justify-content-center py-4">
        {categories.map((category) => (
          <div key={category.id} className="col-12 col-sm-6 col-lg-3 mb-4">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div
                className="col-4 bg-success overflow-hidden"
                style={{ height: 100 }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-100 h-100 object-fit-cover hover-scale transition"
                />
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">{category.name}</h1>
                <p className="m-0">{category.products} products</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shop Section */}
      <div className="row align-items-center mt-5">
        <div className="col-12 col-lg-3">
          <h1 className="mb-0 fw-bold">Shop</h1>
        </div>
        <div className="col-12 col-lg-9">
          <hr style={{ border: "1px dashed grey" }} />
        </div>
      </div>

      <div className="row py-4 justify-content-center">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <div className="card border-0 shadow-sm text-center h-100">
              <div className="position-relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{ objectFit: "cover", height: "250px", width: "100%" }}
                />
                {product.discount && (
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    {product.discount}% Off
                  </span>
                )}
                {hoverIndex === index && (
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                    style={{ background: "rgba(255, 255, 255, 0.8)" }}
                  >
                    <button
                      className="btn btn-dark btn-sm my-1"
                      data-bs-toggle="modal"
                      data-bs-target={`#quickViewModal${product.id}`}
                    >
                      Quick View
                    </button>
                  </div>
                )}
              </div>
              <div className="card-body">
                <NavLink
                  to="/product"
                  className="text-dark text-decoration-none fs-6 fw-semibold"
                >
                  {product.name}
                </NavLink>
                <p className="mb-1 mt-2">
                  <span className="fs-5 fw-bold text-dark">
                    ${product.price}
                  </span>
                </p>
                <div className="text-warning">
                  &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
                  <span className="text-muted fs-6">(99)</span>
                </div>
                <p className="text-muted">
                  {product.stock > 0
                    ? `In Stock (${product.stock})`
                    : "Out of Stock"}
                </p>
                <button
                  className="btn btn-primary mt-3 w-100"
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                >
                  <FaShoppingCart className="me-2" /> Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link">Previous</button>
          </li>
          <li className="page-item active">
            <button className="page-link">1</button>
          </li>
          <li className="page-item">
            <button className="page-link">2</button>
          </li>
          <li className="page-item">
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>

      {/* Quick View Modal */}
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="modal fade"
          id={`quickViewModal${product.id}`}
          tabIndex="-1"
          aria-labelledby="quickViewModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="quickViewModalLabel">
                  {product.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                />
                <p className="mt-3">
                  {product.description || "Product description goes here."}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopPage;

