import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineViewList } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { useCart } from "../context/CartContext"; // Import useCart

function Header() {
  const { cart } = useCart(); // Access cart from context
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity

  return (
    <div>
      {/* Top Navbar */}
      <nav className="container-fluid navbar py-3">
        <div className="container">
          <div className="col-3">
            <NavLink to="/" className="font-poppins fs-3 fw-bold nav-link">
              LOGO
            </NavLink>
          </div>
          <div className="col-9 col-lg-6">
            <form action="" className="d-flex border">
              <input
                type="text"
                className="form-control rounded-0 shadow-none border-0"
                placeholder="Search for products"
              />
              <button className="btn bg-secondary-subtle border-0 rounded-0">
                <IoSearch className="text-blue-700 fs-5" />
              </button>
            </form>
          </div>
          <div className="d-none d-lg-block col-3 font-poppins">
            {isLoggedIn ? (
              <div className="d-flex align-items-center justify-content-end">
                <div
                  style={{ height: 60, width: 60 }}
                  className="rounded-circle bg-danger overflow-hidden border"
                >
                  <NavLink to="/ProfilePage">
                    <img
                      src="./image/luffy.jpg"
                      alt=""
                      className="w-100 object-fit-cover"
                    />
                  </NavLink>
                </div>
                <div className="dropdown">
                  <button
                    className="btn border-0 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User Name
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/ProfilePage" className="dropdown-item">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={toggleLogin}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <button
                  className="btn px-3 bg-blue-700 text-light rounded-0"
                  onClick={toggleLogin}
                >
                  Register
                </button>
                <button
                  className="btn px-3 border rounded-0"
                  onClick={toggleLogin}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="container-fluid navbar bg-dark p-0 font-poppins">
        <div className="container p-0">
          <div className="col-12 col-lg-3 py-3 bg-blue-700">
            <div className="dropdown">
              <button
                className="btn text-light rounded-0 border-0 bg-transparent dropdown-toggle d-flex align-items-center justify-content-between w-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <HiOutlineViewList className="fs-5 me-1" />
                  <span className="fs-5">Categories</span>
                </div>
              </button>
              <ul className="dropdown-menu w-100">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-9 d-none d-lg-flex align-items-center justify-content-between ">
            <ul className="nav">
              <li>
                <NavLink to="/" className="nav-link hover-blue text-light">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ShopPage"
                  className="nav-link hover-blue text-light"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ContactPage"
                  className="nav-link hover-blue text-light"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <NavLink
                to="/CartPage"
                className="nav-link hover-blue text-light position-relative"
              >
                {" "}
                {/* Added relative positioning */}
                <button
                  type="button"
                  className="btn text-light border position-relative me-3 rounded-0"
                >
                  <FaShoppingCart className="fs-5" />
                  {cartCount > 0 && ( // Conditionally render the count
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount}
                    </span>
                  )}
                </button>
                <span className="text-light ms-0">Shopping Cart</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
