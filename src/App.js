// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import Morecolor from './components/Morecolor';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route 
// } from "react-router-dom"
 
function App() {

//FOR DARK MODE CODE START   
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage,type)=>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode= ()=>{
    if(mode==='dark'){
    setmode ("light") 
    showAlert(": Light mode has been enabled","success")
    document.body.style.backgroundColor='white';
  }else 
    {setmode ("dark") ;
    showAlert(": Dark mode has been enabled","success")
    document.body.style.backgroundColor='#0a1b2b';
    }  
  } 
  //CODE END

  //FOR RED DARK MODE CODE START
  // const toggleMode= ()=>{
  //   if(mode==='5e1319'){
  //   setmode ("light") 
  //   showAlert(": Light mode has been enabled","success")
  //   document.body.style.backgroundColor='white';
  // }else 
  //   {setmode ("5e1319") ;
  //   showAlert(": Dark mode has been enabled","success")
  //   document.body.style.backgroundColor='#0a1b2b';
  //   }  
  // } 
  
  return (
  <>
   {/* <Router> */}
      <Navbar title="TextUtils"
              heading = "About"
               mode= {mode}
               toggleMode = {toggleMode}
               
              /> 
      <Morecolor/>        
      <Alert Alert={alert}/>        
      <div className="container my-3">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
         <Route path="/"> */}
          <Textform heading = "Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
          {/* </Route>
      </Switch> */}
      
        </div> 
          
        {/* <About/>      */}
      {/* </Router> */}
 </>
  );
}

export default App;