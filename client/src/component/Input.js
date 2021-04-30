// import {Link} from 'react-router-dom';
import React, { Component } from "react";
import Service from "./Pages/Service";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home";
import Divider from "./Pages/Divider";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Newsletter from "./Pages/Newsletter";
import Pricing from "./Pages/Pricing";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Googlemaps from "./Pages/Googlemaps";
import Footer from "./Pages/Footer";
import Testimonial from "./Pages/testimonials";
import Clients from "./Pages/Clients";
import Frequently from "./Pages/Frequently";

export default class Input extends Component {
  constructor() {
    super();
    let state = {
      input: "",
    };
  }

  render() {
    return (
      <div>
        <body data-spy="scroll" data-offset="50" data-target=".navbar-collapse">
          {/* <!-- start navigation --> */}
          <Header />

          <Service />

          {/* <!-- end service -->

                    <!-- start divider --> */}
          <Newsletter />

          <Divider />
          <About />
          <Portfolio />
          <Testimonial />

          <Team />

          <Clients />

          <Pricing />

          <Frequently />

          {/* <Contact/> */}

          {/* <Googlemaps/> */}

          <Footer />
          {/* <Home/> */}
        </body>
      </div>
    );
  }
}
