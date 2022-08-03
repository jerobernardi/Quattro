import React from 'react'
import card from './../images/card.png'
import styled from "styled-components";
import left from './../images/caret-left-solid.svg'
import right from './../images/caret-right-solid.svg'
import useCard from "../hooks/useCard";
import {SecondaryTextColor} from "./utils/Constants";
import useMobile from "../hooks/useMobile";

const CardSection = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: ${props => props.mobile ? 'column' : 'row'};
  align-items: center;
  justify-content: ${props => props.mobile ? 'center' : 'space-between'};
  padding: 5%; // scale for bigger screens
  overflow-x: hidden;
`
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => props.mobile ? 'center' : 'center'};
  overflow-x: hidden;
`
const SingleCard = styled.div`
  position: ${props => props.mobile ? 'absolute' : 'relative'};
  width: ${props => props.selected === props.index || !props.mobile ? '90%' : '0'};
  display: flex;
  height: 80%;
  max-width: 350px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all ease-out .3s;
  transform: translateX(${props => props.mobile ? props.index < props.selected
          ? '-100vw' : props.index > props.selected ? '100vw' : '0' : '0'});
  &:hover {
    width: ${props => !props.mobile ? '100%' : '90%'};
    height: ${props => !props.mobile ? '90%' : ' 80%'};
  }
`
const CardForm = styled.img`
  position: absolute;
  max-width: 350px;
  z-index: -1;
  width: inherit;
  height: inherit;
`
const CardImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
`
const CardDescription = styled.p`
  font-size: 1em;
  color: ${SecondaryTextColor};
  max-width: 80%;
  overflow-wrap: break-word;
`
const ButtonContainer = styled.div`
  margin-top: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`
const Slider = styled.img`
  height: 60%;
  width: 60%;
  fill: white;
  padding: 0;
`
const Card = ({img, desc, selected, index}) => {
    const mobile = useMobile();
    return (<SingleCard selected={selected} index={index} mobile={mobile}>
        <CardForm src={card} alt='polygon card quattro'/>
        <CardImage/>
        <CardDescription>{desc}</CardDescription>
    </SingleCard>)
}
const Cards = () => {
    const mobile = useMobile();
    const CardsContent = [{
        img: '', desc: 'iasfb asjfbasjb x  aisfujba ab  uasb f ba bafa noab f'
    }, {
        img: '', desc: 'klasfc asj asudfa usb au a x asdfougasfv aiosf asib f acvsfi w3ais askf'
    }, {
        img: '', desc: 'aks a c asfie pqb svin a sbaskn'
    }]
    const [card, prev, next] = useCard(CardsContent.length);
    return (
        <CardSection mobile={mobile}>
            <CardContainer mobile={mobile}>
                {CardsContent.map((e, index) => <Card key={index} img={e.img} desc={e.desc} selected={card}
                                                      index={index}/>)

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
