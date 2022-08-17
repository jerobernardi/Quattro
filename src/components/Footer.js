import React from 'react'
import styled from "styled-components";
import LogoImg from './../images/Logo Quattro IT.png'
import {secText, xsViewport} from "./utils/Constants";
const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 100vw;
  height: 10vh;
  padding: 0 0 5px 0;
  margin-top: 5vh;
  //background-color: rgba(91, 20, 28, 0.44);
  background-color: #990033;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px 30px 0 0;
`
const Logo = styled.img`
  width: 150px;
`
const Copyright = styled.p`
  color: white;
  font-size: ${secText};
  margin: 0;

  @media screen and (min-width: ${xsViewport}) {
    font-size: ${secText(xsViewport)};
  }
`
const Footer = () => {
    return (
        <FooterContainer>
            <Logo src={LogoImg} alt={'Quattro Distribuidora de vidrios'}/>
            <Copyright>©Copyright</Copyright>
        </FooterContainer>
    )
}
export default Footer;
