import React from 'react'
import styled from 'styled-components'

export default function UnderConstruction() {
    return (
        <UnderConst/>
    )
}

const UnderConst = styled.div `
background-image: url("../../assets/Mantenimiento-1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

@media screen and (min-width: $tablet-width) {
        background-image: url("../../assets/Mantenimiento.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
}
  
  `