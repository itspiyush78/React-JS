import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [counter, setCounter] = useState(15)

  //let counter  = 15 

  const addValue = () => {
  // counter = counter + 1
   setCounter(counter + 1)
  
  }

const removeValue = () => {
  setCounter(counter - 1)
}
return (
    <>
   <h1>chai aur code</h1>
   <h2>Counter value: {counter} </h2>

   <button 
   onclick={addValue}
   >Add value </button>  
   <br/>
   <button
   onClick = {removeValue}
   >remove value {counter} </button>
   <p>footer: {counter} </p>
</>
  )
}

export default App
