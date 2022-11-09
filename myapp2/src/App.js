import logo from './logo.svg';
import './Appa.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { createRoot } from "react-dom/client";
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

let name = "Supriya";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode =()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
      document.title = "Light Mode";
    }
    else if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled','success');
      document.title = "Dark Mode";
    }
  }

  const showAlert = (message, type)=>{
      setAlert({
        message: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const router = createBrowserRouter([
    {path:'/', element: <Textform /> },
    {path:'/about', element: <About/>}
  ]);
 
  return (
    <>
      
      
    </>
  );
}

export default App;
