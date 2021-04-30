import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <main id="main">
          <section id="portfolio" class="section-bg">
            <div class="container">
              <header class="section-header">
                <h3 class="section-title">Our Portfolio</h3>
              </header>

              <div class="row">
                <div class="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter="*" class="filter-active">
                      All
                    </li>
                    <li data-filter=".filter-web">Web</li>
                    <li data-filter=".filter-card">Graphic</li>
                    <li data-filter=".filter-app">App</li>
                  </ul>
                </div>
              </div>

              <div class="row portfolio-container">
                <div class="col-lg-4 col-md-6 col-xs-12 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/app3.png"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h4>
                        <a href="#">Uic Chat</a>
                      </h4>
                      <p>React App</p>
                      <div>
                        <a
                          href="assets/img/portfolio/app3.png"
                          data-lightbox="portfolio"
                          data-title="App 1"
                          class="link-preview"
                          title="Preview"
                        >
                          <i class="ion ion-eye"></i>
                        </a>
                        <a href="#" class="link-details" title="More Details">
                          <i class="ion ion-android-open"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 col-xs-12 portfolio-item filter-web"
                  data-wow-delay="0.1s"
                >
                  <div class="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/web3.png"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h4>
                        <a href="#">Uic Exam Portal</a>
                      </h4>
                      <p>React Web App</p>
                      <div>
                        <a
                          href="assets/img/portfolio/web3.png"
                          class="link-preview"
                          data-lightbox="portfolio"
                          data-title="Web 3"
                          title="Preview"
                        >
                          <i class="ion ion-eye"></i>
                        </a>
                        <a href="#" class="link-details" title="More Details">
                          <i class="ion ion-android-open"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 col-xs-12 portfolio-item filter-app"
                  data-wow-delay="0.2s"
                >
                  <div class="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/app2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h4>
                        <a href="#">App 2</a>
                      </h4>
                      <p>App</p>
                      <div>
                        <a
                          href="assets/img/portfolio/app2.jpg"
                          class="link-preview"
                          data-lightbox="portfolio"
                          data-title="App 2"
                          title="Preview"
                        >
                          <i class="ion ion-eye"></i>
                        </a>
                        <a href="#" class="link-details" title="More Details">
                          <i class="ion ion-android-open"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-xs-12 portfolio-item filter-card">
                  <div class="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/card2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h4>
                        <a href="#">Card 2</a>
                      </h4>
                      <p>Card</p>
                      <div>
                        <a
                          href="assets/img/portfolio/card2.jpg"
                          class="link-preview"
                          data-lightbox="portfolio"
                          data-title="Card 2"
                          title="Preview"
                        >
                          <i class="ion ion-eye"></i>
                        </a>
                        <a href="#" class="link-details" title="More Details">
                          <i class="ion ion-android-open"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 col-xs-12 portfolio-item filter-web"
                  data-wow-delay="0.2s"
                >
                  <div class="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/web1.png"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h4>
                        <a href="#">HLSGlobal</a>
                      </h4>
                      <p>WordPress</p>
                      <div>
                        <a
                          href="assets/img/portfolio/web1.png"
                          target="_blank"
                          class="link-preview"
                          data-lightbox="portfolio"
                          data-title="Web 1"
                          title="Preview"
                        >
                          <i class="ion ion-eye"></i>
                        </a>
                        <a
                          href="https://www.healthylivingshows.com/virtual-cook-show/"
                          target="_blank"
                          class="link-details"
                          title="More Details"
                        >
                          <i class="ion ion-android-open"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 col-xs-12 portfolio-item filter-web"
                  data-wow-delay="0.1s"
                >
                  <div class="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/web2.png"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h4>
                        <a href="#">Uic Store</a>
                      </h4>
                      <p>E-Commerce</p>
                      <div>
                        <a
                          href="assets/img/portfolio/web2.png"
                          class="link-preview"
                          data-lightbox="portfolio"
                          data-title="Web 2"
                          title="Preview"
                        >
                          <i class="ion ion-eye"></i>
                        </a>
                        <a href="#" class="link-details" title="More Details">
                          <i class="ion ion-android-open"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 col-xs-12 portfolio-item filter-app"
                  data-wow-delay="0.2s"
                >
                  <div class="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/app1.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h4>
                        <a href="#">App 3</a>
                      </h4>
                      <p>App</p>
                      <div>
                        <a
                          href="assets/img/portfolio/app3.png"
                          class="link-preview"
                          data-lightbox="portfolio"
                          data-title="App 3"
                          title="Preview"
                        >
                          <i class="ion ion-eye"></i>
                        </a>
                        <a href="#" class="link-details" title="More Details">
                          <i class="ion ion-android-open"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-xs-12 portfolio-item filter-card">
                  <div class="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/card1.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h4>
                        <a href="#">Card 1</a>
                      </h4>
                      <p>Card</p>
                      <div>
                        <a
                          href="assets/img/portfolio/card1.jpg"
                          class="link-preview"
                          data-lightbox="portfolio"
                          data-title="Card 1"
                          title="Preview"
                        >
                          <i class="ion ion-eye"></i>
                        </a>
                        <a href="#" class="link-details" title="More Details">
                          <i class="ion ion-android-open"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 col-xs-12 portfolio-item filter-card"
                  data-wow-delay="0.1s"
                >
                  <div class="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/card3.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h4>
                        <a href="#">Card 3</a>
                      </h4>
                      <p>Card</p>
                      <div>
                        <a
                          href="assets/img/portfolio/card3.jpg"
                          class="link-preview"
                          data-lightbox="portfolio"
                          data-title="Card 3"
                          title="Preview"
                        >
                          <i class="ion ion-eye"></i>
                        </a>
                        <a href="#" class="link-details" title="More Details">
                          <i class="ion ion-android-open"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

            </div>
    );
  }
}
