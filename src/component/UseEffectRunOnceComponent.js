import React, { useState, useEffect } from 'react'

function UseEffectRunOnceComponent() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    const logMouse = e =>{
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log('useEffect');
        window.addEventListener('mousemove', logMouse);
    },[])

    return (
        <div>
            Mouse X = {x}  Mouse Y = {y}
        </div>
    )
}

export default UseEffectRunOnceComponent
