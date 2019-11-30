// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Home from './component/home.jsx'
// import Login from './component/login.jsx'
// import Signup from './component/signup.jsx'
// import { BrowserRouter,Route } from "react-router-dom";
// import Dashboard from './component/dashboard.jsx';
// import Basic from './component/examples/Basic'
// import DeviceOrientation from "./component/examples/DeviceOrientation";
// import { createGlobalStyle } from "styled-components";
// // import Textures from "./component/examples/Textures";

// const GlobalStyle = createGlobalStyle`
//   body, html {
//     margin: 0;
//     padding: 0;
//     width: 100%;
//     height: 100%;
//   }

//   a {
//     color: inherit; /* blue colors for links too */
//     text-decoration: inherit; /* no underline */
//   }

//   canvas {
//     position: absolute;
//   }

//   .dropdown {
//       position: fixed;
//       background-color: white;
//       display: inline-block;
//       padding: 10px;
//     z-index: 100;
//   }

//   .dropdown__content {
//       background-color: white;
//       display: none;
//       position: absolute;
//       margin: 10px;
//   }

//   .dropdown--active .dropdown__content {
//       display: block;
//   }
// `;
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       flag: false,
//       user: null
//     }
//   }

//   getUser = (user) => {
//     this.setState({
//       user: user,
//       flag: true
//     })
//   }

//   render(){
//     return (
//       <div>
//           <GlobalStyle />
//         <Route path="/" exact component={Home}/>
//         <Route path ="/login"  render = {props =>  <Login getUser={this.getUser} {...props} />}/>
//         <Route  path="/login" component={DeviceOrientation} />
//         <Route path="/signup"  component={Signup}/>
//         <Route path="/signup"  component={Basic}/>
     
     
//         {this.state.flag ? <Route path = "/dashboard" render = {props => <Dashboard user={this.state.user} {...props}/> }/> : null}

//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home.jsx'
import Login from './component/login.jsx'
import Signup from './component/signup.jsx'
import { BrowserRouter,Route } from "react-router-dom";
import Basic from './component/examples/Basic'
import DeviceOrientation from "./component/examples/DeviceOrientation";
import { createGlobalStyle } from "styled-components";
import Dashboard from './component/dashboard.jsx';
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
    <div>
      <GlobalStyle />
      <Route path="/" exact component={Home}/>
      {/* <Route path ="/login"  component={Login}/> */}
      <Route path ="/login"  render = {props =>  <Login getUser={this.getUser} {...props} />}/>       
      <Route  path="/login" component={DeviceOrientation} />
      <Route path="/signup"  component={Basic}/>
      <Route path="/signup"  component={Signup}/>
    </div>
  );
}
}

export default App;