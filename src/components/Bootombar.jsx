import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiContactsBookFill } from "react-icons/ri";

function BootomBar() {
  return (
    <div className="container-fluid bg-blue-700 py-4 d-lg-none fixed-bottom">
      <ul className="nav justify-content-between">
        <li>
          <a href="" className="d-grid text-light text-decoration-none">
            <IoHome className="mx-auto fs-3" />
            Home
          </a>
        </li>
        <li>
          <a href="" className="d-grid text-light text-decoration-none">
            <AiFillProduct className="mx-auto fs-3" />
            Product
          </a>
        </li>
        <li>
          <a href="" className="d-grid text-light text-decoration-none">
            <RiContactsBookFill className="mx-auto fs-3" />
            Contact
          </a>
        </li>
        <li>
          <a href="" className="d-grid text-light text-decoration-none">
            <FaShoppingCart className="mx-auto fs-3" />
            Cart
          </a>
        </li>
        <li>
          <a href="" className="d-grid text-light text-decoration-none">
            <IoMdContact className="mx-auto fs-3" />
            Account
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BootomBar;






