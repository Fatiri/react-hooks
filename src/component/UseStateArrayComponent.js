import React, { useState } from 'react'

function UseStateArrayComponent() {
    const initialArray = [
        {name:"Roti Bakar", quantity:4},
        {name:"Roti Bakery", quantity:2},
        {name:"Roti Ngembang", quantity:7},
        {name:"Roti Coklat", quantity:5},
        {name:"Roti Pisang", quantity:9}
    ]
    const [foods, setFoods] = useState(initialArray);

    return (
        <div>
            {foods.map(food =>(
                <li>name : {food.name} - quantity : {food.quantity}</li>
            ))}
        </div>
    )
}

export default UseStateArrayComponent
