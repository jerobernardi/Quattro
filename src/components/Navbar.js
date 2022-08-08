import React, {useState} from 'react'
import styled, {keyframes} from "styled-components";
import BarsSVG from './../images/bars-solid.svg'
import LogoMobilePNG from './../images/Logo Quattro IT.png'
import LogoPNG from './../images/Logo Quattro Vidrios IT.png'
import {HeroColor, ITred, navHeight, priText, smallViewport} from "./utils/Constants";
import useMobile from "../hooks/useMobile";
import xIcon from './../images/x-solid (1).svg';
const fromRight = keyframes`
  from {
    transform: translatex(calc(10vw + ${navHeight}));
  }
  to {
    height: auto;
    transform: translatex(0);
  }
`
const Nav = styled.nav`
  z-index: 99999;
  position: fixed;
  left: 0;
  top: 0;
  background: ${props => props.showLinks ? 'rgba(0,0,0,0.85)': 'rgba(0, 0, 0, 0.22)'};
  width: 100vw;
  height: ${props => props.showLinks ? '100vh' : navHeight};
  display: flex;
  flex-direction: column;
  transition: all ease-out .2s ;
`
const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 90px;
  align-items: center;

`
const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 5%;
  color: #fff;
  font-weight: 700;
`
const RightSide = styled.div`
  width: 50%;
  display: flex;
  padding: 0 5%;
  align-items: center;
  justify-content: end;
`
const Sections = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => props.mobile ? 'column' : 'row'};
  justify-content: ${props => props.mobile ? 'start' : 'end'};
  align-items: end;
  width: ${props => props.grow ? 'auto' : '100%'};
  height: 100%;
`
const Section = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: normal;
  font-size: ${priText};
  padding: 15px 5%;
  color: white;
  animation: ${fromRight} ${props => props.order}s 1 linear;
  transition: all ease-out .3s;
   &:hover {
    font-size: 1.6rem;
    color: ${ITred}
  }
  
  @media screen and (min-width: ${smallViewport}) {
    font-size: ${priText(smallViewport)};
  }
`
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const mobile = useMobile()
    return (
        <Nav showLinks={showLinks}>
            <NavContainer>
                <Logo>
                    <img src={mobile ? LogoMobilePNG : LogoPNG} alt='Quattro Vidrios Cordoba ARG' width={'200px'}/>
                </Logo>
                <RightSide mobile={mobile}>
                    {
                        (mobile && (
                            <img role={"button"} tabIndex={0} width='40px' height='40px' src={showLinks ? xIcon : BarsSVG} alt={'menu bars'}
                                 onClick={() => setShowLinks(!showLinks)}/>))
                        || (
                            <Sections grow={showLinks} mobile={mobile}>
                                <Section href='#home'>Home</Section>
                                <Section href='#about'>About</Section>
                                <Section href='#contact'>Contact us</Section>
                            </Sections>
                        )
                    }

                </RightSide>
            </NavContainer>
            {
                showLinks && (
                    <Sections grow={showLinks} mobile={mobile}>
                        <Section order={0.15} onClick={() => setShowLinks(!showLinks)} href='#home'>Home</Section>
                        <Section order={0.3} onClick={() => setShowLinks(!showLinks)} href='#about'>About</Section>
                        <Section order={0.5} onClick={() => setShowLinks(!showLinks)} href='#contact'>Contact us</Section>
                    </Sections>
                )

            }

        </Nav>
    )
}

export default Navbar
