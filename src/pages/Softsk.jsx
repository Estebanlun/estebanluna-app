import React from "react";
import styled from "styled-components";
import image from "../assets/docs/diploma.jpeg";
import image1 from "../assets/renders/adapt.png";
import image2 from "../assets/renders/softskills.png";
import image4 from "../assets/renders/calen.png";

export default function Softsk() {
  return (
    <Soft>
      {/* Titulo */}
      <span className="span">
        <h1 className="title"> Soft Skills </h1>
      </span>

      {/* Expositor de SoftSkills */}
      <div className="div">
        {/* Soft Skills 1 */}
        <div className="div-one">
          <p className="text">
            &nbsp;&nbsp;&nbsp;A lo largo de mis años estudiando y compartiendo
            en distintos grupos, y habiendo hecho una evaluación y análisis de
            mis fuertes y debilidades, puedo decir que trabajar en grupo, tanto
            en el rol de compañero, como de lider, se me dan bien. Me gusta
            mucho la materia del liderazgo, busco crecer constantemente en ese
            area, leyendo libros, haciendo cursos, viendo contenido relacionado,
            etc. <br />
            &nbsp;&nbsp;&nbsp;Tengo el deseo de algun día llegar a ser un gran
            Lider.
          </p>
          <img className="img" src={image} alt="Sin Imagen" />
        </div>

        {/* Soft Skill 2 */}
        <div className="div-two">
          <p className="text">
            &nbsp;&nbsp;&nbsp; Tambien puedo destacar mi habilidad para
            adaptarme a los cambios. Trabaje en varios rubros y en distintas
            areas, y considero que lo hice de manera correcta, me adapte
            rapidamente, y busque la eficiencia para ser mas productivo. <br />
          </p>
          <img className="img" src={image1} alt="Sin Imagen" />
        </div>

        {/* Soft Skill 3 */}
        <div className="div-one">
          <p className="text">
            «La comunicación humana es la clave del éxito
            personal y profesional» 
            <br />
            Paul J. Meyer.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp; Considero que la comunicacion es una de las
            habilidades mas dificiles de entrenar, sin embargo, es algo de lo
            que me gusta aprender e informarme, poner en practica y ver sus
            frutos.
            <br />
            &nbsp;&nbsp;&nbsp; Como Coach Ontologico, y despues de haberme
            instruido en el area por mas de dos años, considero que no soy el
            comunicador que quisiera ser, sin embargo, soy un muy buen
            comunicador, siempre busco comunicarme de manera correcta, que la
            otra parte interprete correctamente lo que quiero decir.
          </p>
          <img className="img" src={image2} alt="Sin Imagen" />
        </div>

        {/* Soft Skill 4 */}
        <div className="div-two">
          <p className="text">
            &nbsp;&nbsp;&nbsp; A pesar de todo lo hablado anteriormente,
            considero que si hablamos de habilidades blandas, mis fuertes son:
            La organización, el orden, la responsabilidad, y la correcta
            administracion del tiempo y los recursos. Soy una persona muy ordenada
            y meticulosa para la organización, tanto de mis tareas diarias, como
            de mis objetivos. Me gusta tener mi "Listita de cosas por hacer" para todo. 
            Asiganrle horarios y fechas de cumplimiento. Para esto conozco varios metodos,
            cuales utilizo todo el tiempo.
          </p>
          <img className="img" src={image4} alt="Sin Imagen" />
        </div>
      </div>
    </Soft>
  );
}

const Soft = styled.div`
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
