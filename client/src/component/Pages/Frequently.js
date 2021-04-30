import React, { Component } from "react";

export default class Frequently extends Component {
  render() {
    return (
      <div>
        <section id="faq">
          <div class="container">
            <header class="section-header">
              <h3>Frequently Asked Questions</h3>
              <p>
                Based on over the years of experience and questions we receive
                from our clients, we wrote down a list of Frequently Asked
                Questions (FAQ). We hope that it will help you better understand
                the issues related to software development.
              </p>
            </header>

            <ul id="faq-list" class="wow fadeInUp">
              <li>
                <a data-toggle="collapse" class="collapsed" href="#faq1">
                  What can you help me with?<i class="ion-android-remove"></i>
                </a>
                <div id="faq1" class="collapse" data-parent="#faq-list">
                  <p>
                    With whatever we can. Preparing cost analysis, establishing
                    team roles, creating roadmaps. Defining business goals, key
                    business values, target users, main features, prioritising.
                    We can find you similar projects that are already active on
                    the market to benchmark against. We can assist you with
                    creating user personas, mock-ups, user stories, time frame,
                    establishing project status and preparing project
                    estimation. We'll be happy to outline project specification,
                    prepare wireframes, details concerning integrations with
                    external services, API documentation, required features
                    list. In terms of project development we prepare server-side
                    architecture, front end, back end, graphic and UX design,
                    and create back-office consoles. We are also happy to advise
                    our customers in terms of budgeting, scheduling, risk
                    management, and business model creation.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq2" class="collapsed">
                  How do I create a product with you?{" "}
                  <i class="ion-android-remove"></i>
                </a>
                <div id="faq2" class="collapse" data-parent="#faq-list">
                  <p>
                    If you have an idea contact us by our online form, e-mail or
                    phone. We'll meet and talk it over. Just be sure to prepare
                    as much info about your idea as possible, it will smoothen
                    the meeting and benefit further cooperation. If you don't
                    know how to get around to it, go ahead and read our blog
                    entry on how to write a project brief.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq3" class="collapsed">
                  Should I create a mobile or a web app?{" "}
                  <i class="ion-android-remove"></i>
                </a>
                <div id="faq3" class="collapse" data-parent="#faq-list">
                  <p>
                    Both have their benefits and flaws. Mobile apps are surely
                    more expensive but can provide you with many more data
                    collecting, monetisation capabilities than web applications.
                    Progressive Web Apps are a good compromise between a mobile
                    and web app — you can learn more about PWA on our blog. But
                    remember that sooner or later you may need both mobile and
                    web app and when that moment comes we are here for you .
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq4" class="collapsed">
                  {" "}
                  What do I need to know before contacting you?{" "}
                  <i class="ion-android-remove"></i>
                </a>
                <div id="faq4" class="collapse" data-parent="#faq-list">
                  <p>
                    Well, the most important thing to know is what do you want
                    to accomplish. Why do I need this software? What for? What
                    should it do? Having a clear vision in mind is crucial when
                    ordering a software application. You don't want to spend
                    many months developing it with us without being sure what
                    you need. If you have no experience in app development feel
                    free to read our blog entry on that topic. We'll also be
                    glad to help you get started, building projects from scratch
                    is nothing new for us.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq5" class="collapsed">
                  {" "}
                  How much time will it take for you to make my app?{" "}
                  <i class="ion-android-remove"></i>
                </a>
                <div id="faq5" class="collapse" data-parent="#faq-list">
                  <p>
                    To give you a precise answer we must prepare a project scope
                    and create a budget. We shall tell you how much of that
                    scope can be completed within the budget and we'll be able
                    to estimate how long will it take after at least a month of
                    work. Don't worry, if you're not happy with our work after
                    two weeks you can retract from the project with no
                    penalties, this is our trial period and we believe that any
                    reliable software house should give you one. Read our blog
                    entry to learn more about our methods.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq6" class="collapsed">
                  {" "}
                  How do you guarantee product quality?
                  <i class="ion-android-remove"></i>
                </a>
                <div id="faq6" class="collapse" data-parent="#faq-list">
                  <p>
                    We evaluate the result after every two weeks, we test our
                    work (we conduct both development and acceptance tests), we
                    present it to you, we apply your feedback so you know you
                    get what you are paying for.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq6" class="collapsed">
                  How can I be sure you work at my project as much as you
                  declare?<i class="ion-android-remove"></i>
                </a>
                <div id="faq6" class="collapse" data-parent="#faq-list">
                  <p>
                    We thoroughly monitor our developers and control how much
                    time they spend on each task down to the exact minute. We
                    use Harvest software and Redmine to track time spent on your
                    project.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq6" class="collapsed">
                  I want to be involved in the app development process, do you
                  have a problem with that?<i class="ion-android-remove"></i>
                </a>
                <div id="faq6" class="collapse" data-parent="#faq-list">
                  <p>
                    Not at all! We want you to be sure you'll receive the
                    product you desire. From the planning stage to each finished
                    version, we invite you to evaluate and improve our work. Our
                    philosophy is to work with the client, not merely finish
                    given tasks. We are always ready to listen and communicate.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq6" class="collapsed">
                  Why should I choose you and not hire my own software
                  development team?<i class="ion-android-remove"></i>
                </a>
                <div id="faq6" class="collapse" data-parent="#faq-list">
                  <p>
                    Hiring your own software developers can be a really smart
                    choice, however, recruitment process is time-consuming and
                    the costs of keeping an in-house programming team are very
                    high. You'll probably need to employ your own software
                    engineers sooner or later but hiring us can help you save a
                    lot of money and time (which is basically the same in a
                    business project).
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq6" class="collapsed">
                  What happens after you finish my app?
                  <i class="ion-android-remove"></i>
                </a>
                <div id="faq6" class="collapse" data-parent="#faq-list">
                  <p>
                    Hopefully the app is exactly what you dreamed of :) But
                    apart from delivering a finished product, we are happy to
                    provide you with technical support and app maintenance
                    should you need it. After all, we know our work inside out.
                    Of course if you want to maintain the app by yourself the
                    source code and all technical data is at your disposal, but
                    even in that case, feel free to contact us if you need any
                    help.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq6" class="collapsed">
                  {" "}
                  Are you able to double the size of the team involved in the
                  project if the need arises?<i class="ion-android-remove"></i>
                </a>
                <div id="faq6" class="collapse" data-parent="#faq-list">
                  <p>
                    Whether you want to expand your product or create a
                    completely new one simultaneously, and then again focus only
                    on one of your projects, we are always ready to adapt to
                    your requirements. If the work is less intense team size can
                    be reduced. When improvements need to be implemented fast,
                    we can quickly assign additional team members to speed up
                    each phase of the development process.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
