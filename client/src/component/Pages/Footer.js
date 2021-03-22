import React from 'react'
export default function Footer() {
    return (
        <div>
<footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">

        <div class="row">

          <div class="col-lg-6">
            <div class="row">
                <div class="col-sm-6">
                  <div class="footer-info">
                    <h3>UICSOFT</h3>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                  </div>

                  <div class="footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem.</p>
                    <form action="" method="post">
                      <input type="email" name="email"/><input type="submit"  value="Subscribe"/>
                    </form>
                  </div>

                </div>

                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#about">About us</a></li>
                      <li><a href="#service">Services</a></li>
                      <li><a href="#about">About Us</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><a href="#portfolio">Portfolio</a></li>
                      <li><a href="#team">Team</a></li>

                    </ul>
                  </div>

                  <div class="footer-links">
                    <h4>Contact Us</h4>
                    <p>
                     <p> A108 Adam Street    </p> 
                     <p> New York, NY 535022 </p>
                     <p> United States </p> 
                      <strong>Phone:</strong> +234 8160880412
                      <strong>           Email:</strong>      uicsoft1@gmail.com
                    </p>
                  </div>

                  <div class="social-links">
                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                  </div>

                </div>

            </div>

          </div>

          <div class="col-lg-6">

            <div id="footers" class="form">
              
              <h4>Send us a message</h4>
              {/* <p>Eos ipsa est voluptates. Nostrum nam libero ipsa vero. Debitis quasi sit eaque numquam similique commodi harum aut temporibus.</p> */}
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
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validation"></div>
                </div>

                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>

                <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>
            </div>

          </div>

          

        </div>

      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright. All Rights Reserved
      </div>
      <div class="credits">
      
        Designed by <a href="">Ugwu Isaac Chinenye</a>
      </div>
    </div>
  </footer>



{/*             
        <section id="footer"></section>
            <footer className="footer">
            
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-sm-7">
                                    <p>Copyright &copy; 2019 Uic Soft Company</p>
                                    <small>Designed by <a rel="nofollow" href="#" style={{color:"blue"}}
                                            target="_parent">Ugwu Isaac</a></small>
                                </div>
                                <div class="col-md-4 col-sm-5">
                                    <ul class="social-icon">
                                        <li><a  href="https://www.facebook.com/ugwu.isaac.5"
                         class="fa fa-facebook"></a></li>
                                        <li><a  href="https://www.linkedin.com/in/isaac-ugwu-2b6355193"
                          class="fa fa-linkedin"></a></li>
                                        <li><a href="https://www.instagram.com/ugwu.chi"
                           class="fa fa-instagram"></a></li>
                                        <li><a    href="https://ugwuisaaciu@gmail.com"
                        class="fa fa-google"></a></li>
                                        <li><a  href="https://github.com/Pchib"
                          class="fa fa-github"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>	 */}
        </div>
    )
}
