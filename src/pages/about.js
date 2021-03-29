/* eslint-disable react/prop-types */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutSlider from "../components/slider/aboutSlider"
import AuthorsSlider from "../components/slider/authorsSlider"
import MainSlider from "../components/slider/mainSlider"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import svgs from "../images/ibm.svg"
import "../styles/about.scss"
import AuthorsSliderMobile from "../components/mobileViews/authorsSliderMobile"
import scrollDown from "../utils/scrollDown"

export const aboutSlider = () => {}
const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="small-container top-container">
        <div className="space-around">
          <small className="small-text">OUR STORY</small>
          <h1 className="extra-larg-text bold-text">The Story of Us</h1>
          <div className="large-text">
            We are a close team of creative professionals based out of Savannah,
            Georgia. We are passionate about partnering with good people and
            organizations to provide exceptional custom solutions.
          </div>
        </div>
      </div>

      <div
        className="mid-scroll-btn scroll-margin-m"
        style={{
          marginBottom: `20px`,
        }}
      >
        <button
          type="button"
          className="btn btn-light btn-align"
          onClick={scrollDown}
        >
          Scroll down
        </button>
      </div>

      <div style={{ backgroundColor: `black`, padding: `100px 0px` }}>
        <div>
          <AboutSlider />
        </div>
      </div>

      <div className="small-container" style={{ maxWidth: `550px` }}>
        <div className="space-around" style={{ textAlign: `center` }}>
          <p>
            &quot;We believe that we can live in a world where every product or
            service has an easy to use experience on all platforms. And our
            mission is to make it happen.&quot;
          </p>
          <p style={{ fontWeight: `bold` }}>Tomislav Grubisic</p>
          <small>CEO</small>
        </div>
      </div>

      <div className="small-container">
        <div className="space-around">
          <div className="large-text bold-text mdeium-text-box">What We Do</div>
          <hr />
        </div>
      </div>

      <div className="medium-container flex-container">
        <div className="about-box hide" style={{ alignSelf: `flex-end` }}>
          <div style={{ height: `60%` }}>
            <Img
              fluid={data.sideimg.childImageSharp.fluid}
              alt="slide-1"
              style={{
                width: `100%`,
                height: `100%`,
              }}
            />
          </div>
        </div>
        <div className="about-box">
          <div className="top-box">
            <p className="bold-text">We don&apos;t design in a vacuum.</p>
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
            <p className="bold-text">
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
            <p className="bold-text">We focus on immediate, tactical results</p>
            <small>
              To stay competitive in today&apos;s world, you must quickly and
              intelligently--always be shipping. Rapid prototyping, testing and
              implementation cycles paired with deep user, market and technology
              research allows us the ability to continuously deliver while
              always keeping an eye on the long-term vision.
            </small>
          </div>
          <div className="small-screen" style={{ height: `fit-content` }}>
            <Img
              fluid={data.sideimg.childImageSharp.fluid}
              alt="slide-1"
              style={{
                width: `100%`,
                height: `100%`,
              }}
            />
          </div>
          <div classNaem="bottom-box">
            <p className="bold-text">
              We&apos;re human-centered. an approach that extends from end users
              to corporate culture.
            </p>
            <small>
              The ultimate success of any objective is driven by the people
              impacted by its results. This is why our approach puts people
              first when making decisions, creating interactions and building
              systems. We spend as much time understanding the environments,
              needs and behaviors of end consumers as we do plotting the
              work-lives and perspectives of the people powering our
              clients&apos; organizations.
            </small>
            <br />
            <br />
            <br />
            <p className="bold-text">
              We craft beauty and delight from the brand to the micro-moment.
            </p>
            <small>
              The progressive, beautiful and delightful aesthetics we create are
              key differentiators for our B2C and B2B clients in today&apos;s
              overly saturated digital landscape. We pride ourselves in having
              some of the best visual designers, motion artists, and conetnt
              creators in the industry.
            </small>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="space-around flex-container">
          <div className="small-box">
            <p>People</p>
            <p className="extra-larg-text bold-text">50</p>
          </div>
          <div className="small-box">
            <p>Projects</p>
            <p className="extra-larg-text bold-text">500+</p>
          </div>
          <div className="small-box">
            <p>Founded in</p>
            <p className="extra-larg-text bold-text">2009+</p>
          </div>
        </div>
      </div>

      <div style={{ padding: `100px 0px` }}>
        <MainSlider />
      </div>

      <div className="small-container">
        <div className="large-text bold-text mdeium-text-box">Our Clients</div>
        <hr />
        <div className="flex-container">
          <div className="svg-container">
            <img src={svgs} alt="client-svg" className="svg-img" />
          </div>
          <div className="svg-container">
            <img src={svgs} alt="client-svg" className="svg-img" />
          </div>
          <div className="svg-container">
            <img src={svgs} alt="client-svg" className="svg-img" />
          </div>
          <div className="svg-container">
            <img src={svgs} alt="client-svg" className="svg-img" />
          </div>
          <div className="svg-container">
            <img src={svgs} alt="client-svg" className="svg-img" />
          </div>
          <div className="svg-container">
            <img src={svgs} alt="client-svg" className="svg-img" />
          </div>
        </div>
      </div>

      <div className="small-container" style={{ maxWidth: `550px` }}>
        <div className="space-around" style={{ textAlign: `center` }}>
          <p>
            &quot;We believe that we can live in a world where every product or
            service has an easy to use experience on all platforms. And our
            mission is to make it happen.&quot;
          </p>
          <p style={{ fontWeight: `bold` }}>Tomislav Grubisic</p>
          <small>CEO</small>
        </div>
      </div>

      <div>
        <div className="small-container">
          <div className="large-text bold-text">Not Just Some Pretty Faces</div>
          <hr />
        </div>
        <div className="big-screen">
          <AuthorsSlider />
        </div>
        <div className="small-screen">
          <AuthorsSliderMobile />
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage

export const data = graphql`
  query {
    sideimg: file(relativePath: { eq: "sideimg.jpeg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 600, maxHeight: 780) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
