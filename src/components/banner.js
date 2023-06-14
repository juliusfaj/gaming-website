import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../images/logo.png";
import { useGlobalContext } from "../contex";

const Banner = () => {
  const { handleToggle, navToggle } = useGlobalContext();

  return (
    <section className="banner">
      <nav className="small-nav-container">
        <div className="small-nav">
          <img src={Logo} alt="lugx logo" />
          <button className="toggle-btn" onClick={handleToggle}>
            <FaBars />
          </button>
        </div>

        <div
          className={
            navToggle
              ? "small-nav-links  show-small-nav-links"
              : "small-nav-links "
          }
        >
          <div>
            <Link to="/">home</Link>
          </div>
          <div>
            <Link to="/shop">our shop</Link>
          </div>
          <div>
            <Link to="/details">product details</Link>
          </div>
          <div>
            <Link to="/contact">contact us</Link>
          </div>
          <div>
            <Link to="/signin">sign in</Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Banner;
