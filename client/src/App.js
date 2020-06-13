import {BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './component/Header';
import Input from './component/Input';
// import Footer from './component/Footer';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
   
     

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            state:[],
            name:[],
            country:[],
            currentIcon:[],
            currentSummary:[],
            currentWindSpeed:[],
            curtem :[],
            curpercet :[],


            daily1Summary:[],
            daily1Icon:[],
            tem1high:[],
            tem1low:[],

            daily2Summary:[],
            daily2Icon:[],
            tem2high:[],
            tem2low:[],

            daily3Summary:[],
            daily3Icon:[],
            tem3high:[],
            tem3low:[],

            daily4Summary:[],
            daily4Icon:[],
            tem4high:[],
            tem4low:[],

            daily5Summary:[],
            daily5Icon:[],
            tem5high:[],
            tem5low:[],
            
            daily6Summary:[],
            daily6Icon:[],
            tem6high:[],
            tem6low:[]
        };
      this.componentDidMount = this.componentDidMount.bind(this);
    };
   
    componentDidMount(x){
        this.setState({geocode: 'this is geocode'});
        this.setState({state: 'this is state'});
        this.setState({name: 'this is name'});
        this.setState({country: 'this is country'});
        this.setState({curtem: 'this is curtem'});
        this.setState({currentIcon: 'this is currentIcon'});
        this.setState({currentSummary: 'this is currentsummary'});
        this.setState({currentWindSpeed: 'this is currentwindspeed'});
        this.setState({curpercet: 'this is currentwindspeed'});

        this.setState({daily1Summary: 'this is daily1sumary'});
        this.setState({daily1Icon: 'this is daily1icon'});
        this.setState({tem1high: 'this is tem1high'});
        this.setState({tem1low: 'this is tem1low'});

        this.setState({daily2Summary: 'this is daily2sumary'});
        this.setState({daily2Icon: 'this is daily2icon'});
        this.setState({tem2high: 'this is tem2high'});
        this.setState({tem2low: 'this is tem2low'});

        this.setState({daily3Summary: 'this is daily3sumary'});
        this.setState({daily3Icon: 'this is daily3icon'});
        this.setState({tem3high: 'this is tem3high'});
        this.setState({tem3low: 'this is tem3low'});

        this.setState({daily4Summary: 'this is daily4sumary'});
        this.setState({daily4Icon: 'this is daily4icon'});
        this.setState({tem4high: 'this is tem4high'});
        this.setState({tem4low: 'this is tem4low'});

        this.setState({daily5Summary: 'this is daily5sumary'});
        this.setState({daily5Icon: 'this is daily5icon'});
        this.setState({tem5high: 'this is tem5high'});
        this.setState({tem5low: 'this is tem5low'});

        this.setState({daily6Summary: 'this is daily6sumary'});
        this.setState({daily6Icon: 'this is daily6icon'});
        this.setState({tem6high: 'this is tem6high'});
        this.setState({tem6low: 'this is tem6low'});

            let address = encodeURIComponent(x);
             let geocode = `https://api.geoapify.com/v1/geocode/autocomplete?text=${address}&limit=10&apiKey=a2c993a7a38741a0b626160508989b1f`;
            
        axios.get(geocode).then((res)=>{
            let lon = res.data.features[0].properties.lon;
            let lat = res.data.features[0].properties.lat;
            // console.log(`lon ${res.data.features[0].properties.lon}`);
            // console.log(`lat ${res.data.features[0].properties.lat}`);
            // console.log(`country ${res.data.features[0].properties.country}`);
            // console.log(`State ${res.data.features[0].properties.state}`);
            // console.log(`name ${res.data.features[0].properties.name}`);
            console.log(res.data)
            if(res.data.status === 'ZERO'){

            }
            else{
                let onlineWeather = `https://api.darksky.net/forecast/f39ba95c019f7d00fcaa302864b648bf/${lat},${lon}`;
                this.setState({geocodeResults:res.data});

                return axios.get(onlineWeather)

            }
           }
        ).then((res)=>{
        //     console.log(`weather condition${res.data.currently.summary}`)
        //     console.log(`weather condition${res.data.currently.icon}`)
        //     console.log(`weather condition${res.data.currently.apparentTemperature}`)
        //     console.log(`weather condition${res.data.currently.windSpeed}`)
        // console.log(`weather condition${res.data.daily.summary}`)
        //     console.log(`weather condition${res.data.daily.data[0].summary}`)
        //     console.log(`weather condition${res.data.daily[0].time}`)
        //     console.log(`weather condition${res.data.daily[0].icon}`)
            this.setState({weatherResults:res.data});

            console.log(res.data)

            }
        );
     
        };


  
    render() {  
        return (
            
            <div>
                 <Router>
            < div className = "App" >
                        <Route exact path="/" render={props=> (
                            <body>
                                {/* <Header/> */}
                                <Input insert={this.componentDidMount} /> 
                                {/* <Footer/> */}
                            </body>
                        )}/>
                      
                       
                    
                        
                    </div>
        </Router>
            </div>
        )
    }
}

