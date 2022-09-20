import React from 'react'
import { Link } from "react-router-dom";
import './nav.css'


export default function Nav() {
    return (
        <div className='navContainer'>


          


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top"  id='vf'>
                <div class="container">
                    {/* <a class="navbar-brand" href="#"> */}
                    <img src="assets/images/header-logo.png" className='logoHeader' alt=""></img>
                    {/* </a> */}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto" >
                            

                            <li class="nav-item">
                                
                                <Link className='nav-link' padding={1} to="/" underline='none'><span className='linkSpan'>Home</span>
                                </Link>
                               

                            </li>
                            <li class="nav-item">
                                
                                <Link className='nav-link' padding={1} to="/products" underline='none'><span className='linkSpan'>Products</span>
                                </Link>

                               
                            </li>
                            <li class="nav-item">
                            <Link className='nav-link' padding={1} to="/shopcart" underline='none'><span className='linkSpan'>Cart</span>
                                </Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
