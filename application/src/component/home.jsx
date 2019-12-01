import React, { Component } from 'react'
import Navigation from './nav.jsx'
import Carousel from 'react-bootstrap/Carousel'
import { Link,Route } from "react-router-dom";
import Image from 'react-bootstrap/Image'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                
                
                <div className="m-2">
                    <Carousel className="m-3">
                        <Carousel.Item>
                            <img className="d-block w-100" src="c1.jpg" alt="Third slide" style={{height:"500px"}} />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src="c2.jpg" alt="First slide" style={{height:"500px"}} />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src="c3.jpeg" alt="Third slide" style={{height:"500px"}}  />
                        </Carousel.Item>
                    </Carousel>
                 </div>
                 <div className="jumbotron ml-4 mr-4 text-tight" style={{background: "linear-gradient(#b92b27, #1565C0)"}}>
                     <center>
                        <h1 className="text-light">WHY Clan of Coder?</h1>
                        <h2 className="text-light">"Everyone out there don't know each and every thing in tech world so they need to clear their doubt. And for that COC is a perfect platform"</h2>
                    </center>
                 </div>
                 <div className="jumbotron text-light ml-4 mr-4" style={{background: "linear-gradient(#b92b27, #1565C0)"}}>
                    <div className="row">
                        <div className="col-6">
                            <h2 className="mt-5">Who we are?</h2>
                            <h6>We aims to provide a comfortable digital space not only for the people who want to use the Internet in their mother tongue but also for first-time internet users, to share their thoughts, emotions, opinions and become friends with others without any language barrier</h6>
                        </div>
                        <div className="col-6">
                            <Image src="img1.jpg" fluid />
                        </div>
                    </div>
                 </div>
                 <div className="jumbotron ml-4 mr-4">
                    <div className="row">
                        <div className="col-6">
                            <h2 className="mt-5">What we do?</h2>
                            <h6>Being at the forefront of the vernacular social media revolution, we want to redefine the way billions of people are consuming content on social media. We aim to bring local, relevant content to smartphone users across India.</h6>
                        </div>
                        <div className="col-6">
                            <Image src="img2.png" fluid />
                        </div>
                    </div>
                 </div>
                 <div style={{backgroundColor:"black"}} className="text-light ml-4 mr-4">
                     <center>
                        <h1>It takes a world-class team to build a world-class product.</h1>
                        <Link to="/login"><button className="btn btn-success">Join Us</button></Link>
                    </center>
                 </div>
            </div>
        )
    }
}
