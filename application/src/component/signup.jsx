// import React from 'react'
// import { Form, Col, Button} from 'react-bootstrap';
// import { Link,Route } from "react-router-dom";
// import Axios from 'axios';
// class Signup extends React.Component {
//     constructor(props){
//         // console.log(props)
//         super(props); 
//         this.state = {
//             name: '',
//             user_name: '',
//             email: '',
//             password:'',
//             gender:'',
//             skill1:'',
//             skill2:'',
//             skill3:''
//         }
//     }
    
//     handleChange=(e)=>{
//         console.log(this.state)
//         e.preventDefault()
//         this.setState({
//                 [e.target.name]:e.target.value
//             })
//     }
//     handleSubmit = (e) => {
//         console.log("I am clicked")
//         e.preventDefault()
//         var userData = {
//             name: this.state.name,
//             user_name:this.state.user_name,
//             email:this.state.email,
//             password: this.state.password,
//             gender:this.state.gender,
//             skill1: this.state.skill1,
//             skill2: this.state.skill2,
//             skill3: this.state.skill3
//         }
//         Axios.post("http://127.0.0.1:5000/create", userData)
//             .then((response) => {
//                 alert("User Registerd Successfully")
//             })
//             .catch((err) => alert(err))
//     }
//     render() {  
//           return (
//             <div>
//                 <center>
//                     <Form className="m-5 w-50 bg-light  offset-md-4">
//                         <h3 className="text-danger">Sign Up</h3>
//                         <Form.Row>
//                             <Form.Group as={Col} controlId="formGridEmail">
//                                 <Form.Label className="float-left">Full Name</Form.Label>
//                                 <Form.Control type="text" name="name" value = {this.state.name} onChange={this.handleChange} placeholder="Enter Name" />
//                             </Form.Group>
//                             <Form.Group as={Col} controlId="formGridEmail">
//                                 <Form.Label className="float-left">User Name</Form.Label>
//                                 <Form.Control type="text" name="user_name" value = {this.state.user_name} onChange={this.handleChange}  placeholder="Password" />
//                             </Form.Group>
//                             <Form.Group as={Col} controlId="formGridPassword">
//                                 <Form.Label className="float-left">Password</Form.Label>
//                                 <Form.Control type="password" name="password" value = {this.state.password} onChange={this.handleChange}  placeholder="Password" />
//                             </Form.Group>
//                         </Form.Row>
//                         <Form.Row>
//                             <Form.Group as={Col} controlId="formGridEmail">
//                                 <Form.Label className="float-left">Email Address</Form.Label>
//                                 <Form.Control type="email" name="email"  value = {this.state.email} onChange={this.handleChange} placeholder="Email Id.." />
//                             </Form.Group>
//                     </Form.Row>
//                         <Form.Row>
//                             <Form.Group as={Col} controlId="formGridEmail">
//                                 <Form.Label className="float-left">Gender</Form.Label>
//                                 <Form.Control as="select" value= {this.state.gender} onChange={this.handleChange} name = "gender">
//                                     <option>Select Gender</option>
//                                     <option value = "male">Male</option>
//                                     <option value = "female">Female</option>
//                                     <option value = "other ">Other</option>
//                                 </Form.Control>
//                             </Form.Group>
//                         </Form.Row>
//                         <Form.Row>
//                             <Form.Group as={Col} controlId="formGridEmail">
//                                 <Form.Label className="float-left">Skill1</Form.Label>
//                                 <Form.Control as="select" value= {this.state.skill1} name="skill1" onChange={this.handleChange}>
//                                     <option value="HTML">HTML</option>
//                                     <option value = "CSS">CSS</option>
//                                     <option value ="JavaScript">JavaScript</option>
//                                     <option value ="ES6">ES6</option>
//                                     <option value="React">React</option>
//                                     <option value = "Redux">Redux</option>
//                                     <option value ="Bootstrap">Bootstrap</option>
//                                     <option value = "Python">Python</option>
//                                     <option value = "Flask">Flask</option>
//                                     <option value ="SQL">SQL</option>
//                                 </Form.Control>
//                             </Form.Group>
//                         </Form.Row>
//                         <Form.Row>
//                             <Form.Group as={Col} controlId="formGridEmail">
//                                 <Form.Label className="float-left">Skill2</Form.Label>
//                                 <Form.Control as="select" value= {this.state.skill2} name="skill2" onChange={this.handleChange}>
//                                     <option value="HTML">HTML</option>
//                                     <option value = "CSS">CSS</option>
//                                     <option value ="JavaScript">JavaScript</option>
//                                     <option value ="ES6">ES6</option>
//                                     <option value="React">React</option>
//                                     <option value = "Redux">Redux</option>
//                                     <option value ="Bootstrap">Bootstrap</option>
//                                     <option value = "Python">Python</option>
//                                     <option value = "Flask">Flask</option>
//                                     <option value ="SQL">SQL</option>
//                                 </Form.Control>
//                             </Form.Group>
//                         </Form.Row>
//                         <Form.Row>
//                             <Form.Group as={Col} controlId="formGridEmail">
//                                 <Form.Label className="float-left">Skill3</Form.Label>
//                                 <Form.Control as="select" value= {this.state.skill3} name="skill3" onChange={this.handleChange}>
//                                     <option value="HTML">HTML</option>
//                                     <option value = "CSS">CSS</option>
//                                     <option value ="JavaScript">JavaScript</option>
//                                     <option value ="ES6">ES6</option>
//                                     <option value="React">React</option>
//                                     <option value = "Redux">Redux</option>
//                                     <option value ="Bootstrap">Bootstrap</option>
//                                     <option value = "Python">Python</option>
//                                     <option value = "Flask">Flask</option>
//                                     <option value ="SQL">SQL</option>
//                                 </Form.Control>
//                             </Form.Group>
//                         </Form.Row>
//                         <Button onClick={this.handleSubmit}>Register</Button>
//                       {/* <Button variant="danger" type="submit" onClick ={ () =>{this.props.history.push(`/Dashboardforindividual/${this.state.email})}`); this.signup()}}>Register</Button> */}
//                     </Form>
//                 </center>
//             </div>
//         )
//     }
// }
// export default Signup


import React from 'react'
import { Form, Col, Button} from 'react-bootstrap';
import { Link,Route } from "react-router-dom";
import Axios from 'axios';
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
class Signup extends React.Component {
    constructor(props){
        // console.log(props)
        super(props); 
        this.state = {
            name: '',
            user_name: '',
            email: '',
            password:'',
            gender:'',
            skill1:'',
            skill2:'',
            skill3:''
        }
    }
    
    handleChange=(e)=>{
        console.log(this.state)
        e.preventDefault()
        this.setState({
                [e.target.name]:e.target.value
            })
    }
    handleSubmit = (e) => {
        console.log("I am clicked")
        e.preventDefault()
        var userData = {
            name: this.state.name,
            user_name:this.state.user_name,
            email:this.state.email,
            password: this.state.password,
            gender:this.state.gender,
            skill1: this.state.skill1,
            skill2: this.state.skill2,
            skill3: this.state.skill3
        }
        Axios.post("http://127.0.0.1:5000/create", userData)
            .then((response) => {
                alert("User Registerd Successfully")
            })
            .catch((err) => alert(err))
    }
    render() {  
          return (
           
            <div>
               
               
                <center>
                    <Form className="m-5 w-50 bg-light  offset-md-4">
                        <h3 className="text-dark">Sign Up</h3>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="float-left">Full Name</Form.Label>
                                <Form.Control type="text" name="name" value = {this.state.name} onChange={this.handleChange} placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="float-left">User Name</Form.Label>
                                <Form.Control type="text" name="user_name" value = {this.state.user_name} onChange={this.handleChange}  placeholder="Password" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label className="float-left">Password</Form.Label>
                                <Form.Control type="password" name="password" value = {this.state.password} onChange={this.handleChange}  placeholder="Password" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="float-left">Email Address</Form.Label>
                                <Form.Control type="email" name="email"  value = {this.state.email} onChange={this.handleChange} placeholder="Email Id.." />
                            </Form.Group>
                    </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="float-left">Gender</Form.Label>
                                <Form.Control as="select" value= {this.state.gender} onChange={this.handleChange} name = "gender">
                                    <option>Select Gender</option>
                                    <option value = "male">Male</option>
                                    <option value = "female">Female</option>
                                    <option value = "other ">Other</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="float-left">Skill1</Form.Label>
                                <Form.Control as="select" value= {this.state.skill1} name="skill1" onChange={this.handleChange}>
                                    <option value="HTML">HTML</option>
                                    <option value = "CSS">CSS</option>
                                    <option value ="JavaScript">JavaScript</option>
                                    <option value ="ES6">ES6</option>
                                    <option value="React">React</option>
                                    <option value = "Redux">Redux</option>
                                    <option value ="Bootstrap">Bootstrap</option>
                                    <option value = "Python">Python</option>
                                    <option value = "Flask">Flask</option>
                                    <option value ="SQL">SQL</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="float-left">Skill2</Form.Label>
                                <Form.Control as="select" value= {this.state.skill2} name="skill2" onChange={this.handleChange}>
                                    <option value="HTML">HTML</option>
                                    <option value = "CSS">CSS</option>
                                    <option value ="JavaScript">JavaScript</option>
                                    <option value ="ES6">ES6</option>
                                    <option value="React">React</option>
                                    <option value = "Redux">Redux</option>
                                    <option value ="Bootstrap">Bootstrap</option>
                                    <option value = "Python">Python</option>
                                    <option value = "Flask">Flask</option>
                                    <option value ="SQL">SQL</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="float-left">Skill3</Form.Label>
                                <Form.Control as="select" value= {this.state.skill3} name="skill3" onChange={this.handleChange}>
                                    <option value="HTML">HTML</option>
                                    <option value = "CSS">CSS</option>
                                    <option value ="JavaScript">JavaScript</option>
                                    <option value ="ES6">ES6</option>
                                    <option value="React">React</option>
                                    <option value = "Redux">Redux</option>
                                    <option value ="Bootstrap">Bootstrap</option>
                                    <option value = "Python">Python</option>
                                    <option value = "Flask">Flask</option>
                                    <option value ="SQL">SQL</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                      
                      {/* <Button variant="danger" type="submit" onClick ={ () =>{this.props.history.push(`/Dashboardforindividual/${this.state.email})}`); this.signup()}}>Register</Button> */}
                      {/* <Button onClick={this.handleSubmit} btn-btn type = "secondary">Register</Button> */}
                      <div style={{marginTop:"6%"}}>
                     
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.handleSubmit} style={{height:"80px",width:"100px    "}}>Register</button>
                    </Form>
                  
                </center>
               
            </div>
     
        )
    }
}
export default Signup