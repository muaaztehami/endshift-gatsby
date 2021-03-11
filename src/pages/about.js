import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MultiSlider from "../components/slider/multiSlider"
import SingleSlider from "../components/slider/singleSlider"
import imgs from "../images/sideimg.jpeg"
import svgs from "../images/ibm.svg"
import "../styles/about.scss"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div class="small-container">
        <div class="space-around">
          <small class="small-text">OUR STORY</small>
          <h1 class="extra-larg-text bold-text">The Story of Us</h1>
          <div class="large-text">
            We are a close team of creative professionals based out of Savannah,
            Georgia. We are passionate about partnering with good people and
            organizations to provide exceptional custom solutions.
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: `black`, padding: `100px 0px` }}>
        <div>
          <MultiSlider />
        </div>
      </div>

      <div class="small-container" style={{ maxWidth: `550px` }}>
        <div class="space-around" style={{ textAlign: `center` }}>
          <p>
            "We believe that we can live in a world where every product or
            service has an easy to use experience on all platforms. And our
            mission is to make it happen."
          </p>
          <p style={{ fontWeight: `bold` }}>Tomislav Grubisic</p>
          <small>CEO</small>
        </div>
      </div>

      <div class="small-container">
        <div class="space-around">
          <div class="large-text bold-text" style={{ width: `40%` }}>
            What We Do
          </div>
          <hr />
        </div>
      </div>

      <div class="medium-container flex-container">
        <div class="medium-container-box">
          <img src={imgs} alt="side-img" class="img side-image" />
        </div>
        <div class="medium-container-box">
          <div class="top-box">
            <p class="bold-text">We dont't design in a vacuum.</p>
            <small>
              Customer experiences are comprised of multiple channels,
              touchpoints, interactions and emotions. Our approach considers and
              designs for all moments across the customer journey. We then
              balance customer needs with a rich understanding of internal
              business requirements, systems of people, processes and
              technology. This approach allows us to have the greatest impact
              across all aspects of the brand-service-product ecosystem.
            </small>
            <br />
            <br />
            <br />
            <p class="bold-text">
              We engage with dedicated, multidisciplinary A-teams.
            </p>
            <small>
              Homogenous, siloed, waterfall teams get you equally sterile
              results. On each of our carefully selected client engagements we
              custom craft a small team comprised of top-level researchers,
              designers, strategists and technologists. This team is lead by a
              member of senior leadership. We are deeply integrated with our
              client teams--collaborating, operating and moving quickly together
              across all aspects of the project.
            </small>
            <br />
            <br />
            <br />
            <p class="bold-text">We focus on immediate, tactical results</p>
            <small>
              To stay competitive in today's world, you must quickly and
              intelligently--always be shipping. Rapid prototyping, testing and
              implementation cycles paired with deep user, market and technology
              research allows us the ability to continuously deliver while
              always keeping an eye on the long-term vision.
            </small>
          </div>
          <div class="bottom-box">
            <p class="bold-text">
              We're human-centered. an approach that extends from end users to
              corporate culture.
            </p>
            <small>
              The ultimate success of any objective is driven by the people
              impacted by its results. This is why our approach puts people
              first when making decisions, creating interactions and building
              systems. We spend as much time understanding the environments,
              needs and behaviors of end consumers as we do plotting the
              work-lives and perspectives of the people powering our clients'
              organizations.
            </small>
            <br />
            <br />
            <br />
            <p class="bold-text">
              We craft beauty and delight from the brand to the micro-moment.
            </p>
            <small>
              The progressive, beautiful and delightful aesthetics we create are
              key differentiators for our B2C and B2B clients in today's overly
              saturated digital landscape. We pride ourselves in having some of
              the best visual designers, motion artists, and conetnt creators in
              the industry.
            </small>
          </div>
        </div>
      </div>

      <div class="small-container">
        <div class="space-around flex-container">
          <div>
            <p>People</p>
            <p class="extra-larg-text bold-text">50</p>
          </div>
          <div>
            <p>Projects</p>
            <p class="extra-larg-text bold-text">500+</p>
          </div>
          <div>
            <p>Founded in</p>
            <p class="extra-larg-text bold-text">2009+</p>
          </div>
        </div>
      </div>

      <div style={{ padding: `100px 0px` }}>
        <SingleSlider />
      </div>

      <div class="small-container">
        <div class="large-text bold-text" style={{ width: `40%` }}>
          Our Clients
        </div>
        <hr />
        <div class="flex-container">
          <div class="svg-container">
            <img src={svgs} alt="client-svg" class="svg-img" />
          </div>
          <div class="svg-container">
            <img src={svgs} alt="client-svg" class="svg-img" />
          </div>
          <div class="svg-container">
            <img src={svgs} alt="client-svg" class="svg-img" />
          </div>
          <div class="svg-container">
            <img src={svgs} alt="client-svg" class="svg-img" />
          </div>
          <div class="svg-container">
            <img src={svgs} alt="client-svg" class="svg-img" />
          </div>
          <div class="svg-container">
            <img src={svgs} alt="client-svg" class="svg-img" />
          </div>
        </div>
      </div>

      <div class="small-container" style={{ maxWidth: `550px` }}>
        <div class="space-around" style={{ textAlign: `center` }}>
          <p>
            "We believe that we can live in a world where every product or
            service has an easy to use experience on all platforms. And our
            mission is to make it happen."
          </p>
          <p style={{ fontWeight: `bold` }}>Tomislav Grubisic</p>
          <small>CEO</small>
        </div>
      </div>

      <div>
        <div class="small-container">
          <div class="large-text bold-text" style={{ width: `40%` }}>
            Not Just Some Pretty Faces
          </div>
          <hr />
        </div>
        <div>
          <MultiSlider />
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage
