import React, { Component } from 'react'

export default class Pricing extends Component {
    render() {
        return (
            <div>
                                    <div id="pricing" class="text-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 wow bounce">
                                    <h2>Our Pricing</h2>
                                </div>
                                <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="0.6s">
                                    <div class="plan plan_one">
                                        <h4 class="plan_title">Basic</h4>
                                        <ul>
                                            <li>$220 per month</li>
                                            <li>100GB Storage</li>
                                            <li>1,000GB Transfer</li>
                                            <li>24-hr support</li>
                                        </ul>
                                        <button class="btn btn-warning">SIGN UP</button>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3 wow fadeInUp" data-wow-delay="0.9s">
                                    <div class="plan plan_two">
                                        <h4 class="plan_title">Standard</h4>
                                        <ul>
                                            <li>$420 per month</li>
                                            <li>300GB Storage</li>
                                            <li>3,000GB Transfer</li>
                                            <li>12-hr response</li>
                                        </ul>
                                        <button class="btn btn-warning">SIGN UP</button>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3 wow fadeInDown" data-wow-delay="1s">
                                    <div class="plan plan_three">
                                        <h4 class="plan_title">Professional</h4>
                                        <ul>
                                            <li>$860 per month</li>
                                            <li>600GB Storage</li>
                                            <li>6,000GB Transfer</li>
                                            <li>1-hr response</li>
                                        </ul>
                                        <button class="btn btn-warning">SIGN UP</button>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3 wow fadeInRight" data-wow-delay="1.3s">
                                    <div class="plan plan_four">
                                        <h4 class="plan_title">Advanced</h4>
                                        <ul>
                                            <li>$80 per month</li>
                                            <li>1,000GB Storage</li>
                                            <li>10TB Premium</li>
                                            <li>15-min response</li>
                                        </ul>
                                        <button class="btn btn-warning">SIGN UP</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
