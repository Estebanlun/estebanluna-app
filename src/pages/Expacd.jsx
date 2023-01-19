import React from "react";
import styled from "styled-components";
import coachcert from "../assets/docs/coachingcert.PNG";
import hcert from "../assets/docs/hcert.PNG";

export default function Explab() {
  return (
    <Exp>
      {/* Titulo */}
      <span className="span">
        <h2 className="title"> Experiencia Académica </h2>
      </span>

      {/* Expositor de Experiencia */}
      <div className="div">
        {/* Primer Proyecto */}
        <div className="div-one">
          <p className="text">
            &nbsp;&nbsp;&nbsp;Estoy feliz de haber cursado en{" "}
            <a className="link" href="https://www.soyhenry.com/">
              Henry
            </a>
            . Aprendi demasiadas cosas, quede super conforme con las
            herramientas que me dieron, con el equipo de trabajo y amigos que me
            brindo, con la relación que forme con ellos. La atención de los
            profesores, la buena enseñanza, y la cantidad de recursos que me
            dieron. El tiempo en el que estaba establecido el curso me parecio
            el indicado para mi forma de aprendizaje.
          </p>
          <img className="img" src={hcert} alt="No hay imagen" />
        </div>

        <div className="div-two">
          <p className="text">
            &nbsp;&nbsp;&nbsp;Con respecto a mis estudios en{" "}
            <a className="link" href="https://trascendercoaching.com/">
              Trascender
            </a>
            . En todas las clases se podia aprender algo nuevo, le deciamos
            "Hitos". Era lo que nos llevabamos de esa clase, Tuve la
            oportuunidad de llevarme muchos hitos durante dos años. Con un
            hermoso grupo de compañeros, en el cual aprendi a "coachear"
            distintas situaciones, aprendi cosas como: El manejo de grupos, la
            administracion del tiempo, manejo de emociones, como elaborar
            preguntas poderosas, como comunicarme mejor, como crecer mejorar
            personalmente, y ayudar a otros a logralo tambien.
          </p>
          <img className="img" src={coachcert} alt="No hay imagen" />
        </div>
      </div>

      {/* Titulo */}
      <span className="span">
        <h2 className="title"> Proyectos Académicos </h2>
      </span>

      {/* Expositor de Empleos */}
      <div className="div">
        {/* Primer Proyecto */}
        <div className="div-one">
          <p className="text">
            &nbsp;&nbsp;&nbsp;SPA (Single Page Application) sobre venta de
            vuelos reales. Desarrollado con ReactJS en el Front-end, con NodeJS
            y Express en el Back-end y con una base de datos no SQL de Firebase.
            En el mismo, trabaje principalmente en el Front-end. Utilizamos Sass
            y otras herramientas para darle estilos. Este proyecto me sirvio
            mucho para aprender a trabajar en equipo. Enrriquecio mi
            comunicacion, y me ayudo a reafirmar mis conocimientos tecnicos. Te
            dejo un video del proyecto competo asi lo veas. Entra a la app para
            ver mas sobre{" "}
            <a className="link" href="https://dev-sky.vercel.app/">
              Dev-Sky
            </a>
            . Aquí te dejo el{" "}
            <a
              className="link"
              href="https://github.com/Grupo2PF/Proyecto-Final"
            >
              Repositorio
            </a>{" "}
            en caso de que quieras ver su codigo.
          </p>
          <iframe
            className="vid"
            src="https://www.youtube.com/embed/LC3quU6V_ao"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {/* Segundo Proyecto */}
        <div className="div-two">
          <p className="text">
            &nbsp;&nbsp;&nbsp;SPA (Single Page Application) sobre paises.
            Desarrollada con ReactJS, Redux en el Front-end, con NodeJS, Express
            y Sequalize en el Back-end. Y para la base de Datos utilice
            PostgresSQL. En este proyecto aprendi mucho, ya que pase horas y
            horas buscando soluciones para todos aquellos problemas que se
            presentaban. Lo hice solo, algo que me dio confianza en mi mismo y
            me permitio a afianzar mis tech skills y todo lo que aprendi durante
            mi cursado. Aqui podes ver mas sobre Countries y por{" "}
            <a
              className="link"
              href="https://github.com/Estebanlun/PI-Estebanlun"
            >
              aquí
            </a>{" "}
            te dejo el Repositorio en caso de que quieras verlo.
          </p>
          <iframe
            className="vid"
            src="https://www.youtube.com/embed/3FAH4ZKn-Kw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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
  .vid{
    width: 100%;
    height: 100%;
  }

  .img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
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
    .vid{
      width: 50%;
      height: 100%;
    }

    .img {
      width: 50%;
      height: auto;
    }
    .text {
      .link {
        font-size: 1rem;
      }
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
      width: 50%;
      height: 100%;
      object-fit: contain;
    }

    .text {
      width: 70%;
      font-size: 1.2rem;
      .link {
        font-size: 1.3rem;
      }
    }
  }
`;
