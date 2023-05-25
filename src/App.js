import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React,{ useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // Dark Mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }
  const changegreen = ()=>{
    document.body.style.backgroundColor = '#35C649'
  }
  const changeyellow = ()=>{
    document.body.style.backgroundColor = '#CAB911'
  }
  const changered = ()=>{
    document.body.style.backgroundColor = '#C15031'
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#041c64';
      showAlert("Dark mode has been enabled...!", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'White';
      showAlert("light mode has been enabled...!", "Success");
    }
    
  }

  return (
    <>
     <BrowserRouter>
   <Navbar title ="Textutils" aboutText = "About" mode={mode} toggleMode={toggleMode} changegreen ={changegreen} changeyellow ={changeyellow} changered = {changered}/>
   {/* <Navbar /> */}
   <Alert alert={alert}/>
   <div className="container">
          <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>
          </Routes>
        </div>
        </BrowserRouter>
   </>
  );
}

export default App;
