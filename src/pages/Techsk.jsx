import React from "react";
import styled from "styled-components";
import basics from "../assets/renders/basics.png";
import frontend from "../assets/renders/frontend.png";
import backend from "../assets/renders/backend.png";

export default function Techsk() {
  return (
    <Tec>
      {/* Titulo */}
      <span className="span">
        <h1 className="title"> Tech Skills </h1>
      </span>

      {/* Expositor de SoftSkills */}
      <div className="div">
        {/* Tech Skills Front-end */}
        <div className="div-one">
          <div className="div-one-box">
            <h2> Basicas </h2>
            <p className="text">
              &nbsp;&nbsp;&nbsp; Las tecnologias basicas que aprendi a manejar
              son HTML, CSS y Javascript.
            </p>
          </div>
          <img className="img" src={basics} alt="Sin Imagen" />
        </div>

        {/* Tech Skills Front-end */}
        <div className="div-one">
          <div className="div-one-box">
            <h2> Front-End </h2>
            <p className="text">
              &nbsp;&nbsp;&nbsp; Dentro del Front-end aprendi a manejar freamworks y 
              tecnologias como: React, Redux, ReactNative, Boostrap, TaiwindCSS, Sass y Less
            </p>
          </div>
          <img className="img" src={frontend} alt="Sin Imagen" />
        </div>

        {/* Tech Skills Front-end */}
        <div className="div-one">
          <div className="div-one-box">
            <h2> Back-End  y Data Base</h2>
            <p className="text">
              &nbsp;&nbsp;&nbsp; Las tecnologias que manejo dentro del backend son: NodeJs, Express y Sequelize.<br/>
              &nbsp;&nbsp;&nbsp; Y en las bases de datos se manejar PosgessSQL, y Firebase para bases no SQL (Relacionales)
            </p>
          </div>
          <img className="img" src={backend} alt="Sin Imagen" />
        </div>

        {/* Tech Skills Front-end */}
        <div className="div-one">
          <div className="div-one-box">
            <h2> Basicas </h2>
            <p className="text">
              &nbsp;&nbsp;&nbsp; Las tecnologias basicas que aprendi a manejar
              son HTML, CSS y Javascript
            </p>
          </div>
          <img className="img" src={frontend} alt="Sin Imagen" />
        </div>

         {/* Tech Skills Front-end */}
         <div className="div-one">
          <div className="div-one-box">
            <h2> Basicas </h2>
            <p className="text">
              &nbsp;&nbsp;&nbsp; Las tecnologias basicas que aprendi a manejar
              son HTML, CSS y Javascript
            </p>
          </div>
          <img className="img" src={frontend} alt="Sin Imagen" />
        </div>
        
         {/* Tech Skills Front-end */}
         <div className="div-one">
          <div className="div-one-box">
            <h2> Basicas </h2>
            <p className="text">
              &nbsp;&nbsp;&nbsp; Las tecnologias basicas que aprendi a manejar
              son HTML, CSS y Javascript
            </p>
          </div>
          <img className="img" src={frontend} alt="Sin Imagen" />
        </div>
      </div>
    </Tec>
  );
}

const Tec = styled.div`
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
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 90%;
      color: white;
      gap: 2rem;
      margin: 1.5rem;
      font-size: 1.5rem;
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
    }
  }

  .img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
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
      }

      .div-two {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        border: 1px #fff solid;
        border-radius: 5px;
        padding: 2rem;
      }
    }

    .img {
      width: 40%;
      height: auto;
      object-fit: inherit;
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
      }

      .div-two {
        height: 25rem;
      }
    }

    .img {
      width: 30%;
      height: auto;
    }
    .text {
      width: 70%;
      font-size: 1.2rem;
    }
  }
`;
