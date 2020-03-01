import React, {useState} from 'react'

function UseStateComponent() {
    const [count, setCount] = useState(0)
  
    return (
        <div>
            <button onClick={() => setCount(count+1)}>Button</button>
            {count}
        </div>
    )
}

export default UseStateComponent
