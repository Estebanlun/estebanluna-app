import React from "react";
import esteban from "./../../assets/images/esteban3.jpg";
import esteban2 from "./../../assets/images/esteban6.png";

import styled from "styled-components";

export default function Banner() {
  return (
    <Span>
      <div className="background">
        <div className="divOne">
          <p className="pOne"> Esteban Luna Claraso</p>
          <p className="pTwo"> Soy Full-Stack Web Developer</p>
          <p className="pThree">
            Apasionado por el desarrollo de nuevos proyectos y aplicaciones.
            Busco mejorar en mis habilidades blandas y compartir nuevas
            experiencias en grupo. Ademas de Desarrollador, soy Coach Ontologico
            Profesional. Seguí bajando, así conoces mas de mi...
          </p>
        </div>
        <div className="divTwo">
          <div className="image"></div>
        </div>
      </div>
    </Span>
  );
}

const Span = styled.span`
  .background {
    width: 100%;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 30%,
      rgba(9, 9, 121, 1) 50%,
      rgba(5, 89, 174, 1) 65%,
      rgba(2, 33, 65, 1) 85%,
      rgba(0, 0, 0, 1) 100%
    );
    top: 0;
    height: auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-bottom:1px solid #000;
    .divOne {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      gap: 1.2rem;
      margin-top: 0.8rem;
      .pOne {
        width: 95%;
        color: white;
        font-size: 2rem;
        display: none;
        justify-content: flex-start;
      }
      .pTwo {
        width: 95%;
        color: white;
        font-size: 2rem;
      }
      .pThree {
        width: 85%;
        color: white;
        font-size: 0.8rem;
        display: flex;
      }
    }
    .divTwo {
      width: 100%;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      padding: 2rem 0;
      .image {
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        border: 1px solid;
        background-image: url(${esteban});
        background-size: 45rem;
        background-position: 40% 30%;
        background-repeat: no-repeat;
      }
    }
  }

  @media (min-width: 768px) {
    .background {
      flex-direction: row;
      gap: 2rem;
      min-height: 60vh;
      .divOne {
        gap: 1.3rem;
        width: 100%;
        .pOne {
          width: 100%;
          display: flex;
          font-size: 1.2rem;
          margin-bottom: 0;
          padding: 0 0 0 10%;
        }
        .pTwo {
          width: 100%;
          font-size: 3rem;
          margin: 0;
          padding: 0 0 0 10%;
        }
        .pThree {
          width: 100%;
          font-size: 1rem;
          margin: 0;
          padding: 0 0 0 10%;
        }
      }
      .divTwo {
        width: 60%;
        padding: 0;
        .image {
          width: 20rem;
          height: 100%;
          border-radius: 0;
          border: 0;
          background-image: url(${esteban2});
          background-size: contain;
          background-position: center bottom;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .background {
      .divTwo {
        .image {
          width: 25rem;
        }
      }
    }
  }
`;
