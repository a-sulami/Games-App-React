import React, {Component} from 'react';
import './assets/css/style.css';
import './assets/css/icofont.min.css';
import 'bootstrap/dist/css/bootstrap.css';




class Header extends Component{

    render(){
        return(
            <div>

            <div id="main-wrapper">
            
              
                <header class="header header-static bg-black header-sticky">
                    <div class="default-header menu-right">
                        <div class="container container-1520">
                            <div class="row">
                                
                               
                                <div class="col-12 col-md-3 col-lg-3 order-md-1 order-lg-1 mt-20 mb-20">
                                    <div class="logo">
                                        <a href="#"><img src="gaming-logo-png-12.svg" alt=""/></a>
                                    </div>
                                </div>
                              
                                
                               
                                <div class="col-lg-6 col-12 order-md-3 order-lg-2 d-flex justify-content-center">
                                    <nav class="main-menu menu-style-2">
                                        <ul>

                                            <li><a href="/">Home</a></li>
                                            <li><a href='/games'>games</a>
                                                <ul class="sub-menu">
                                                    <li><a href='/games'>Games</a></li>
                                                    <li><a href="games-details.html">Games Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href='/contact'>About</a></li>
                                        </ul>
                                    </nav>
                                </div>
                               
                                <div class="col-12 col-md-9 order-md-2 order-lg-3 col-lg-3">
                                    <div class="header-right-wrap">
                                        <ul>
                                            <li><a href="login.html">LOGIN</a></li>
                                            <li><a href="register.html">REGISTER</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 d-flex d-lg-none">
                                    <div class="mobile-menu"></div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                
             </header>
                
               
                <div class="page-banner-area" style={{backgroundImage: "url(page-bg.svg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="page-content text-center">
                                    <h1>PLAY TO WIN BUT<br/>ENJOY THE FUN</h1>
                                    <ul class="page-breadcrumb">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        )
    }
}


export default Header;