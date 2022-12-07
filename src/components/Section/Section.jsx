import React from "react";
import styled from "styled-components";
import Squere from "../Square/Squere";
import estudios from "../../assets/renders/estudios.png";
import estudioluna from "../../assets/renders/estudioluna.png";
import techskills from "../../assets/renders/techskills.png";
import softskills from "../../assets/renders/softskills.png";
import contacto from "../../assets/renders/contacto.png";
import idioma from "../../assets/renders/contacto.png";
import cv from "../../assets/renders/contacto.png";
import proyectos from "../../assets/renders/contacto.png";

export default function Section() {
  return (
    <Sec id="about">
      <Squere img={estudioluna} title="Experiencia Laboral" />
      <Squere img={estudios} title="Experiencia Academica" />
      <Squere img={techskills} title="Tech Skills" />
      <Squere img={softskills} title="Soft Skills" />
      <Squere img={contacto} title="Contacto" />
      <Squere img={idioma} title="Idioma" />
      <Squere img={cv} title="Curriculum" />
      <Squere img={proyectos} title="Mas Proyectos" />
      <Squere img={proyectos} title="Mas Proyectos" />
      <Squere img={proyectos} title="Mas Proyectos" />
      <Squere img={proyectos} title="Mas Proyectos" />
      <Squere img={proyectos} title="Mas Proyectos" />
    </Sec>
  );
}

const Sec = styled.div`
  width: 100%;
  height: 125rem;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 30%,
    rgba(9, 9, 121, 1) 50%,
    rgba(5, 89, 174, 1) 90%,
    rgba(0, 212, 255, 1) 100%
  );
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  align-content: center;
  align-items: center;
  justify-items: center;  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 16rem);
    grid-gap: 20px;
    grid-auto-rows: minmax(10px, auto);
    min-height: 40rem;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 0 5rem 0;
  }
  @media (min-width: 1050px) {
    grid-template-columns: repeat(4, 16rem);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 16rem);
  }
`;
