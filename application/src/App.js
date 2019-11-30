import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home.jsx'
import Login from './component/login.jsx'
import Signup from './component/signup.jsx'
import { BrowserRouter,Route } from "react-router-dom";
import Dashboard from './component/dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
      user: null
    }
  }

  getUser = (user) => {
    this.setState({
      user: user,
      flag: true
    })
  }

  render(){
    return (
      <div className="App">
        <Route path="/" exact component={Home}/>
        <Route path ="/login"  render = {props =>  <Login getUser={this.getUser} {...props} />}/>
        <Route path="/signup"  component={Signup}/>
        {this.state.flag ? <Route path = "/dashboard" render = {props => <Dashboard user={this.state.user} {...props}/> }/> : null}
      </div>
    );
  }
}

export default App;
