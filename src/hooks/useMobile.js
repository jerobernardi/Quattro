import React, { useState, useEffect } from 'react';
// This hook is used to determine whether should render mobile view.
const useMobile = () => {
    const [screenWidth, setScreenWidth] = useState(false);
    useEffect(() => {
        setScreenWidth(window.screen.width <= 992)
        window.addEventListener('resize', () => setScreenWidth(window.screen.width <= 992))
    }, [])
    return screenWidth
}
export default useMobile;
