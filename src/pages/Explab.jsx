import React from "react";
import styled from "styled-components";
import img from "../assets/renders/estudioluna.png";

export default function Explab() {
  return (
    <Exp>
      <div className="h1-container">
        <h1 className="h1"> Experiencia Laboral </h1>
      </div>
      <div className="image-container">
        <img className="img" src={img} alt="" />
      </div>
      <div className="text-contaiener">
        <p className="text">
          Alejado del mundo de la programación y desarrollo, trabajé un año y
          medio en un estudio contable (Luna&Asociados), desarrollando tareas
          como: <br />
          Atención al cliente, Liquidación de sueldos y Cargas sociales,
          Liquidación de expensas, Administración de Consorcios, Liquidación de
          impuestos nacionales, provinciales y municipales, Manejo de caja.
        </p>
      </div>
    </Exp>
  );
}

const Exp = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: center;
  align-items: center;
  color: #fff;
  gap: 1rem;
  padding: 1rem;
  .h1-container {
    width: 100%;
    .h1 {
      font-size: x-large;
    }
  }
  .image-container {
    width: 12rem;
    height: auto;
    .img {
      border-radius: 0.8rem;
      width: 100%;
      height: auto;
    }
  }
`;
