import React, {Component} from 'react';
import './assets/css/style.css';
import './assets/css/icofont.min.css';
import 'bootstrap/dist/css/bootstrap.css';



class Footer extends Component{

    render(){
        return(
            <div>

            <div id="main-wrapper">
            
              
               
                <footer class="footer-section style-2 section bg-theme" style={{backgroundImage: "url(assets/images/bg/footer-bg.jpg)"}}>
                
                   
                    <div class="footer-top section pt-175 pt-lg-150 pt-md-125 pt-sm-110 pt-xs-40 pb-80 pb-lg-70 pb-md-60 pb-sm-15 pb-xs-40">
                        <div class="container container-1520">
                            <div class="row justify-content-lg-between">
                                
                             
                                <div class="col-xl-3 col-lg-2 col-md-3">
                                    <div class="footer-widget">
                                        <div class="footer-logo">
                                            <a href="index.html"><img src="assets/images/logo.png" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            
                                
                             
                                <div class="col-xl-6 col-lg-6 col-md-9">
                                    <div class="footer-widget">
                                        <div class="footer-nav">
                                            <nav>
                                                <ul>
                                                    <li><a href="#">Conract</a></li>
                                                    <li><a href="#">support</a></li>
                                                    <li><a href="#">Reedme</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="col-xl-3 col-lg-4 col-md-12">
                                    <div class="footer-widget">
                                        <div class="footer-social">
                                        <span>follow us:</span>
                                            <ul>
                                                <li><a href="#"><i class="icofont-facebook"></i></a></li>
                                                <li><a href="#"><i class="icofont-twitter"></i></a></li>
                                                <li><a href="#"><i class="icofont-instagram"></i></a></li>
                                                <li><a href="#"><i class="icofont-youtube-play"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                   
                    <div class="footer-bottom border-color section">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="copyright text-center">
                                        <p>Copyright &copy;2020 <a  href="#">4amigos</a>. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                </footer>
                
            </div>

          
            </div>
        )
    }
}


export default Footer;