import React, { useState } from 'react'

function UseStateObjectComponent() {
    
    const initialPeople = {firstName:"Jaka", lastName:"Tarub"};
    const [people, setPeople] = useState(initialPeople);

    return (
        <div>
         <input type="text" value={people.firstName}></input>   
         <input type="text" value={people.lastName}></input>
        </div>
    )
}

export default UseStateObjectComponent
