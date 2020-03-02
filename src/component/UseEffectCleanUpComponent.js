import React, { useState } from 'react'
import MouseEvent from './MouseEvent';

function UseEffectCleanUpComponent() {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button type="button" onClick={()=>setDisplay(!display)}>Toogle Display</button>
            {display && <MouseEvent/>}
        </div>
    )
}

export default UseEffectCleanUpComponent
