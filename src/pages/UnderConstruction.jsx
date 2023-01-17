import React from "react";
import styled from "styled-components";
import img from "../assets/renders/mantenimiento.png";

export default function UnderConstruction() {
  return <UnderConst/>;
}

const UnderConst = styled.div`
  height: 70vh;
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: $tablet-width) {
    height: 80vh;
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    display: flex;
    z-index: 9999;
    justify-content: flex-start;
    align-items: center;
  }
`;
