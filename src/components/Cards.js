import React, { useState } from 'react'
import card from './../images/card.png'
import styled from "styled-components";
import left from './../images/caret-left-solid.svg'
import right from './../images/caret-right-solid.svg'
import useCard from "../hooks/useCard";
import {xmViewport, SecondaryTextColor, secText, xsViewport, mViewport, priText, ITred, ITgreen, HeroColor} from "./utils/Constants";
import useMobile from "../hooks/useMobile";
import templadosImg from './../images/Templados.jpg'
import tvhImg from './../images/TVH.png'

const CardSection = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: ${props => props.mobile ? 'column' : 'row'};
  align-items: center;
  justify-content: ${props => props.mobile ? 'center' : 'space-evenly'};
  padding: 5%; // scale for bigger screens
  overflow-x: hidden;

  @media screen and (min-width: ${mViewport}) {
    width: 100%;
    padding: 5% 0;
  }
`
const CardContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: ${props => props.mobile ? 'center' : 'center'};
  overflow-x: hidden;

  @media screen and (min-width: ${mViewport}) {
    width: 100%;
  }
`
const SingleCard = styled.div`
  position: ${props => props.mobile ? 'absolute' : 'relative'};
  width: ${props => props.selected === props.index || !props.mobile ? '80%' : '0'};
  display: flex;
  height: ${props => props.mobile ? '60%' : 'inherit'};
  max-width: 350px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all ease-out .3s;
  transform: translateX(${props => props.mobile ? props.index < props.selected
          ? '-100vw' : props.index > props.selected ? '100vw' : '0' : '0'});
  &:hover {
    ${props => !props.mobile ? 'width: 100%;' : ''}
    ${props => !props.mobile ? 'height: 90%;' : ''}
  }
  
  @media screen and (min-width: ${xsViewport}) {
    width: ${props => props.selected === props.index || !props.mobile ? '85%' : '0'};
    height: 60%;
  }

  @media screen and (min-width: ${xmViewport}) {
    width: ${props => props.selected === props.index || !props.mobile ? '100%' : '0'};
    margin: 0 10px;
  }  
`
const CardForm = styled.img`
  position: absolute;
  max-width: 350px;
  z-index: -1;
  width: inherit;
  height: ${props => props.mobile ? 'inherit' : '100%'};
`
const CardTitle = styled.h3`
  font-size: ${priText};
  // color: white;
  color: ${ITgreen};
  width: 100%;
  max-width: 400px;
  margin: 5px 10px;
  text-align: center;
  @media screen and (min-width: ${xsViewport}) {
    font-size: ${priText(xsViewport)};
  }
`
const CardImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  background-color: white;

  @media screen and (min-width: ${xsViewport}) {
    height: 100px;
    width: 100px;
  }
`
const CardDescription = styled.p`
  font-size: ${secText};
  color: ${SecondaryTextColor};
  max-width: 80%;
  padding: 0 20px;
  max-height: 150px;
  overflow-wrap: break-word;
  overflow-y: scroll;
  
  @media screen and (min-width: ${xsViewport}) {
    font-size: ${secText(xsViewport)};
    max-height: 200px;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`
const Slider = styled.img`
  height: 50px;
  width: 50px;
  fill: white;
  padding: 0;

  @media screen and (min-width: ${xsViewport}) {
    height: 70px;
    width: 70px;
  }
  
`
const Card = ({img, desc, selected, index, title}) => {
    const [hover, setHover] = useState(false)
    const mobile = useMobile();
    return (
      <SingleCard onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} selected={selected} index={index} mobile={mobile}>
        <CardForm src={card} alt='polygon card quattro'/>
        {
          mobile && <><CardImage src={img} alt="Quattro products"/>
          <CardDescription>{desc}</CardDescription></>
        }
        {
          hover && !mobile && (
          <><CardImage src={img} alt="Quattro products"/>
          <CardDescription>{desc}</CardDescription></>
          )
        }{
          !hover && !mobile && (
            <CardTitle>{title}</CardTitle>
          )
        }
      </SingleCard>
    )
}
const Cards = () => {
    const mobile = useMobile();
    const CardsContent = [{
        img: '', title: 'LAMINADO', desc: 'Ofrecemos el laminado en paquetes y en hojas a medida.Los mejores vidrios de seguridad en Argentina gracias al uso de láminas PVB y SentryGlas®'
    }, {
        img: tvhImg, title: 'DVH Y TVH', desc: 'Podés conformar DVH y TVH, combinando en tus pedidos desde vidrios tradicionales a especiales de capa. Incorporamos el más eficiente separador: TPS de Kommerling, capaz de ofrecer medidas de separación específicas.'
    }, {
        img: templadosImg, title: 'TEMPLADOS', desc: 'El horno utilizado para templados y termoendurecidos es el más moderno a nivel mundial. Esto nos permite marcar otra diferencia en la industria; eliminando deformaciones y distorsiones.'
    }, {
      img: '', title: 'CALIDAD SUPERIOR', desc: 'Trabajamos con la planta más avanzada de Latinoamérica, contamos con garantía de precisión inigualable en cortes, perforaciones, mecanizados, pulidos de cantos y bordes, con un nivel de calidad único en el Argentina. No más rayas, ni defectos de calidad.'
    }]
    const [card, prev, next] = useCard(CardsContent.length);
    return (
        <CardSection mobile={mobile}>
            <CardContainer mobile={mobile}>
                {CardsContent.map((e, index) => <Card key={index} img={e.img} desc={e.desc} selected={card}
                                                      index={index} title={e.title}/>)

                }
            </CardContainer>
            {mobile && (<ButtonContainer mobile={mobile}>
                <Slider src={left} alt='prev card' onClick={() => prev()}/>
                <Slider src={right} alt='next card' onClick={() => next()}/>
            </ButtonContainer>)
            }
        </CardSection>
    )
}
export default Cards
