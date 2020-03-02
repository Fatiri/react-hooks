import React, { useState, useEffect } from 'react'

function UseEffectConditionalComponent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    useEffect(()=>{
        console.log("useEffect Updating document tittle");
        document.title = `Counting ${count}`
        
    }, [count]);

    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
            <button type="button" onClick={()=>setCount(count+1)}>counting {count}</button>
        </div>
    )
}

export default UseEffectConditionalComponent
