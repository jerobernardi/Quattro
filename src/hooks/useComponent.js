import React, { useState, useEffect } from 'react'
import Home from "../components/Home";
import Cards from "../components/Cards";
import Contact from "../components/Contact";

const useComponent = () => {
    const components = [Home, Cards, Contact]
    const [index, setIndex] = useState(0);
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const nextComponent = () => {
        index < components.length && setIndex(index + 1)
        setLastScrollPos(window.scrollY)
    }
    const prevComponent = () => {
        index > 0 && setIndex(index - 1)
    }
    useEffect(() => {
        window.onscroll = (e) => {
            e.preventDefault()
            if (window.scrollY > lastScrollPos) {
                nextComponent()
            } else {
                prevComponent()
            }
        }
    }, [])

    return components[index]
}

export default useComponent
