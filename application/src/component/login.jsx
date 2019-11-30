// import React, { Component } from 'react'
// import { Form, Button } from 'react-bootstrap';
// import { Link, Route, Redirect } from "react-router-dom";
// import Axios from 'axios';
// import Image from 'react-bootstrap/Image'
// import Dashboard from './dashboard'
// export default class Login extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
            
//         }
//     }
//     handleChange = (e) => {
//         e.preventDefault()
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//         console.log(this.state)
//     }
//     handleSubmit = (e) => {
//         console.log("I am clicked")
//         e.preventDefault()
//         var editItemDetails = {
//             email:this.state.email,
//             password:this.state.password
//         }
//     Axios.post("http://127.0.0.1:5000/login", editItemDetails)
//         .then((response) => {
//             alert("Loged in Successfull")
//             console.log(response)
//             this.props.getUser(response.data)
//         })
//         .catch((err) => alert(err))
//     }
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <div className="container-fluid login-bg" style={{height : "80vh"}}>
//                     <center>
//                         <Form className="w-25 mt-5 gradient-bg-login text-dark" style={{borderRadius : "20px"}} > 
//                             <Image src="loginimg.jpg" style={{height: "100px", width: "100px"}} roundedCircle />  
//                             <Form.Group  controlId="formBasicEmail" >
//                                     <Form.Label>Username</Form.Label>
//                                     <Form.Control className="text-dark " type="email" placeholder="Enter Username" style={{backgroundColor: "rgba(0,0,0,0.1)"}} name = "email" onChange={this.handleChange} />
//                             </Form.Group>
//                             <Form.Group controlId="formBasicPassword">
//                                     <Form.Label>Password</Form.Label>
//                                     <Form.Control className=" form-control text-dark" type="password" placeholder="Password" style={{backgroundColor: "rgba(0,0,0,0.1)"}} name = "password" onChange={this.handleChange}/>
//                             </Form.Group>
//                             <Button variant="danger" onClick={this.handleSubmit} type="button"><Link to="/dashboard"> Submit</Link></Button>
//                         </Form>
//                     </center>
//                     <center>
//                     <p>Not Registerd? 
//                         <Link to="/signup" >Click Here</Link>
//                     For Sign up</p>        
//                     </center> 
//                 </div>    
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link, Route, Redirect } from "react-router-dom";
import Axios from 'axios';
import Image from 'react-bootstrap/Image'
import styled from "styled-components";


import Dropdown, {
  DropdownTrigger,
  DropdownContent
} from "react-simple-dropdown";

const List = styled.ul`
  list-style-type: none;
  padding: 0px 23px;

  li:hover {
    color: grey;
  }
`;

const Title = styled.div`
  color: lightgrey;
  margin-bottom: 7px;
  font-size: 14px;
`;

const Container = styled.div`
  position: absolute;
  padding: 10px;
`;

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }
    handleSubmit = (e) => {
        console.log("I am clicked")
        e.preventDefault()
        var editItemDetails = {
            email:this.state.email,
            password:this.state.password
        }
    Axios.post("http://127.0.0.1:5000/login", editItemDetails)
        .then((response) => {
            alert("Logged in successfully")
            console.log(response)

        })
        .catch((err) => alert(err))
    }
    render() {
        return (
            <Dropdown style={{backgroundColor:"rgba(0,0,0,0.3)",marginTop:"10%"}} className="offset-3">
                <div style={{height:"50vh", width:"100vh",}}>
                    <center>
                        <Form className="w-25 mt-5 text-light" style={{borderRadius : "20px"}} > 
                            <Form.Group  controlId="formBasicEmail" >
                                    <Form.Label >Username</Form.Label>
                                    <Form.Control className="text-light" type="email" placeholder="Enter Username" style={{backgroundColor: "rgba(0,0,0,0.1)"}} name = "email" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className=" form-control text-light" type="password" placeholder="Password" style={{backgroundColor: "rgba(0,0,0,0.1)"}} name = "password" onChange={this.handleChange}/>
                            </Form.Group>

                            {/* <Link to={`/Dashboardforindividual/${this.state.email}`}>   */}
                            <Button variant="danger" onClick={this.handleSubmit} type="button">Submit</Button> 
                            {/* </Link> */}
                        </Form>
                    </center>
                    <center>
                    <p className="text-light">Not Registerd? 
                        <Link to="/signup" >Click Here</Link>
                    For Sign up</p>        
                    </center> 
                </div>    
            </Dropdown>
        )
    }
}