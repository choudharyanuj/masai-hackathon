import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home.jsx'
import Login from './component/login.jsx'
import Signup from './component/signup.jsx'
import { BrowserRouter,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home}/>
      <Route path ="/login"  component={Login}/>
      <Route path="/signup"  component={Signup}/>
    </div>
  );
}

export default App;
