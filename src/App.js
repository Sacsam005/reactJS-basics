import "./App.css";
import React, { useState } from 'react'

import Navbar from "./component/Navbar";
import About from "./component/About";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("DarkMode has been enabled", "Success");
      document.title = "reactApp - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("LightMode has been enabled", "Success");
      document.title = "reactApp - Light Mode";

    }
  }

  return (
    <>

      <Router>
        <Navbar title="ReactApp" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about" element={<About />}>
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Convert the following text" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
