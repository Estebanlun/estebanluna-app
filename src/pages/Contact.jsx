import React from "react";
import styled from "styled-components";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";

export default function Contact() {
  return (
    <Con>
      {/* Titulo */}
      <span className="span">
        <h1 className="title"> Contacto </h1>
      </span>

      {/* Expositor de Contact */}
      <div className="div">
        {/* My Networks */}
        <div className="div-one">
          <h2> Contactame en... </h2>
          <div className="div-one-box">
            <div className="metod">
              <p className="metod-p"> Linkedin </p>
              <a
                className="metod-a"
                href="https://www.linkedin.com/in/estebanlun/"
              >
                <AiOutlineLinkedin />
              </a>
            </div>

            <div className="metod">
              <p className="metod-p"> GitHub </p>
              <a className="metod-a" href="https://github.com/Estebanlun">
                <AiOutlineGithub />
              </a>
            </div>

            <div className="metod">
              <p className="metod-p"> Instagram </p>
              <a className="metod-a" href="https://www.instagram.com/tebilc/">
                <AiOutlineInstagram />
              </a>
            </div>

            <div className="metod">
              <p className="metod-p"> Gmail </p>
              <a
                className="metod-a"
                href="https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=DmwnWrRtsVvxjPPNcJXPhSnqDjgLQfnNFwKJplvXxQRCLdmQFClLlwrqgRjdKbjgJLNcGKZlqQPv"
              >
                <CgMail />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="div-two">
          <h2> Enviame un mail </h2>
          <form
            className="formM"
            action="https://formsubmit.co/estebanlunacl@gmail.com"
            method="POST"
          >
            <div className="formM-div">
              <p className="parraf"> Nombre </p>
              <input
                className="imputs"
                placeholder="Ex: Esteban"
                name="name"
                type="text"
                required
              />
            </div>

            <div className="formM-div">
              <p className="parraf">Email</p>
              <input
                className="imputs"
                placeholder="Ex: tuemail@gmail.com"
                name="email"
                type="email"
                required
              />
            </div>

            <div className="formM-div">
              <p className="parraf"> Asunto</p>
              <input
                className="imputs"
                placeholder="Ex: Vacante de trabajo"
                name="asunto"
                type="text"
                required
              />
            </div>

            <div className="formM-div">
              <p className="parraf">Mensaje</p>
              <textarea
                className="textarea"
                placeholder="Ex: ¡Hola esteban!"
                name="text"
                type="text"
                required
              ></textarea>
            </div>

            <button className="send-button" type="submit">
              {" "}
              Enviar{" "}
            </button>
          </form>
        </div>
      </div>
    </Con>
  );
}

const Con = styled.div`
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
      font-size: 1.5rem;
    }

    .div-two {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      color: white;
      gap: 1rem;
      margin: 1.3rem;
      font-size: 1.5rem;
    }
  }

  
  .metod {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: start;
    gap: 0.1rem;
    width: 100%;
    .metod-a {
      text-decoration: none;
      color: #fff;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 5rem;
      }
    }
    .metod-p {
      font-size: 1.2rem;
    }
  }
  
  .div-one-box {
    display: grid;
    grid-template-columns: auto auto;
    width: 90%;
    grid-gap: 1rem;
    margin: auto 0;
  }

  .formM {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    .formM-div {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      width: 100%;
    }
  }

  .parraf {
    display: flex;
    text-align: start;
    align-items: flex-start;
    justify-content: start;
    width: 90%;
  }

  .imputs {
    width: 90%;
    border: 1px solid black;
    min-height: 2rem;
    border-radius: 8px;
  }

  .textarea {
    border: 1px solid black;
    min-height: 10rem;
    padding-bottom: 4.5rem;
    width: 90%;
    box-sizing: border-box;
    resize: vertical;
    border-radius: 8px;
    resize:none;
  }

  .textarea:placeholder-shown {
    font-size: 1.05rem;
  }

  .send-button{
    display:flex;
    text-align: center;
    align-items:cente;
    justify-content:center;
    width:90%;
    padding:1rem;
    border-radius:8px;
    border:1px solid black;
    background-color: rgba(2, 0, 36, 1);
    color:white;
    cursor: pointer;
  }

  /* Tablet */
  @media (min-width: 768px) {
    .span {
      .title {
        font-size: 2.5rem;
      }
    }

    .div {
      width: 100%;
      padding: 1rem;

      .div-one {
        width: 100%;
        border: 1px #fff solid;
        border-radius: 5px;
        padding: 2rem;
      }

      .div-two {
        width: 100%;
        justify-content: space-around;
        border: 1px #fff solid;
        border-radius: 5px;
        padding: 2rem;
      }
    }

    .formM {
      width:70%;
    }
  }

  @media (min-width: 1024px) {
    .formM {
      width:50%;
    }
  }
`;
