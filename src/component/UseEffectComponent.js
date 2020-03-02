import React, { useState, useEffect } from 'react'

function UseEffectComponent() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `counting ${count}`
    });
  
    return (
        <div>
            <button onClick={() => setCount(count+1)}>Button</button>
            {count}
        </div>
    )
}

export default UseEffectComponent
