import React from 'react'
import UseStateComponent from './component/UseStateComponent'
import UseStateObjectComponent from './component/UseStateObjectComponent'
import UseStateArrayComponent from './component/UseStateArrayComponent'
import UseEffectComponent from './component/UseEffectComponent'
import UseEffectConditionalComponent from './component/UseEffectConditionalComponent'
import UseEffectRunOnceComponent from './component/UseEffectRunOnceComponent'

function App() {
  return (
    <div>
           <h1>---------------------------</h1>
           useState
           <UseStateComponent/>
           <h1>---------------------------</h1>
           useState With object
           <UseStateObjectComponent/> 
           <h1>---------------------------</h1>
           useState With Array
           <UseStateArrayComponent/>
           <h1>---------------------------</h1>
           useEffect
           <UseEffectComponent/>
           <h1>---------------------------</h1>
           useEffect With Conditional
           <UseEffectConditionalComponent/>
           <h1>---------------------------</h1>
           <UseEffectRunOnceComponent/>
           <h1>---------------------------</h1>

    </div>
  )
}

export default App
