// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  // }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [mode, setMode] = useState('light') // tells whether dark mode is enabled or not
  const [modeBtnTxt, setModeBtnTxt] = useState('Dark Mode')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeBtnTxt('Light Mode')
      document.body.style.backgroundColor = '#15171a'
    }
    else {
      setMode('light')
      setModeBtnTxt('Dark Mode')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>

      <Router>
        <Navbar title="TextUtils" aboutText="About" modeBtn={modeBtnTxt} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
            <Routes>
              <Route exact path='/about' element={<About mode={mode}/>}>
              </Route>

              <Route exact path='/' element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Text To Speech" mode={mode} />}>
              </Route>
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
