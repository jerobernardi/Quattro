import * as React from 'react'
import {graphql, Link, useStaticQuery} from "gatsby";
import Header from "./Header";
import styled from "styled-components";
import Navbar from "../Navbar";
import Page from "./Page";
import Home from "../Home";
import Cards from "../Cards";
import Contact from "../Contact";
import Footer from './../Footer'
import useMobile from "../../hooks/useMobile";
const Site = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`
const Layout = ({ children, page }) => {
    return (
        <Site id={page}>
            <Header/>
            <Navbar/>
            <Page>
                <Home/>
            </Page>
            <Page>
                <Cards/>
            </Page>
            <Page>
                <Contact/>
            </Page>
            <Footer/>
        </Site>
    )
}

export default Layout
