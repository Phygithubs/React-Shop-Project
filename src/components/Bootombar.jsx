import React, { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiContactsBookFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function BottomBar() {
  // Track the cart count using useState
  const [cartCount, setCartCount] = useState(0);
  const [notification, setNotification] = useState(false);

  // Handle the click on Shopping Cart button
  const handleCartClick = () => {
    setNotification(true); // Show notification on click
    setTimeout(() => {
      setNotification(false); // Hide the notification after a few seconds
    }, 3000);
  };

  return (
    <div className="container-fluid bg-blue-700 py-3 d-lg-none fixed-bottom">
      <ul className="nav justify-content-between">
        <li>
          <NavLink
            to="/"
            className="d-flex flex-column align-items-center text-light text-decoration-none"
          >
            <IoHome className="fs-3" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ShopPage"
            className="d-flex flex-column align-items-center text-light text-decoration-none"
          >
            <AiFillProduct className="fs-3" />
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ContactPage"
            className="d-flex flex-column align-items-center text-light text-decoration-none"
          >
            <RiContactsBookFill className="fs-3" />
            Contact
          </NavLink>
        </li>
        <li className="position-relative">
          <NavLink
            to="/CartPage"
            className="d-flex flex-column align-items-center text-light text-decoration-none"
            onClick={handleCartClick} // Handle Cart button click
          >
            <button
              type="button"
              className="btn text-light border-0 p-0 position-relative"
            >
              <FaShoppingCart className="fs-3" />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger p-2">
                  {cartCount}
                </span>
              )}
            </button>
            <span>Cart</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ProfilePage"
            className="d-flex flex-column align-items-center text-light text-decoration-none"
          >
            <IoMdContact className="fs-3" />
            Account
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default BottomBar;
