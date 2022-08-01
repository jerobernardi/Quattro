import React, { useState, useEffect } from 'react';
// This hook is used to determine whether should render mobile view.
const useMobile = () => {
    const [screenWidth, setScreenWidth] = useState();
    useEffect(() => {
        if (screenWidth === undefined) setScreenWidth(window.screen.width)
        window.addEventListener('resize', () => {
            setScreenWidth(window.screen.width)
        })
    }, [screenWidth])

    return screenWidth <= 992
}
export default useMobile;
