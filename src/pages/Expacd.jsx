import React from "react";
import styled from "styled-components";
import coachcert from "../assets/docs/coachingcert.PNG";
import hcert from "../assets/docs/hcert.PNG";
import siglo from "../assets/renders/siglo.png";

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
            &nbsp;&nbsp;&nbsp; Actualmente soy estudiante de la Carrera de
            Contador de Ciencias económicas en la{" "}
            <a className="link" href="https://21.edu.ar/">
              Universidad Siglo21
            </a>
            Estoy cursando mi segundo año. Me encanta su sistema de aprendizaje,
            y la facilidad con la que se puede acceder a todos los materiales.
            Estoy ansioso de terminar mi carrera.
          </p>
          <img className="img" src={siglo} alt="No hay imagen" />
        </div>

        <div className="div-two">
          <p className="text">
            &nbsp;&nbsp;&nbsp;De{" "}
            <a className="link" href="https://trascendercoaching.com/">
              Trascender
            </a>{" "}
            destaco los "Hitos". Era lo que nos llevabamos de cada clase, un
            hermoso grupo de compañeros, con los cuales aprendí ademas de
            "coachear", el manejo de equipos, administración efectiva del
            tiempo, gestión de emociones, preguntas poderosas, comunicación
            asertiva, autoliderazgo y desarrollo personal, y el acompañar a
            otros a lograrlo.
          </p>
          <img className="img" src={coachcert} alt="No hay imagen" />
        </div>

        <div className="div-one">
          <p className="text">
            &nbsp;&nbsp;&nbsp;Estoy feliz de haber cursado en{" "}
            <a className="link" href="https://www.soyhenry.com/">
              Henry
            </a>
            . Adquirí muchos conocimientos nuevos, amigos, y un equipo con el
            que cuento ante cualquier circunstancia dentro del desarrollo web.
            Destaco en esta institución la calidez de los profesores, el nivel
            de contenidos, y los recursos brindados.
          </p>
          <img className="img" src={hcert} alt="No hay imagen" />
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
            mucho para aprender a trabajar en equipo. Enriqueció mi
            comunicación, y me ayudó a reafirmar mis conocimientos técnicos. Te
            dejo un video del proyecto completo asi lo veas. Entra a la app para
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
            PostgresSQL. Este proyecto fue un verdadero desafío, pase horas y
            horas buscando soluciones para todos aquellos problemas que se
            presentaban. Lo hice solo, algo que me dio confianza y me permitio a
            afianzar mis conocimientos tecnicos y todo lo aprendido durante mi
            cursado. Aquí podes ver mas sobre Countries y por{" "}
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
  .vid {
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
    .vid {
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
