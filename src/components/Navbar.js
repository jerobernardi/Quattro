import React, {useState} from 'react'
import styled from "styled-components";
import BarsSVG from './../images/bars-solid.svg'
import LogoMobilePNG from './../images/Logo Quattro IT.png'
import LogoPNG from './../images/Logo Quattro Vidrios IT.png'
import {Link} from "gatsby";
import {navHeight} from "./utils/Constants";
import useMobile from "../hooks/useMobile";

const Nav = styled.nav`
  z-index: 99999;
  position: fixed;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.22);
  width: 100vw;
  height: ${props => props.showLinks ? '100vh' : navHeight};
  display: flex;
  flex-direction: column;
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
  width: 100%;
  height: 100%;
`
const Section = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-weight: normal;
  font-size: 1.5rem;
  padding: 15px 5%;
  color: white;
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
                        mobile && (<img width='40px' height='40px' src={BarsSVG} alt={'menu bars'}
                                        onClick={() => setShowLinks(!showLinks)}/>)
                        || (
                            <Sections mobile={mobile}>
                                <Section to={'#home'}>Home</Section>
                                <Section to={'#About'}>About</Section>
                                <Section to={'#Contact'}>Contact us</Section>
                            </Sections>
                        )
                    }

                </RightSide>
            </NavContainer>
            {
                showLinks && (
                    <Sections mobile={mobile}>
                        <Section to={'#home'}>Home</Section>
                        <Section to={'#About'}>About</Section>
                        <Section to={'#Contact'}>Contact us</Section>
                    </Sections>
                )

            }

        </Nav>
    )
}

export default Navbar
