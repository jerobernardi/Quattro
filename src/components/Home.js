import React from 'react'
import styled, {keyframes} from 'styled-components'
import bannerImg from  './../images/takahiro-sakamoto-qW2F8rZGEWw-unsplash.jpg'
import {HeroColor, mViewport, navHeight, sViewport, title, xsViewport} from "./utils/Constants";
const fromUp = keyframes`
  from {
    transform: translatex(calc(-50vw + ${navHeight}));
    height: 0;
    color: rgba(255, 255, 255, 0)
  }
  
  50% {
    color: rgba(0, 112, 182, 0.5);
  }
  
  to {
    height: auto;
    transform: translatex(0);
  }
`
const fromDown = keyframes`
  from {
    transform: translateX(50vw);
    height: 0;
    color: rgba(255, 255, 255, 0)
  }

  50% {
    color: rgba(0, 112, 182, 0.5);
  }
  
  to {
    height: auto;
    transform: translateX(0);
  }
`
const Banner = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  position: absolute;
  background-image: url(${bannerImg});
  background-size: cover;
  filter: blur(3px)
`
const Hero = styled.h1`
  font-size: ${title};
  color: ${HeroColor};
  position: relative;
  margin: 0 5%;
  z-index: 1;
  animation: ${props => props.animation} linear 1 2s;
  transition: all ease-out .5s;
  
  @media screen and (min-width: ${xsViewport}) {
    font-size: ${title(xsViewport)};
  }

  @media screen and (min-width: ${mViewport}) {
    font-size: ${title(sViewport)}
  }
`
const Home = () => {
    return (
        <Banner>
            <BackgroundImg/>
            <Hero animation={fromUp}>We Provide Glass.</Hero>
            <Hero animation={fromDown}>We provide transparency</Hero>
        </Banner>
    )
}
export default Home
