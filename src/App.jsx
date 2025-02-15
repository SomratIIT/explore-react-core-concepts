import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Status isOnline={true} />
      <Status isOnline={false} />
      <h1>Vite + React</h1>
      <Person> </Person>
     <h1>SOMRAT</h1>
     <Student grade='7' score='99'></Student>
     <Developer></Developer>
     <Device name="Laptop"></Device>
     <Device name="Phone"></Device>
     <Device name="EarDrop"></Device>
   
    </>
  )
}
function Status(props) {
  return <h2>Status: {props.isOnline ? "Online 🟢" : "Offline 🔴"}</h2>;
}
function Device(props){
return <h2>I have a {props.name}</h2>
}
function Person()
{
   const name1 = 'Somrat';
  return <h3>I am a Person & My name is {name1}</h3>
}
const {grade, score} = {grade:'7',score:'99'}
function Student({grade, score}){

  return (
  <div className='style1 '>
    <h1>This is a student.</h1>
     <h2>Class : {grade}</h2>
     <h2>Score : {score}</h2>
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
