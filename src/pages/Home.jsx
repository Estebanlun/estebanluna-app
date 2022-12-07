import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Section from "../components/Section/Section";
import Secction from "../components/Section/Secction";

export default function Home() {
  return (
    <HomeContainer className='home'>
     <Banner/>
     <Section/>
     <Secction/>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  .home {
    width: 100%;
    display: flex;
  }
  .div-home{
    background-color:#020024;
    width: 100%;
    height:2rem;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    justify-content: center;
    color:#fff;
    font-size:3rem;
    padding: 2rem 0 2rem 2rem 
  }
`
