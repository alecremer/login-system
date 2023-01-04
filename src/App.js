import logo from './logo.svg';
import './App.css';
import LoginContainer from './presentation/view/Components/Login/LoginContainer';
import LogupContainer from './presentation/view/Components/Login/LogupContainer';
import { Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes >
    
        <Route element = { <LoginContainer/> }  path="/" />
        <Route element = { <LogupContainer/> }  path="/logup" />

      </Routes>
    </div>
  );
}

export default App;
