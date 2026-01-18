import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter, setCounter] = useState(0)
    let incrementVal = () => {
        counter +=1
        if(counter > 20){
            counter = 20
        }
        setCounter(counter)
    }
    let decrementVal = () => {
        counter -=1;
        if(counter < 0){
            counter = 0
        }
        setCounter(counter)
    }
  return (
    <>
        <h1>Chai aur react</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={incrementVal}> Increment</button>
        <br/>
        <br/>
        <button onClick={decrementVal}> Decrement</button>
    </>
  )
}

export default App
