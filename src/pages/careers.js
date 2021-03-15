import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/services.scss"
import CareersSlider from "../components/slider/careersSlider"
import MainSlider from "../components/slider/mainSlider"

const CareersPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Services" />
      <div class="small-container">
        <div class="space-around">
          <small class="small-text">CAREERS</small>
          <h1 class="extra-larg-text bold-text">We're all in this together</h1>
          <div class="large-text">
            Join a team of passionate digital technology experts who create
            progress every day and take care of each other every step of the
            way.
          </div>
        </div>
      </div>

      <div style={{ padding: `100px 0px` }}>
        <CareersSlider />
      </div>

      <div class="small-container ">
        <div class="large-text bold-text">Do great work</div>
        <hr />
        <div class="flex-container-services">
          <div class="services-box">
            <p class="bold-text">What is great work?</p>
            <small>
              Great work has a purpose, it solves a problem, it creates ways for
              people to connect. If it wins awards or if other people think it's
              cool then that's nice, we guess, but that's not why we do it. We
              do it because it has impact, it helps someone, it makes their
              lives eaiser or better or just more fun.
            </small>
            <br />
            <br />
            <br />

            <p class="bold-text">Who we work with</p>
            <small>
              We work with industry leaders and startups with big dreams. Our
              clients are transforming transportation, news, payments,
              entertainment, communication, fashion, and so on. And we're here
              with them every step of the way.
            </small>
            <br />
            <br />
            <br />

            <p class="bold-text">How we are growing</p>
            <small>
              Ueno has doubled in size every two years since we founded. In 2019
              we ranked in the top 255 on the Inc 5000 of the fastest growing
              companies in the USA, and we're not slowing down any time soon.
              We've done this without sacrificing culture or quality.
            </small>
          </div>
        </div>
      </div>

      <div
        class="space-around"
        style={{
          padding: `1px 0 100px 0px`,
          backgroundColor: `#f0f5f4`,
        }}
      >
        <div class="small-container">
          <div class="large-text bold-text">
            Do great work in a strong culture
          </div>
          <hr />
          <div class="flex-container-services">
            <div class="services-box">
              <small>
                Culture is one of those words. People throw it around a lot.
                It's hard to define exactly what it is. But it's something you
                feel pretty much straight away.
              </small>
              <br />
              <br />
              <br />

              <small>
                We're not going to lie. The culture at Ueno isn't perfect. Like
                every group of people we have our issues. But we are all
                dedicated to continuing to improve, and we think that's a pretty
                good start.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: `100px 0px` }}>
        <MainSlider />
      </div>

      <div
        class="space-around"
        style={{
          padding: `1px 0 100px 0px`,
        }}
      >
        <div class="small-container flex-container">
          <div class="card-services">
            <p class="bold-text">Interactive</p>
            <small>
              We bring brands and products to life on the web by creating
              interfaces and interactions that make sense. We learn to think
              like your users, and we seek to present information and actions
              where, and how, they look for them.
            </small>
            <br />
            <br />
            <br />
            <p class="bold-text">Interactive</p>
            <small>
              We bring brands and products to life on the web by creating
              interfaces and interactions that make sense. We learn to think
              like your users, and we seek to present information and actions
              where, and how, they look for them.
            </small>
          </div>
          <div class="card-services">
            <p class="bold-text">Interactive</p>
            <small>
              We bring brands and products to life on the web by creating
              interfaces and interactions that make sense. We learn to think
              like your users, and we seek to present information and actions
              where, and how, they look for them.
            </small>
            <br />
            <br />
            <br />
            <p class="bold-text">Interactive</p>
            <small>
              We bring brands and products to life on the web by creating
              interfaces and interactions that make sense. We learn to think
              like your users, and we seek to present information and actions
              where, and how, they look for them.
            </small>
          </div>
        </div>
      </div>

      <div class="small-container bold-text">
        <div class="large-text">Need Interactive Services?</div>
        <hr class="space-around" />
        <button type="button" class="btn btn-light btn-align">
          Let's chat about your needs.
        </button>
      </div>
    </Layout>
  )
}

export default CareersPage
