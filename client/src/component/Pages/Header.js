import React from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <div className="header">
               <div class="navbar navbar-fixed-top navbar-default" role="navigation">
                        <div class="container">
                            <div className="row">
                                <div className="col-md-2 col-sm-2">
                                <div class="navbar-header">
                                <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon icon-bar"></span>
                                    <span class="icon icon-bar"></span>
                                    <span class="icon icon-bar"></span>
                                </button>
                                <a href="#" class="navbar-brand "><img src="assets/images/favicon.ico" class="img-responsive logo mt-5" alt="logo"/></a>
                                <h1 style={{fontSize:"20px"}}><span className="span">U</span>ic <span className="span">S</span>oft</h1>
                            </div>
                                </div>
                                <div className="col-md-10 col-sm-10">
                            <div class="collapse navbar-collapse">
                                <ul class="nav navbar-nav navbar-right">
                                    <li><a href="#home" class="smoothScroll">HOME</a></li>
                                    <li><a href="#service" class="smoothScroll">SERVICE</a></li>
                                    <li><a href="#about" class="smoothScroll">ABOUT</a></li>
                                    <li><a href="#team" class="smoothScroll">TEAM</a></li>
                                    <li><a href="#pricing" class="smoothScroll">PRICING</a></li>
                                    <li><a href="#portfolio" class="smoothScroll">PORTFOLIO</a></li>
                                    <li><a href="#contact" class="smoothScroll">CONTACT</a></li>
                                </ul>
                            </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
        </div>
    )
}
