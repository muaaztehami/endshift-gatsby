/* eslint-disable react/prop-types */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/services.scss"
import scrollDown from "../utils/scrollDown"

const ServicesPage = ({ data }) => {
  const sources = [
    data.big_picture_desktop.childImageSharp.fluid,
    {
      ...data.big_picture_mobile.childImageSharp.fluid,
      media: `(max-width: 480px)`,
    },
  ]
  return (
    <Layout>
      <SEO title="Services" />
      <div className="small-container top-container">
        <div className="space-around">
          <small className="small-text">OUR SERVICES</small>
          <h1 className="extra-larg-text bold-text">Our Craft & Expertise</h1>
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

      <div className="small-container ">
        <div className="large-text bold-text mdeium-text-box">
          Our Craft & Expertise
        </div>
        <hr />
        <div className="flex-container-services">
          <div className="services-box">
            <p className="bold-text" id="discovery-strategy">
              Discovery & Strategy
            </p>
            <small>
              A thoughtful discovery process will help us gain an accurate
              understanding of the breadth and depth of your project so that we
              can develop realistic project recommendations. These initial
              phases also teach us about how we can best work together, and how
              to tailor our approach to ensure success in our project and in
              every aspect of our relationship.
            </small>
            <br />
            <br />
            <small className="bold-text tags">
              <a href="#">Baseline Evaluation</a>
              <a href="#">Research</a>
              <a href="#">Opportunity Analysis and Strategic Planning</a>
              <a href="#">Branding Strategy</a>
              <a href="#">Experience Strategy</a>
              <a href="#">Production Planning</a>
            </small>
            <br />
            <br />
            <br />

            <p className="bold-text" id="branding">
              Branding
            </p>
            <small>
              We don&apos;t just create logos, we help our partners establish an
              all-encompassing brand experience. Cool factor is not the goal --
              we develop brand systems that will generate results and make for
              change.
            </small>
            <br />
            <br />
            <small className="bold-text tags">
              <a href="#">Brand Strategy</a>
              <a href="#">Visual Identity</a>
              <a href="#">Type Design Lettering</a>
              <a href="#">Collateral</a>
              <a href="#">Marketing Materials</a>
              <a href="#">Brand Lunch</a>
              <a href="#">Brand Behaviour</a>
              <a href="#">Additional Brand Assets</a>
              <a href="#">Environmenal Consulting</a>
              <a href="#">Brand Guidelines</a>
            </small>
          </div>
        </div>
      </div>

      <div
        className="space-around"
        style={{
          backgroundColor: `black`,
          color: `white`,
          padding: `1px 0 100px 0px`,
        }}
        id="interactive"
      >
        <div className="small-container flex-container">
          <div className="card-services">
            <div className="card-img-services">
              <Img
                fluid={data.slide01ql.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
            <div>
              <p className="bold-text">Interactive</p>
              <small>
                We bring brands and products to life on the web by creating
                interfaces and interactions that make sense. We learn to think
                like your users, and we seek to present information and actions
                where, and how, they look for them.
              </small>
              <br />
              <br />
              <small className="bold-text">
                Content Strategy, User Experience, Interface Design, Content
                Design, Information Architecture, User Flow Mapping, Wireframing
                and Prototyping, Visual Design, Responsive Design, UI Kits and
                Pattern Libraries.
              </small>
            </div>
          </div>
          <div className="card-services">
            <div className="card-img-services">
              <Img
                fluid={data.slide02ql.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
            <div>
              <p className="bold-text">Interactive</p>
              <small>
                We bring brands and products to life on the web by creating
                interfaces and interactions that make sense. We learn to think
                like your users, and we seek to present information and actions
                where, and how, they look for them.
              </small>
              <br />
              <br />
              <small className="bold-text">
                Content Strategy, User Experience, Interface Design, Content
                Design, Information Architecture, User Flow Mapping, Wireframing
                and Prototyping, Visual Design, Responsive Design, UI Kits and
                Pattern Libraries.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="big-container flex-container right-box">
        <div className="card-services big-container-img">
          <p className="bold-text">Discovery & Statergy</p>
          <small>
            We bring brands and products to life on the web by creating
            interfaces and interactions that make sense. We learn to think like
            your users, and we seek to present information and actions where,
            and how, they look for them.
          </small>
          <br />
          <br />
          <small className="bold-text">
            Content Strategy, User Experience, Interface Design, Content Design,
            Information Architecture, User Flow Mapping, Wireframing and
            Prototyping, Visual Design, Responsive Design, UI Kits and Pattern
            Libraries.
          </small>
        </div>

        <div className="card-services">
          <Img
            fluid={data.slide02ql.childImageSharp.fluid}
            alt="slide-1"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>
      </div>

      <div className="big-container flex-container-reverse left-box">
        <div className="card-services">
          <Img
            fluid={data.slide02ql.childImageSharp.fluid}
            alt="slide-1"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>
        <div className="card-services big-container-img">
          <p className="bold-text">Branding</p>
          <small>
            We don&apos;t just create logos, we help our partners establish an
            all-encompassing brand experience. Cool factor is not the goal -- we
            develop brand systems that will generate results and make for
            change.
          </small>
          <br />
          <br />
          <small className="bold-text">
            Content Strategy, User Experience, Interface Design, Content Design,
            Information Architecture, User Flow Mapping, Wireframing and
            Prototyping, Visual Design, Responsive Design, UI Kits and Pattern
            Libraries.
          </small>
        </div>
      </div>

      <div className="big-picture space-around">
        <Img
          fluid={sources}
          alt="slide-1"
          style={{ maxWidth: `100%`, maxHeight: `100%` }}
        />
      </div>

      <div className="small-container bold-text">
        <div className="large-text">Need Interactive Services?</div>
        <hr className="space-around" />
        <button type="button" className="btn btn-light btn-align">
          Let&apos;s chat about your needs.
        </button>
      </div>
    </Layout>
  )
}
export default ServicesPage

export const data = graphql`
  query {
    slide01ql: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide02ql: file(relativePath: { eq: "office1.jpeg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    big_picture_desktop: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    big_picture_mobile: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
