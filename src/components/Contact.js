import React, {useState} from 'react'
import styled, {keyframes} from "styled-components"
import {ITgreen, ITred, mViewport, priText, SecondaryTextColor, secText, smallViewport, title, xmViewport, xsViewport} from "./utils/Constants"
import sendSVG from './../images/arrow-right-solid.svg'
import useMobile from "../hooks/useMobile";

const appear = keyframes`
  from {
    height: 0;
  }
  
  to {
    height: auto;
  }
`
const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1C2E5B;
  display: flex;
  flex-direction: ${props => props.mobile ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
`
const ContactSection = styled.div`
  width: ${props => props.mobile ? '80%' : '50%'};
  max-width: 600px;
  height: ${props => props.mobile ? 'auto' : '50%'};
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.mobile ? 'center' : 'start'};
  align-items: ${props => props.mobile ? 'center' : 'end'};
  transform: translateX(${props => props.show ? '0' : '-100vw'});
  transition: all ease-out 1s;
`
const InfoContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: ${props => props.mobile ? 'column' : 'row'};
  align-items: center;

  @media screen and (min-width: ${mViewport}) {
    max-width: 800px;
  }
`
const FormSection = styled(ContactSection)`
  align-items: ${props => props.mobile ? 'center' : 'start'};
  transform: translateX(${props => props.show ? '0' : '100vw'});
  
  @media screen and (min-wdith: ${mViewport}) {
    width: fit-content;
  }
`
const Title = styled.h1`
  font-size: ${title};
  color: white;
  width: 100%;
  max-width: 400px;
  margin: 5px 10px;
  text-align: ${props => props.mobile ? 'start' : 'end'};

  @media screen and (min-width: ${xsViewport}) {
    font-size: ${title(xsViewport)};
  }

  @media screen and (min-width: ${mViewport}) {
    font-size: ${title(mViewport)}
  }
`
const Info = styled.h3`
  color: white;
  font-size: ${secText};
  margin: 0 10px;
  width: 100%;
  text-align: ${props => props.mobile ? 'start' : 'end'};

  @media screen and (min-width: ${xsViewport}) {
    font-size: ${secText(xsViewport)};
  }
  @media screen and (min-width: ${xmViewport}) {
    flex: 2;
  }
  @media screen and (min-wdith: ${mViewport}) {
    font-size: ${secText(mViewport)};
    margin: 0;
  }
`
const Label = styled.h3`
  color: ${ITgreen};
  font-size: ${priText};
  margin: 10px 10px 0 10px;
  width: 100%;
  text-align: ${props => props.mobile ? 'start' : 'end'};

  @media screen and (min-width: ${xsViewport}) {
    font-size: ${secText(xsViewport)};
  }
  @media screen and (min-width: ${xmViewport}) {
    flex: 1;
  }
  @media screen and (min-wdith: ${mViewport}) {
    font-size: ${secText(mViewport)};
  }
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.mobile ? 'center' : 'start'};
  justify-content: center;
`
const Input = styled.input`
  border: none;
  width: 100%;
  max-width: 400px;
  height: 30px;
  margin: 10px 0;
  border-radius: 38px;
  padding: 0 5%;
  font-size: ${secText};
  &:focus {
    border: none;
    outline: none;
  }

  @media screen and (min-width: ${xsViewport}) {
    font-size: ${secText(xsViewport)};
  }

`
const TextArea = styled.textarea`
  border: none;
  width: 100%;
  max-width: 400px;
  height: 180px;
  margin: 10px 0;
  padding: 20px 5%;
  border-radius: 10px;
  font-size: ${secText};
  
  &:focus {
    border: none;
    outline: none;
  }

  @media screen and (min-width: ${xsViewport}) {
    font-size: ${secText(xsViewport)};
  }
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  max-width: 400px;
`
const Button = styled.button`
  align-self: end;
  background-color: ${ITgreen};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 30%;
  max-width: 450px;
  height: auto;
  margin: 10px 0;
  border-radius: 38px;
  padding: 10px;
  color: white;
  font-size: ${secText};
  
  @media screen and (min-width: ${xsViewport}) {
    font-size: ${secText(xsViewport)};
  }
`
const RightArr = styled.img`
  width: 10px;
  height: 90%;
  margin-left: 5px;
`
const Contact = () => {
    const [hover, setHover] = useState(false);
    const mobile = useMobile()
    return (
        <ContactContainer mobile={mobile} onMouseOver={() => setHover(true)}>
            <ContactSection show={hover || mobile} mobile={mobile}> 
                <Title mobile={mobile}>Contactanos</Title>
                <InfoContainer mobile={mobile}>
                  <Label mobile={mobile}>Correos electrónicos:</Label>
                  <Info mobile={mobile}>administracion@quattrovidrios.com.ar <br/> ventas@quattrovidrios.com.ar</Info>
                </InfoContainer>
                <InfoContainer mobile={mobile}>
                  <Label mobile={mobile}>Dirección:</Label>
                  <Info mobile={mobile}>Bv. Alvear 1850</Info>
                </InfoContainer>
                <InfoContainer mobile={mobile}>
                  <Label mobile={mobile}>Teléfonos:</Label>
                  <Info mobile={mobile}>3534728586 - 3534728587</Info>
                </InfoContainer>
            </ContactSection>
            <FormSection show={hover || mobile} mobile={mobile}>
                <Form mobile={mobile}>
                    <Input placeholder={'Nombre'} type={'text'}/>
                    <Input placeholder={'Correo electrónico'} type={'email'}/>
                    <TextArea placeholder={'Escriba su mensaje'}/>
                    <ButtonContainer>
                        <Button type={'submit'}>Enviar <RightArr src={sendSVG} alt={'send email'}/></Button>
                    </ButtonContainer>
                </Form>
            </FormSection>
        </ContactContainer>
    )
}
export default Contact
