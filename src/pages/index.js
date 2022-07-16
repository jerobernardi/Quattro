import React from 'react'
import Layout from "../components/utils/Layout"
import '../style.css'
import useComponent from "../hooks/useComponent";

const IndexPage = () => {
    const Component = useComponent()
    return (
        <Layout/>
    )
}

export default IndexPage
