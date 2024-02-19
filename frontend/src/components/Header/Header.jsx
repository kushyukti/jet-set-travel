import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "#",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ==================== Logo================== */}
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            {/* =====================logoend ================== */}
            {/* =====================menu ================== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5 padding-2">
                {/* {nav__links.map((item, index) => {
                  <li className="nav__item" key={index}>
                    <p>
                      <NavLink to={item.path}>{item.display}</NavLink>
                    </p>
                  </li>;
                })} */}
                <li className="nav__item">
                  <a href="/home">Home</a>
                </li>
                <li className="nav__item">
                  <a href="/about">About</a>
                </li>
                <li className="nav__item">
                  <a href="/tours">Tours</a>
                </li>
              </ul>
            </div>
            {/* =====================menu end ================== */}

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>

                <span className="mobile__menu">
                  <i className="ri-menu-line" />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
