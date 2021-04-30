import React, { Component } from "react";

export default class Pricing extends Component {
  render() {
    return (
      <div>
        <section id="pricing" class="wow fadeInUp section-bg">
          <div class="container">
            <header class="section-header">
              <h3>Pricing</h3>
              <p>Best, Easy and Affordable</p>
            </header>

            <div class="row flex-items-xs-middle flex-items-xs-center">
              <div class="col-xs-12 col-lg-4">
                <div class="card">
                  <div class="card-header">
                    <h3>
                      <span class="currency">$</span>19
                      <span class="period">/month</span>
                    </h3>
                  </div>
                  <div class="card-block">
                    <h4 class="card-title">Basic Plan</h4>
                    <ul class="list-group">
                      <li class="list-group-item">100GB Storage</li>
                      <li class="list-group-item">1,000GB Transfer></li>
                      <li class="list-group-item">24/7 Support System</li>
                    </ul>
                    <a href="#" class="btn">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-lg-4">
                <div class="card">
                  <div class="card-header">
                    <h3>
                      <span class="currency">$</span>29
                      <span class="period">/month</span>
                    </h3>
                  </div>
                  <div class="card-block">
                    <h4 class="card-title">Regular Plan</h4>
                    <ul class="list-group">
                      <li class="list-group-item">200GB Storage</li>
                      <li class="list-group-item">2,000GB Transfer</li>
                      <li class="list-group-item">24/7 Support System</li>
                    </ul>
                    <a href="#" class="btn">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-lg-4">
                <div class="card">
                  <div class="card-header">
                    <h3>
                      <span class="currency">$</span>39
                      <span class="period">/month</span>
                    </h3>
                  </div>
                  <div class="card-block">
                    <h4 class="card-title">Premium Plan</h4>
                    <ul class="list-group">
                      <li class="list-group-item">300GB Storage</li>
                      <li class="list-group-item">3,000GB Transfer</li>
                      <li class="list-group-item">24/7 Support System</li>
                    </ul>
                    <a href="#" class="btn">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    
      </div>
    );
  }
}
