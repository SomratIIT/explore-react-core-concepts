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
     <Developer></Developer>
     <Device name="Laptop"></Device>
     <Device name="Phone"></Device>
     <Device name="EarDrop"></Device>
    </>
  )
}
function Device(props){
return <h2>I have a {props.name}</h2>
}
function Person()
{
   const name1 = 'Somrat';
  return <h3>I am a Person & My name is {name1}</h3>
}
function Student(){
  const per = {name1: 'Raj'}
  return (
  <div className='style1 '>
    
    <h1>Hello {per.name1}</h1>
  </div>
  )
}
function Developer(){

  return(
    <div style={{
      border: '2px solid blue',
      padding: '40px',
      borderRadius: '20px'
    }}>
<h2>CGPA: 3.52</h2>
 <h3>Education: MSc in IT</h3>
 </div>
  )
}

export default App
