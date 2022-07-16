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
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;700&display=swap"
                rel="stylesheet"/>
        </header>
    )
}

export default Header
