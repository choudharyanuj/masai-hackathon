import React, { Component } from 'react'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.user[0])
        return (
            <div>
                <center>
                    <h1>Welcome {this.props.user[0]["name"]}</h1>
                    <h2>Your Personal Details</h2>
                    <hr></hr>
                    <div className="row">
                        <div className="col-6">
                            <h3>Id</h3>
                            <h3>User Name</h3>
                            <h3>Email</h3>
                            <h3>Gender</h3>
                            <h3>Skill 1</h3>
                            <h3>Skill 2</h3>
                            <h3>Skilll 3</h3>
                        </div>
                        <div className="col-6">
                            <h3>{this.props.user[0]["id"]}</h3>
                            <h3>{this.props.user[0]["user_name"]}</h3>
                            <h3>{this.props.user[0]["email"]}</h3>
                            <h3>{this.props.user[0]["gender"]}</h3>
                            <h3>{this.props.user[0]["skill1"]}</h3>
                            <h3>{this.props.user[0]["skill2"]}</h3>
                            <h3>{this.props.user[0]["skill3"]}</h3>
                        </div>
                    </div>
                </center>
            </div>
        )
            }
        }
