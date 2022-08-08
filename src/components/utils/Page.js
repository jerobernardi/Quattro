import React from 'react'
import styled from 'styled-components'
import {navHeight} from "./Constants";

const Container = styled.section`
  width: 100vw;
  height: calc(100vh + ${navHeight});
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`
const Page = ({ children, page }) => {
    return (
        <Container id={page}>
            {children}
        </Container>
    )
}
export default Page
