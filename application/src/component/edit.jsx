import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleChange =(e) => {
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        var editItemDetails = {
            user_name:this.state.user_name,
            email:this.state.email,
            password:this.state.password,
            skill1:this.state.skill1,
            skill2:this.state.skill2,
            skill3:this.state.skill3
        }
        Axios.post(`http://127.0.0.1:5000/edit/` + this.props.match.params.id, editItemDetails)
            .then((response) => {
                alert("Edited Successfuully")
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container">
                    <div className="form-group w-50 offset-2 mt-2">
                        <input name="user_name" type="text" className="form-control" placeholder="Update user name" onChange={this.handleChange}></input>
                        <input name="email" type="text" className="form-control" placeholder="update email" onChange={this.handleChange}></input>
                        <input name="password" type="password" className="form-control" placeholder="update password" onChange={this.handleChange}></input>

                        <label>Update Skill 1</label>
                        <select value={this.state.skill1} onChange={this.handleChange}>
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
                        </select>

                        <label>Update Skill 2</label>
                        <select value={this.state.skill2} onChange={this.handleChange}>
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
                        </select>

                        <label>Update Skill 3</label>
                        <select value={this.state.skill3} onChange={this.handleChange}>
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
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
