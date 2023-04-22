// import logo from './logo.svg';
// import './App.css';
// let path ="google.com"

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

import React,{useState} from 'react'

// import {
//   BrowserRouter as Router,
//   RouterProvider,
//   Routes,
  
//   Route,
//   // Link
// } from "react-router-dom";
// import Switch from 'react-router-dom'





function App() {
  const[mode,setmode]=useState('light')
  const[switchtext,setswitchtext]=useState('Enable dark mode')
  const[switchtextcolor,setswitchtextcolor]=useState('dark')
  const[alert,setAlert]=useState(null)

  
const togglemode=()=>{
  if(mode==="light"){
    setmode("dark")
    setswitchtext("Enable light mode")
    setswitchtextcolor("light")
    document.body.style.backgroundColor='#042743'
  
   
    document.body.style.color="white"
    showalert("Dark mode enabled","success")
  }
  else{
    setmode("light")
    setswitchtext("Enable dark mode")
    setswitchtextcolor("dark")
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
    showalert("Light mode enabled","success")
  }

}
const showalert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)

  },3000)

}
  return (
  <>

  <div className={`bg-{mode}`}>
  <Navbar title="woision" mode={mode} togglemode={togglemode} switchtext={switchtext} switchtextcolor={switchtextcolor} />
  <Alert alert={alert}/>
  <TextForm heading="Enter your text" mode={mode} showalert={showalert} />




 

  </div>
 
  
  </>

  
  );
}


export default App;

