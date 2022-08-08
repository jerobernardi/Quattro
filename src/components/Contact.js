import React, {useState} from 'react'
import styled, {keyframes} from "styled-components"
import {ITgreen, priText, SecondaryTextColor, secText, smallViewport, title} from "./utils/Constants"
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
  width: 50%;
  max-width: 400px;
  height: ${props => props.mobile ? 'auto' : '50%'};
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.mobile ? 'center' : 'start'};
  align-items: ${props => props.mobile ? 'center' : 'end'};
  transform: translateX(${props => props.show ? '0' : '-100vw'});
  transition: all ease-out 1s;
`
const FormSection = styled(ContactSection)`
  align-items: ${props => props.mobile ? 'center' : 'start'};
  transform: translateX(${props => props.show ? '0' : '100vw'});
`
const Title = styled.h1`
  font-size: ${title};
  color: white;
  width: 100%;
  max-width: 400px;
  margin: 5px 10px;
  text-align: ${props => props.mobile ? 'start' : 'end'};

  @media screen and (min-width: ${smallViewport}) {
    font-size: ${title(smallViewport)};
  }
`
const Info = styled.h3`
  color: ${SecondaryTextColor};
  font-size: ${priText};
  margin: 5px 10px;
  width: 100%;
  text-align: ${props => props.mobile ? 'start' : 'end'};

  @media screen and (min-width: ${smallViewport}) {
    font-size: ${priText(smallViewport)};
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

  @media screen and (min-width: ${smallViewport}) {
    font-size: ${secText(smallViewport)};
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

  @media screen and (min-width: ${smallViewport}) {
    font-size: ${secText(smallViewport)};
  }
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
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
  
  @media screen and (min-width: ${smallViewport}) {
    font-size: ${secText(smallViewport)};
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
        <ContactContainer mobile={mobile} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <ContactSection show={hover || mobile} mobile={mobile}>
                <Title mobile={mobile}>Contactanos</Title>
                <Info mobile={mobile}>Direccion: {mobile ? <br/> : ''}Bv Chacabuco 8</Info>
                <Info mobile={mobile}>Telefono: {mobile ? <br/> : ''}+54 353 4277653</Info>
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
