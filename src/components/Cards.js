import React from 'react'
import card from './../images/card.png'
import styled from "styled-components";
import left from './../images/angle-left-solid.svg'
import right from './../images/angle-right-solid.svg'
import useCard from "../hooks/useCard";
import {SecondaryTextColor} from "./utils/Constants";
import useMobile from "../hooks/useMobile";

const CardContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: ${props => props.mobile ? 'column' : 'row'};
  align-items: center;
  justify-content: ${props => props.mobile ? 'center' : 'space-between'};
  padding: 5%;
`
const SingleCard = styled.div`
  width: 80%;
  height: 60%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const CardForm = styled.img`
  position: absolute;
  max-width: 250px;
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
  height: 60px;
  width: 60px;
  fill: white;
  padding: 0 30%;
`
const Card = ({img, desc}) => {
    return (
        <SingleCard>
            <CardForm src={card} alt='polygon card quattro'/>
            <CardImage/>
            <CardDescription>{desc}</CardDescription>
        </SingleCard>
    )
}
const Cards = () => {
    const [content, prev, next, Contents] = useCard();
    const mobile = useMobile();
    return (
        <CardContainer mobile={mobile}>
            {
                mobile && (<Card img={content.img} desc={content.desc}/>)
            }
            {
                !mobile && (Contents.map(e => <Card img={e.img} desc={e.desc}/>)
                )
            }
            {
                mobile && (
                    <ButtonContainer mobile={mobile}>
                        <Slider src={left} alt='prev card' onClick={() => prev()}/>
                        <Slider src={right} alt='next card' onClick={() => next()}/>
                    </ButtonContainer>
                )
            }
        </CardContainer>
    )
}
export default Cards
