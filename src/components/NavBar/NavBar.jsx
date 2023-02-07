import { React, useState } from "react";
import logo from "./../../assets/renders/Logo-4.png";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <Link className="linkcito" to="/">
          <img className="div" src={logo} alt="Error" />
        </Link>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a
            onClick={clicked ? handleClick : !clicked ? "" : handleClick}
            href="/#about"
          >
            {" "}
            Sobre mi{" "}
          </a>
          <a
            onClick={clicked ? handleClick : !clicked ? "" : handleClick}
            href="https://esteban-luna-projects.web.app/"
          >
            {" "}
            Proyectos{" "}
          </a>
          <a
            onClick={clicked ? handleClick : !clicked ? "" : handleClick}
            href="/contact"
          >
            {" "}
            Contacto{" "}
          </a>
          
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .div {
    width: 60%;
    display: flex;
    align-items: flex-start;
    padding:0.5rem;
    margin: 0;
    @media (min-width: 768px) {
      width: 40%;
    }
  }
  .linkcito {
    color: white;
    text-decoration: none;
    width: 60%;
    padding: 0 0 0 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    text-align: center;
    transition: all 1.0s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
      text-decoration: none;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      width: 100%;
      display: flex;
      gap: 1.2rem;
      justify-content: flex-end;
      padding: 0 3rem 0 0;
      a {
        font-size: 1.4rem;
        color: white;
        display: flex;
        justify-content: center;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 1%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 3;

    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #000;
  position: absolute;
  top: -4000px;
  left: -4000px;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 1.0s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
`;
