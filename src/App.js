// infrastructure import ----------------------------------------------------------
import { Route, BrowserRouter, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// --------------------------------------------------------------------------------


// controller imports -------------------------------------------------------------
import createAccountController from './controller/createAccountController';

// --------------------------------------------------------------------------------


// view imports -------------------------------------------------------------------
import LoginContainer from './presentation/view/Components/Login/LoginContainer';
import LogupContainer from './presentation/view/Components/Login/LogupContainer';

// --------------------------------------------------------------------------------


function App() {
  return (
    <div className="App">
      <Routes >
    
        <Route element = { <LoginContainer/> }  path="/" />
        <Route element = { <LogupContainer controller={createAccountController}/> }  path="/logup" />

      </Routes>
    </div>
  );
}

export default App;
