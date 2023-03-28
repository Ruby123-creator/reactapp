
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode , setMode] = useState("light")

  const [alert , setAlert] = useState(null)
  const showAlert = (message ,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.title ="Text Utilis -Dark mode"
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
       document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title ="Text Utilis -Dark mode"

    }
  }

  

  return (
    
    <div classNameName="App">
      <Navbar title = "TextUtilis" mode ={mode} toggleMode ={toggleMode} />
      <Alert alert = {alert} />

     <div className='container'>
     <TextForm heading="Enter Your Text to analyze" mode ={mode} />
     </div>
     <div className="container">
      <About/>
     </div>

    </div>
  );
}

export default App;
