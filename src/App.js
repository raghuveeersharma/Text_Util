import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import Textform from "./component/TextForm";
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  
  const[mode,setMode]=useState("light")
  const toggle=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode is Enabled","success")
    
    }
    else{
      document.body.style.backgroundColor='#214071';
      setMode('dark')
      showAlert("Dark mode is Enabled","success")
  
    }

  }
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  return (
  <>

{/* <Router> */}
   <Navbar title="Text-Util" about="about" mode={mode} toggle={toggle}/>
     <div className="container">
      {/* <Routes> */}
              {/* <Route path="/about"element={<About/>}/> */}
              {/* <Route path="/" element={  <Textform heading="Enter your text to Analyzeee" mode={mode} showAlert={showAlert}/>}>
              </Route> */}
              <Textform heading="Enter your text to Analyzeee" mode={mode} showAlert={showAlert}/>
              <Alert alert={alert} />
        {/* </Routes> */}
        </div>
        
    {/* </Router> */}
  
  </>
  );
}

export default App;
