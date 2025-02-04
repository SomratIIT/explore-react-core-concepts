import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Person> </Person>
     <h1>SOMRAT</h1>
     <Student></Student>
    </>
  )
}
function Person()
{
   const name1 = 'Somrat';
  return <h3>I am a Person & My name is {name1}</h3>
}
function Student(){
  const per = {name1: 'Raj'}
  return (
  <div>
    
    <h1>Hello {per.name1}</h1>
  </div>
  )
}

export default App
