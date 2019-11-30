import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link, Route, Redirect } from "react-router-dom";
import Axios from 'axios';
import Image from 'react-bootstrap/Image'
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
            <div>
                <div className="container-fluid login-bg" style={{height : "80vh"}}>
                    <center>
                        <Form className="w-25 mt-5 gradient-bg-login text-dark" style={{borderRadius : "20px"}} > 
                            <Image src="loginimg.jpg" style={{height: "100px", width: "100px"}} roundedCircle />  

                            <Form.Group  controlId="formBasicEmail" >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control className="text-dark " type="email" placeholder="Enter Username" style={{backgroundColor: "rgba(0,0,0,0.1)"}} name = "email" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className=" form-control text-dark" type="password" placeholder="Password" style={{backgroundColor: "rgba(0,0,0,0.1)"}} name = "password" onChange={this.handleChange}/>
                            </Form.Group>

                            {/* <Link to={`/Dashboardforindividual/${this.state.email}`}>   */}
                            <Button variant="danger" onClick={this.handleSubmit} type="button">Submit</Button> 
                            {/* </Link> */}
                        </Form>
                    </center>
                    <center>
                    <p>Not Registerd? 
                        <Link to="/signup" >Click Here</Link>
                    For Sign up</p>        
                    </center> 
                </div>    
            </div>
        )
    }
}
