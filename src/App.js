import Alert from "./components/js/Alert";
import Navbar from "./components/js/Navbar";
import TextForm from "./components/js/TextForm";
import { useState } from "react";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null)},800)
  }  
  const toggleModeHandler= ()=>{
    console.log('clicked');
          if(mode==='light'){
            setMode('dark')
            document.body.style.background="#100b22";
            showAlert('Dark Mode Enabled','Success');
          }else{
            setMode('light')
            document.body.style.background="white";
            showAlert('Light Mode Enabled','Success');
          }
  }

  return (
    <>
  <Navbar  mode={mode} toggleMode={toggleModeHandler} showAlert={showAlert} />
  <Alert  alert={alert}/>
  <div className="container">
  <TextForm showAlert={showAlert} heading="Convert Your String Here"  mode={mode} />
  </div>
  </>
  );
}

export default App;
