import React, { Component } from "react";

export default class testimonials extends Component {
  render() {
    return (
      <div>
        <section id="testimonials">
          <div class="container">
            <header class="section-header">
              <h3>Testimonials</h3>
            </header>

            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="owl-carousel testimonials-carousel wow fadeInUp">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonial-1.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Abuchi</h3>
                    <h4>Graphic Designer</h4>
                    <p>
                      UICSoft is a wonderful place to work. they were very
                      patient in working with us, very professional, easy to
                      work with, and very responsive. I would highly recommend
                      UICSoft to anyone looking for design services!{" "}
                    </p>
                  </div>

                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonial-2.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Grace</h3>
                    <h4>Analyst</h4>
                    <p>
                      To be honest I didn’t know the first thing about web
                      programming. I found dozens of sites and examples that got
                      me going a little bit, but it wasn’t until UICSoft began
                      that it made any sense to me and started to stick.{" "}
                    </p>
                  </div>

                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonial-3.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Emmanuel</h3>
                    <h4>Junior Developer</h4>
                    <p>
                      I’ve always been a geek, and I’ve known my way around
                      computers for a long time, but until recently I only had
                      basic coding skills. I wanted to learn more to be able to
                      better manage and direct developers, to understand the
                      details - the possibilities and limitations - of what we
                      might offer a client. That’s why I signed up for UICSoft.{" "}
                    </p>
                  </div>

                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonial-4.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Joel</h3>
                    <h4>Freelancer</h4>
                    <p>
                      UICSoft is very professional, prompt, and a pleasure to
                      work with from start to finish. they came up with the best
                      Tech Solution that I am very happy with and proud to post
                      it everywhere.{" "}
                    </p>
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
