import React from 'react'
import styled from 'styled-components'
import bannerImg from  './../images/takahiro-sakamoto-qW2F8rZGEWw-unsplash.jpg'
import {HeroColor} from "./utils/Constants";
const Banner = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
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
  color: ${HeroColor};
  margin: 0 5%;
  z-index: 1;
`
const Home = () => {
    return (
        <Banner>
            <BackgroundImg/>
            <Hero>We Provide Glass.<br/> We provide transparency</Hero>
        </Banner>
    )
}
export default Home
