import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import logo from "../../assets/renders/Logo-3.png";

export default function Footer() {
  return (
    <Pie>
      <div className="pieContainer">
        <div className="derechos">
          <p>
            © 2023 Esteban-luna.
            <br />
            Todos los derechos reservados.
          </p>
        </div>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="links">
          <a href="https://www.linkedin.com/in/estebanlun/">
            <AiOutlineLinkedin />
          </a>
          <a href="https://github.com/Estebanlun">
            <AiOutlineGithub />
          </a>
          <a href="https://www.instagram.com/tebilc/">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </Pie>
  );
}

const Pie = styled.span`
    width: 100%;
    bottom: 0; 
    position: absolute;
    margin-top: 0;
  .pieContainer {
    background-color: #0b0b0d;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 3rem;
    align-items: center;
    .derechos {
      color: #fff;
      p {
        font-size: 0.7rem;
      }
    }
    .logo {
      display: none;
      width: 8rem;
    }
    .links {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .pieContainer {
      justify-content: space-around;
      gap: 6rem;
      grid-gap: 6rem;
      .logo {
        display: flex;
        width: 8rem;
      }
      .links {
        display: flex;
        gap: 0.5rem;
        a {
          text-decoration: none;
          color: #fff;
          svg {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;
