import React from "react";
import styled from "styled-components";
import video from "../assets/videos/work.mp4";
import img from "../assets/images/picapiedra.jpg";

export default function Explab() {
  return (
    <Exp>
      {/* Titulo */}
      <span className="span">
        <h1 className="title"> Experiencia Laboral </h1>
      </span>
      {/* Expositor de Empleos */}
      <div className="div-two">
        {/* Primer trabajo */}
        <div className="text-container">
          <p className="text">
            Ademas, trabajé un mes (En temporada de ventas) en un local
            comercial dedicado a la venta de juguetes, ropa, y juegos didácticos
            llamado{" "}
            <a className="link" href="https://www.instagram.com/picapiedratuc/">
              Pica Piedra
            </a>
            . Me ocupe de la caja, atención al cliente y los cobros.
          </p>
        </div>
        <img className="img" src={img} alt="No se pudo cargar la imagen" />

        {/* Segundo trabajo */}
        <div className="text-container">
          <p className="text">
            Alejado del mundo de la programación y desarrollo, trabajé un año y
            medio en un estudio contable (Luna&Asociados), desarrollando tareas
            de: <br /> <br />
            Atención al cliente, Liquidación de sueldos y Cargas sociales,
            Liquidación de expensas, Administración de Consorcios, Liquidación
            de impuestos nacionales, provinciales y municipales, Manejo de caja,
            entre otros.
          </p>
        </div>
        <video className="vid" autoPlay muted loop src={video} alt="" />
      </div>
    </Exp>
  );
}

const Exp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  min-height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 30%,
    rgba(9, 9, 121, 1) 50%,
    rgba(5, 89, 174, 1) 90%,
    rgba(2, 0, 36, 1) 100%
  );
  .span {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;
    margin: 1rem;
    .title {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 2rem;
      font-size: 2rem;
      color: white;
      margin: 0.3rem;
    }
  }
  .div-two {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;
    .text-container {
      width: 90%;
      color: white;
      margin: 1.5rem;
      font-size: 1.5rem;
      .text {
        .link {
          color: rgba(5, 89, 174, 1);
        }
      }
    }
    .vid {
      display: flex;
      width: 100%;
      height: 20rem;
    }
    .img {
      display: flex;
      width: 60%;
      height: auto;
    }
  }
`;
