import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Squere({ li, title, img, id }) {
  return (
    <Cuadro>
      <div className="cuadro">
        <Link className="link" to={`/${li}`}>
          <div id={id} className="img-container">
            <img className="image" src={img} alt="No hay imagen" />
          </div>
          <div className="p-container">
            <p className="parraf"> {title} </p>
          </div>
        </Link>
      </div>
    </Cuadro>
  );
}

const Cuadro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 16rem;
  z-index: 0;
  position: relative;
  height: 20rem;
  .cuadro {
    border-radius: 12px;
    padding: 1rem 2rem;
    background: #000010;
    position: relative;
    border: none;
    width: 100%;
    height: 100%;
    ::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        black,
        blue,
        lightblue,
        blue,
        black,
        blue,
        lightblue,
        blue
      );
      background-size: 800%;
      border-radius: 10px;
      filter: blur(8px);
      animation: glowing 20s linear infinite;
    }
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  .img-container {
    width: 12.5rem;
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    .image {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .p-container {
    width: 100%;
    height: 20%;
    margin: 0, 3rem;
    .parraf {
      color: #fff;
      font-size: 1.4rem;
    }
  }
  .link {
    text-decoration: none;
    font-style: none;
    cursor: pointer;
  }
`;
