import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home.jsx'
import Login from './component/login.jsx'
import Signup from './component/signup.jsx'
import Edit from './component/edit.jsx'
import { BrowserRouter,Route } from "react-router-dom";
import Dashboard from './component/dashboard.jsx';
import FilteredUser from './component/filtered_user';
import Basic from './component/examples/Basic'
import DeviceOrientation from "./component/examples/DeviceOrientation";
import { createGlobalStyle } from "styled-components";
import UserInfo from './component/user_info';
// // import Textures from "./component/examples/Textures"
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }

  canvas {
    position: absolute;
  }

  .dropdown {
      position: fixed;
      background-color: white;
      display: inline-block;
      padding: 10px;
    z-index: 100;
  }

  .dropdown__content {
      background-color: white;
      display: none;
      position: absolute;
      margin: 10px;
  }

  .dropdown--active .dropdown__content {
      display: block;
  }
`;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
      status:false,
      user: null,
      person:null
    }
  }

  getUser = (user) => {
    this.setState({
      user: user,
      flag: true
    })
  }
  getperson = (person) => {
    this.setState({
      person:person,
      status:true
    })
  }

  render(){
    return (
      <div>
        <GlobalStyle/>
        <Route path="/" exact component={Home}/>
        <Route path ="/login"  render = {props =>  <Login getUser={this.getUser} {...props} />}/>
        <Route  path="/login" component={DeviceOrientation} />
        <Route path="/signup"  component={Basic}/>
        <Route path="/signup"  component={Signup}/>
        {this.state.flag ? <Route path = "/dashboard" render = {props => <Dashboard user={this.state.user} {...props}/> }/> : null}
        <Route path="/update/<int:id>" component={Edit}/>
        <Route path="/filtered_user" component={FilteredUser}/>
        <Route path="/user_info/:id" render={(props) => {return (<UserInfo{...props}/>)}}></Route>
        <Route path="http://localhost:8000/"></Route>
        {/* {this.state.flag ? <Route path = "/user_info/:id" render = {props => <UserInfo user={this.state.person} {...props}/> }/> : null} */}
      </div>
    );
  }
}

export default App;
