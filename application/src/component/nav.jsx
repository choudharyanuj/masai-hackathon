import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link,Route } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        {/* <Nav.Link href="#link">Chat</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px" }} to="/login">Login/SignUp</Link>
                       </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
