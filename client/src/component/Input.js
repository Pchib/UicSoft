// import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import Service from './Pages/Service'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Divider from './Pages/Divider'
import About from './Pages/About'
import Team from './Pages/Team'
import Newsletter from './Pages/Newsletter'
import Pricing from './Pages/Pricing'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import Googlemaps from './Pages/Googlemaps'
import Footer from './Pages/Footer'

export default class Input extends Component {
    constructor(){
        super();
       let state = {
            input : ''
        };
    
    }
     
        
    render(){
        return (
            <div>
                    <body data-spy="scroll" data-offset="50" data-target=".navbar-collapse">
                    {/* <!-- start navigation --> */}
                    <Header/>
                    {/* <!-- end navigation --> */}

                    {/* <!-- start home --> */}
                    <Home/>
                  
                    {/* <!-- end home --> */}

                    {/* <!-- start service --> */}
<Service/>
                   
                    {/* <!-- end service -->

                    <!-- start divider --> */}
                    <Divider/>
                 
                    {/* <!-- end divider -->

                    <!-- start about --> */}
                    <About/>

                    {/* <!-- end about -->

                    <!-- start team --> */}
                    <Team/>

                    {/* <!-- end team -->

                    <!-- start newsletter --> */}
                    <Newsletter/>
                   
                    {/* <!-- end newsletter -->

                    <!-- start pricing --> */}
                    <Pricing/>

                    {/* <!-- end pricing -->

                    <!-- start portfolio --> */}
                    <Portfolio/>

                    {/* <!-- end portfolio -->

                    <!-- start contact --> */}
                    <Contact/>
                    
                    {/* <!-- end contact -->

                    <!-- start google map --> */}
                    <Googlemaps/>
                    
                    {/* <!-- end google map -->

                    <!-- start footer --> */}
                    <Footer/>

                    </body>
            </div>
        )
    }
}

