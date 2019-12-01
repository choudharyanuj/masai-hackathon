import React, { Component } from 'react'
import Axios from 'axios';

export default class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr: []
        }
    }
        componentDidMount(){
            Axios({
                method:'get',
                url:`http://127.0.0.1:5000/show/${this.props.match.params.id}`
        
            })
            .then((response) =>{
                this.setState({
                    arr:response.data
                });
                console.log(this.state.arr)
            })
            .catch((err) => alert(err))
        }

    render() {
            console.log(this.state.arr)
        return (
            <div>
                {
                    this.state.arr.length == 0 ? <h1>jdsbcjksdck</h1>: 
                    <div>
                    <h1> Name: {this.state.arr[0]["name"]}</h1>
                    <h1> Skill 1: {this.state.arr[0]["skill1"]}</h1>
                    <h1> Skill 2:{this.state.arr[0]["skill2"]}</h1>
                    <h1> Skill3:{this.state.arr[0]["skill3"]}</h1>
                    </div>
                }
            </div>
        )
    }
}
