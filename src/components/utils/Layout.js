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

const Site = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
`
const Layout = ({ children, page }) => {
    return (
        <Site id={page}>
            <Header/>
            <Navbar/>
            <Page page={'home'}>
                <Home/>
            </Page>
            <Page page={'about'}>
                <Cards/>
            </Page>
            <Page page={'contact'}>
                <Contact/>
            </Page>
            <Footer/>
        </Site>
    )
}

export default Layout
