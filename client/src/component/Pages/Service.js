// import { set } from 'mongoose';
import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class Service extends Component {
  constructor(props) {
    super(props);
    this.state = { setModal: false };
    this.toggle = this.toggle.bind(this);

    const { buttonLabel, className } = props;
  }
  toggle() {
    this.setState({ setModal: !this.state.setModal });
    console.log(this.state.setModal);
  }
  // toggle = (modal) => modal.setModal = !false
  render() {
    // const {
    //   buttonLabel,
    //   className
    // } = props;

    return (
      <div>
        {/* 
<Button color="danger" onClick={this.toggle}>newwww</Button>
      <Modal isOpen={this.state.setModal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
        <main id="main">
          <section id="services" class="section-bg">
            <div class="container">
              <header class="section-header">
                <h3>Services</h3>
                <p>100% Verified</p>
              </header>
              <div class="row">
                <div
                  class="col-md-6 col-lg-4 wow bounceInUp"
                  data-wow-duration="1.4s"
                >
                  <div class="box">
                    <div class="icon" style={{ background: "#fceef3" }}>
                      <i
                        class="ion-ios-analytics-outline"
                        style={{ color: "#ff689b" }}
                      ></i>
                    </div>
                    <h4 class="title">
                      <a href="">Fully Responsive Website</a>
                    </h4>
                    <p class="description">
                      HTML, CSS, Javascript, Wordpress and Jumla User Friendly
                      and easy to Navigate Website. Advertise your business with
                      a sleek new website and keep up to date with your
                      competitors. We make websites that work fluidly across all
                      platforms.
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 col-lg-4 wow bounceInUp"
                  data-wow-duration="1.4s"
                >
                  <div class="box">
                    <div class="icon" style={{ background: "#fff0da" }}>
                      <i
                        class="ion-ios-bookmarks-outline"
                        style={{ color: "#e98e06" }}
                      ></i>
                    </div>
                    <h4 class="title">
                      <a href="">Video Editing</a>
                    </h4>
                    <p class="description">
                      We can resonate with your style, branding or vision so
                      that the final cut will look exactly as you want.Our video
                      editing services go above and beyond. Our company can come
                      up with new creative ideas, bring new perspectives to the
                      table, all while making sure your requirements are met.
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 col-lg-4 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div class="box">
                    <div class="icon" style={{ background: "#eafde7" }}>
                      <i
                        class="ion-ios-speedometer-outline"
                        style={{ color: "#41cf2e" }}
                      ></i>
                    </div>
                    <h4 class="title">
                      <a href="">Graphic Design and Photography</a>
                    </h4>
                    <p class="description">
                      We provide a full graphic design service to help you
                      communicate your message using colour, style, typography,
                      illustration and creative ideas. We can either work with
                      your existing branding or we can create a new brand for
                      you.
                    </p>
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-4 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div class="box">
                    <div class="icon" style={{ background: "#e6fdfc" }}>
                      <i
                        class="ion-ios-paper-outline"
                        style={{ color: "#3fcdc7" }}
                      ></i>
                    </div>
                    <h4 class="title">
                      <a href="">SEO Friendly</a>
                    </h4>
                    <p class="description">
                      Accessable by users all over the world,We figure out what
                      your customers are looking for, and try to naturally get
                      more of your target audience to land on your site. SEO is
                      about connecting your customers with your business.
                    </p>
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-4 wow bounceInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="1.4s"
                >
                  <div class="box">
                    <div class="icon" style={{ background: "#e1eeff" }}>
                      <i
                        class="ion-ios-world-outline"
                        style={{ color: "#2282ff" }}
                      ></i>
                    </div>
                    <h4 class="title">
                      <a href="">Customize Easily</a>
                    </h4>
                    <p class="description">
                      You decide exactly how much you want to charge for each
                      customization. Set rules that control prices based on
                      quantity, setup costs, number of colors, and
                      personalization areas.
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 col-lg-4 wow bounceInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="1.4s"
                >
                  <div class="box">
                    <div class="icon" style={{ background: "#ecebff" }}>
                      <i
                        class="ion-ios-clock-outline"
                        style={{ color: "#8660fe" }}
                      ></i>
                    </div>
                    <h4 class="title">
                      <a href="">Quick Support</a>
                    </h4>
                    <p class="description">
                      Alway Available for your service. Quick support is a
                      solution for remotely accessing computers and mobile
                      devices to provide support when you don't have an
                      unattended support agent program
                    </p>
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
