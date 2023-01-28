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
      <div className="div">
        {/* Primer trabajo */}
        <div className="div-one">
          <p className="text">
            &nbsp;&nbsp;&nbsp;Alejado del mundo de la programación y desarrollo,
            trabajo desde mayo 2020 en un estudio contable (Luna&2Asociados),
            desarrollando tareas de: <br /> <br />
            &nbsp;&nbsp;&nbsp;Atención al cliente, Liquidación de sueldos y
            Cargas sociales, Liquidación de expensas, Administración de
            Consorcios, Liquidación de impuestos nacionales, provinciales y
            municipales, Manejo de caja, entre otros. <br />
            &nbsp;&nbsp;&nbsp;En un buen ambiente laboral y con un buen equipo
            de trabajo, aprendi muchas cosas relevantes relacionadas al trabajo
            en equipo, ejcutando ordenes eficientemente, siendo honesto y
            responsable en el area que me tocaba.
          </p>
          <video
            className="vid"
            autoPlay
            muted
            loop
            src={video}
            alt="No hay video"
          />
        </div>

        {/* Segundo trabajo */}
        <div className="div-two">
          <p className="text">
            &nbsp;&nbsp;&nbsp; Ademas, trabajé durante una temporada en un local
            comercial dedicado a la venta de juguetes, ropa, y juegos
            didácticos, llamado{" "}
            <a className="link" href="https://www.instagram.com/picapiedratuc/">
              Pica Piedra
            </a>
            . Me ocupe de la caja, atención al cliente y cobros. Tuve la
            oportunidad de trabajar con un hermoso equipo, aprendiendo nuevas
            competencias como los cobros a través de tarjetas de débito, crédito
            o transferencias. Aporte en la organización y gestión de la
            finanzas. Aprendí a crear y gestionar un inventario de stock de
            juguetes utilizando excel. Y mejore mis habilidades en ventas.
          </p>
          <img className="img" src={img} alt="No se pudo cargar la imagen" />
        </div>
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

  /* Span contenedor con Titulo adentro */
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

  .div {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;

    .div-one {
      display: flex;
      flex-direction: column-reverse;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 90%;
      color: white;
      gap: 2rem;
      margin: 1.5rem;
      font-size: 1.5rem;
      .vid {
        width: 60%;
        height: 100%;
        border-radius: 10px;
      }
    }

    .div-two {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 90%;
      color: white;
      gap: 2rem;
      margin: 1.3rem;
      font-size: 1.5rem;
      .img {
        width: 60%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }

  .text {
    .link {
      color: rgba(5, 89, 174, 1);
    }
  }

  /* Tablet */
  @media (min-width: 768px) {
    .span {
      .title {
        font-size: 3rem;
      }
    }

    .div {
      width: 100%;
      padding: 1rem;

      .div-one {
        width: 100%;
        flex-direction: row-reverse;
        justify-content: space-around;
        border: 1px #fff solid;
        border-radius: 5px;
        padding: 2rem;
        .vid {
          width: 25%;
          height: auto;
        }
      }

      .div-two {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        border: 1px #fff solid;
        border-radius: 5px;
        padding: 2rem;
        .img {
          width: 25%;
          height: auto;
        }
      }
    }

    .text {
      width: 50%;
      text-align: start;
      justify-content: start;
      align-items: flex-start;
    }
  }

  @media (min-width: 1024px) {
    .span {
      .title {
        font-size: 3.5rem;
      }
    }

    .div {
      width: 90%;
      gap: 0.2rem;

      .div-one {
        height: 25rem;
        .vid {
          width: 30%;
          height: 100%;
          object-fit: contain;
        }
      }

      .div-two {
        height: 25rem;
        .img {
          width: 30%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .text {
      width: 70%;
      font-size: 1.2rem;
    }
  }
`;
