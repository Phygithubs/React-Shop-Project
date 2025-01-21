import React, { useState } from "react";
import { IoSearch } from "react-icons/io5"; // Import the IoSearch icon
import { HiOutlineViewList } from "react-icons/hi"; // Import the HiOutlineViewList icon
import { FaShoppingCart } from "react-icons/fa"; // Import the FaShoppingCart icon
import { NavLink } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div>
      <nav className="container-fluid navbar py-3">
        <div className="container">
          <div className="col-3">
            <a href="#" className="font-poppins fs-3 fw-bold nav-link">
              LOGO
            </a>
          </div>
          <div className="col-9 col-lg-6">
            <form action="" className="d-flex border">
              <input
                type="text"
                name=""
                id=""
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
                  style={{
                    height: 60,
                    width: 60,
                  }}
                  className="rounded-circle bg-danger overflow-hidden border"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfT9XCRtVDbrnh-IIBOYrefMpURSstp_rLIg&s"
                    alt=""
                    className="w-100 object-fit-cover"
                  />
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
      <nav className="container-fluid navbar bg-dark p-0 font-poppins">
        <div className="container p-0">
          <div className="col-12 col-lg-3 py-3 bg-blue-700">
            <div className="dropdown">
              <button
                className="btn text-light rounded-0 border-0 bg-transparent dropdown-toggle d-flex align-items-center justify-content-between w-100"
                type="button"
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
          <div className="col-9 d-none d-lg-flex align-items-center justify-content-between">
          <ul className="nav">
              <li>
                <NavLink to={"/"} className="nav-link hover-blue text-light">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/product.jsx"} className="nav-link hover-blue text-light">
                  Shop
                </NavLink>
              </li>
              <li>
                <a href="#" className="nav-link hover-blue text-light">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn text-light border position-relative me-3 rounded-0"
              >
                <FaShoppingCart className="fs-5" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
              <span className="text-light ms-2">Shopping Cart</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
