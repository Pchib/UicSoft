

import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state=
          {setModal : false}
          this.toggle = this.toggle.bind(this) 
      }
     toggle (){
      this.setState ( {setModal : !this.state.setModal})
       console.log(this.state.setModal)
    }
    render() {
        return (
            <div>
                            <header id="header">
                    <div id="topbar">
                    <div class="container">
                        <div class="social-links">
                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="container">

                    <div class="logo float-left">
                        <h1 class="text-light"><a href="#intro" class="scrollto"><span>UicSoft</span></a></h1>
                        <a href="#header" class="scrollto"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
                    </div>
                   
                   <div class="float-right">
                   <Button color="primary" onClick={this.toggle}>Log In</Button>
                            <Modal isOpen={this.state.setModal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
              

                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>

                <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                   </div>
                    <nav class="main-nav float-right d-none d-lg-block">
                 
                        <ul>
                        <li class="active"><a href="#intro">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#team">Team</a></li>
                        <li class="drop-down"><a href="">Join</a>
                        
                            <ul>
                            <li><a href="#pricing">Pricing</a></li>
                            {/* <li class="drop-down"><a href="#">Testimonial</a>
                                <ul>
                                <li><a href="#">Clients</a></li>
                                <li><a href="#">Freqently Asked Questions</a></li>
                                <li><a href="#">Clients</a></li>
                                <li><a href="#">Freqently Asked Questions</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                                </ul>
                            </li> */}
                            <li><a href="#testimonials">Testimonial</a></li>
                            <li><a href="#clients">Clients</a></li>
                            <li><a href="#faq">Freqently Asked Question</a></li>
                            </ul>
                        </li>
                        <li><a href="#footers">Contact Us</a></li>
                        
                        </ul>
                     
                    </nav>

                    
                    </div>
                </header>
                <section id="intro" class="clearfix">
                    <div class="container d-flex h-100">
                    <div class="row justify-content-center align-self-center">
                    <div class="col-md-6 intro-info order-md-first order-last">
                        <h2>Unified Innovation<br/> and Communication <span>Software!</span></h2>
                        <div>
                            <a href="#about" class="btn-get-started scrollto">Get Started</a>
                        </div>
                    </div>
                        
                        
                
                        <div class="col-md-6 intro-img order-md-last order-first">
                        <img src="assets/img/intro-img.svg" alt="" class="img-fluid"/>
                        </div>
                    </div>

                    </div>
                </section>

                <main id="main"/>
            </div>
        )
    }
}
