import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode1 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "warning")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "info")
    }
  }
  const toggleMode2 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#222222';
      showAlert("Dark mode has been enable", "warning")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "info")
    }
  }
  const toggleMode3 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#013220';
      showAlert("Dark mode has been enable", "warning")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "info")
    }
  }
  const toggleMode4 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#8b0000';
      showAlert("Dark mode has been enable", "warning")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "info")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} toggleMode4={toggleMode4} />
        <Alert alert={alert} />
        <div className="container-fluid my-3">
          <Routes>
            <Route exat path="/" element={<Textform showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />} />
            <Route exat path="/about" element={<About mode={mode} />} />
            <Route exat path="/home" element={<Textform showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>


  );
}

export default App;

