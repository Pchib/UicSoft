import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './component/Header';
import Input from './component/Input';
// import Footer from './component/Footer';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          
        };
    };
    render() {  
        return (

            <div>
                 <Router>
            < div className = "App" >
                        <Route exact path="/" render={props=> (
                            <body>
                                {/* <Header/> */}
                                <Input /> 
                                {/* <Footer/> */}
                            </body>
                        )}/>
                    </div>
        </Router>
            </div>
        )
    }
}

