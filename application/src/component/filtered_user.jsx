import React, { Component } from 'react'
import { Link,Route } from "react-router-dom";
import Axios from 'axios';
export default class FilteredUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill:'',
            arr :[]
        }
    }
    handleChange =(e) => {
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        var editItemDetails = {
           skill:this.state.skill
        }
        Axios.post("http://127.0.0.1:5000/news_feed",editItemDetails)
            .then((response) => {
                this.setState({
                    arr:response.data
                })
                console.log(this.state.arr)
            })
            .catch((err) => alert(err))
    }
    handleServer = (e) => {
        e.preventDefault() 
        Axios.get("http://127.0.0.1:8000")
        .then((response) => {
        })
        .catch((err) => {
            alert("Shifthing to 80000")
            window.location.port ="8000"            
        })
    }
    render() {
        return (
            <div>
                <center>
                    <h1>Please Select the Technology to continue</h1>
                    <select className ="btn btn-secondary dropdown-toggle" value={this.state.skill} name="skill" onChange={this.handleChange}>
                        <option>Select</option>
                        <option value ="HTML" className="dropdown-item ">HTML</option>
                        <option value = "CSS">CSS</option>
                        <option value ="JavaScript">JavaScript</option>
                        <option value ="ES6">ES6</option>
                        <option value ="React">React</option>
                        <option value = "Redux">Redux</option>
                        <option value ="Bootstrap">Bootstrap</option>
                        <option value = "Python">Python</option>
                        <option value = "Flask">Flask</option>
                        <option value ="SQL">SQL</option>
                    </select>
                    <button className ="btn btn-success" onClick={this.handleSubmit}>Select</button>
                </center>
                {
                    this.state.arr.map((e) =>{
                        return(
                            <div className= "mt-5">
                                <center>
                                    <h1><Link to ={`/user_info/${e.id}`}>{e.name }</Link></h1>
                                </center>
                            </div>
                        )
                    })
                }
                <center>
                    <button onClick={this.handleServer}>Click here to chat</button>
                </center>
            </div>
        )
    }
}
