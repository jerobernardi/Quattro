import React from 'react'
import styled from "styled-components"
import {ITgreen, SecondaryTextColor} from "./utils/Constants"
import sendSVG from './../images/arrow-right-solid.svg'
import useMobile from "../hooks/useMobile";
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
`
const FormSection = styled(ContactSection)`
  align-items: ${props => props.mobile ? 'center' : 'start'};
`
const Title = styled.h1`
  font-size: 2.5em;
  color: white;
  width: 80%;
  max-width: 400px;
  margin: 5px 10px;
  text-align: ${props => props.mobile ? 'start' : 'end'};
`
const Info = styled.h3`
  color: ${SecondaryTextColor};
  font-size: 1em;
  margin: 5px 10px;
  width: 80%;
  text-align: ${props => props.mobile ? 'start' : 'end'};
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
  width: 80%;
  max-width: 400px;
  height: 30px;
  margin: 10px 5px;
  border-radius: 38px;
  padding: 0 5%;
  &:focus {
    border: none;
    outline: none;
  }
`
const TextArea = styled.textarea`
  border: none;
  width: 80%;
  max-width: 400px;
  height: 180px;
  margin: 10px 5px;
  padding: 20px 5%;
  border-radius: 10px;
  &:focus {
    border: none;
    outline: none;
  }
`
const ButtonContainer = styled.div`
  width: 80%;
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
  width: auto;
  max-width: 450px;
  height: 30px;
  margin: 10px 0;
  border-radius: 38px;
  padding: 10px;
  color: white;
`
const RightArr = styled.img`
  width: 10px;
  height: 90%;
  margin-left: 5px;
`
const Contact = () => {
    const mobile = useMobile()
    return (
        <ContactContainer mobile={mobile}>
            <ContactSection mobile={mobile}>
                <Title mobile={mobile}>Contactanos</Title>
                <Info mobile={mobile}>Direccion: Bv Chacabuco 8</Info>
                <Info mobile={mobile}>Telefono: +54 353 4277653</Info>
            </ContactSection>
            <FormSection mobile={mobile}>
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
