import * as React from 'react'
import {graphql, useStaticQuery} from "gatsby";

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header>
            <title>
                {data.site.siteMetadata.title}
            </title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;700&display=swap"
                rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Quattro Vidrios. Distribucion directo de fabrica al mejor precio del mercado. No dudes en CONTACTARNOS para obtener tu PRESUPUESTO"/>
                <meta name="title" content="Quattro Vidrios"></meta>
                <meta name="location" content="Cordoba, Argentina"/>
                
        </header>
    )
}

export default Header
