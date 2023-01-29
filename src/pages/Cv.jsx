import React from "react";
import styled from "styled-components";
import cv from "../assets/docs/cv.pdf";
import cvi from "../assets/docs/cv.PNG";

export default function Idioma() {
  return (
    <Idi>
      {/* Titulo */}
      <span className="span">
        <h1 className="title"> Curriculum </h1>
      </span>

      {/* Expositor de Idiomas */}
      <div className="div">
        {/* CvOnline */}
        <div className="div-one">
          <div className="div-one-box">
            <h2> Curriculum Vitae </h2>
            <p className="text">
              &nbsp;&nbsp;&nbsp; Puedes entrar{" "}
              <a href="https://estebanlun.github.io/">aqui</a> para ver mi CV
              Online, o también puedes descargarlo{" "}
              <a download="Esteban Luna - Curriculum" href={cv}>
                aqui
              </a>{" "}
              y guardarlo. No son los mismos, sin embargo, comparten
              información. Mi recomendación es que lo descarges (pdf) ya que es
              el mas completo de los dos.
            </p>
          </div>
          <img className="img" src={cvi} alt="Sin Imagen" />
        </div>
      </div>
    </Idi>
  );
}

const Idi = styled.div`
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
    }
  }

  .text a {
    color: rgba(5, 89, 174, 1);
    text-decoration: none;
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

    }

    .div-one-box {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 1rem;
    }

    .img {
      width: 40%;
      height: auto;
      object-fit: inherit;
    }

    .text {
      width: 75%;
      text-align: center;
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

  @media (min-width: 1420px) {
    .img {
      width:20%
    }
  }
`;
