/* eslint-disable react/prop-types */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import BlogsSlider from "../components/slider/blogsSlider"
import BlogsSliderMobile from "../components/mobileViews/blogsSliderMobile"
import scrollDown from "../utils/scrollDown"
import BackgroundImage from "gatsby-background-image"

const IndexPage = ({ data }) => {
  const sources = [
    data.home_banner_desktop.childImageSharp.fluid,
    {
      ...data.home_banner_mobile.childImageSharp.fluid,
      media: `(max-width: 480px)`,
    },
  ]
  return (
    <Layout>
      <SEO title="Home" />
      <div className="small-container top-container">
        <div className="space-around">
          <small className="small-text">WE ARE ENDSHIFT</small>
          <h1 className="extra-larg-text bold-text">Solutions by design</h1>
          <div className="large-text">
            We build identities and experiences to elevate and empower
            organizations.
          </div>
        </div>
        <div className="space-around">
          <Link
            to="/contact_us"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            Contact us
          </Link>
        </div>
      </div>
      <div className="flex-container-reverse">
        <div
          className="small-container full-image"
          style={{ margin: `0 0 0 auto` }}
        >
          <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
            <Img
              fluid={sources}
              alt="slide-1"
              style={{ maxWidth: `100%`, maxHeight: `100%` }}
            />
          </div>
        </div>
        <div className="side-scroll-btn">
          <button
            type="button"
            className="btn btn-light btn-align"
            onClick={scrollDown}
          >
            Scroll down
          </button>
        </div>
      </div>
      <div className="small-container">
        <div className="space-around">
          <small className="small-text">WHAT WE DO</small>
          <div className="large-text bold-text mdeium-text-box">
            Let&apos;s Build Something Great. Together.
          </div>
        </div>
        <hr />
        <div className="flex-container-reverse">
          <div className="box">
            <button type="button" className="btn btn-light btn-align">
              Learn more
            </button>
          </div>
          <div className="box">
            <small>
              Dolore ut ipsum deserunt amet non nisi eu do irure eu eiusmod sit
              laborum. Nisi velit fugiat culpa proident commodo occaecat
              cupidatat nostrud. Sit id sunt do amet aute aliqua mollit tempor
              aliquip ex ea labore. Anim nulla nulla amet enim esse consectetur
              nostrud ea nostrud cillum exercitation ad tempor non. Nisi ex
              irure mollit consequat commodo ipsum.
            </small>
          </div>
        </div>

        <div className="flex-container space-around">
          <div className="card mobile-card">
            <div className="card-image">
              <Img
                fluid={data.card_image.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
            <div className="flex-container" style={{ marginTop: `20px` }}>
              <div
                style={{
                  width: `10%`,
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `center`,
                }}
              >
                01
              </div>
              <div style={{ width: `90%` }}>
                <p className="bold-text p-style">V-art Gallery</p>
                <small>[Websites][Branding & Brand Identity]</small>
              </div>
            </div>
          </div>

          <div className="card mobile-card">
            <div className="card-image">
              <Img
                fluid={data.card_image.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
            <div className="flex-container" style={{ marginTop: `20px` }}>
              <div
                style={{
                  width: `10%`,
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `center`,
                }}
              >
                02
              </div>
              <div style={{ width: `90%` }}>
                <p className="bold-text p-style">V-art Gallery</p>
                <small>[Websites][Branding & Brand Identity]</small>
              </div>
            </div>
          </div>

          <div className="card mobile-card">
            <div className="card-image">
              <Img
                fluid={data.card_image.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
            <div className="flex-container" style={{ marginTop: `20px` }}>
              <div
                style={{
                  width: `10%`,
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `center`,
                }}
              >
                03
              </div>
              <div style={{ width: `90%` }}>
                <p className="bold-text p-style">V-art Gallery</p>
                <small>[Websites][Branding & Brand Identity]</small>
              </div>
            </div>
          </div>

          <div className="card mobile-card">
            <div className="card-image">
              <Img
                fluid={data.card_image.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
            <div className="flex-container" style={{ marginTop: `20px` }}>
              <div
                style={{
                  width: `10%`,
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `center`,
                }}
              >
                04
              </div>
              <div style={{ width: `90%` }}>
                <p className="bold-text p-style">V-art Gallery</p>
                <small>[Websites][Branding & Brand Identity]</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackgroundImage
        Tag="section"
        style={{ opacity: `1 !important` }}
        fluid={data.background_desktop.childImageSharp.fluid}
      >
        <div className={"background-img-style"}>
          <div
            style={{
              padding: `100px 0px`,
            }}
            className="space-around"
          >
            <div className="small-container footer" style={{ marginTop: 0 }}>
              <div>
                <small className="small-text">WHAT WE DO</small>
                <div className="large-text bold-text mdeium-text-box">
                  From the Inside Out.
                </div>
              </div>
              <hr />
              <div className="flex-container-reverse">
                <div className="box">
                  <button
                    type="button"
                    className="btn btn-light btn-align"
                    style={{ color: `white` }}
                  >
                    Learn more
                  </button>
                </div>
                <div className="box">
                  <small>
                    Our team and our culture is fueled by passion: for what we
                    do, for the people we do it for, and for the people we work
                    alongside. Take a glimpse behind the scene at the heart of
                    our company and the people who make up Focus Lab.
                  </small>
                  <br />
                  <br />

                  <p className="bold-text">
                    <Link
                      to="/services/#discovery-strategy"
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}
                    >
                      Discovery & Strategy
                    </Link>
                  </p>
                  <p className="bold-text">
                    <Link
                      to="/services/#branding"
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}
                    >
                      Branding
                    </Link>
                  </p>
                  <p className="bold-text">
                    <Link
                      to="/services/#interactive"
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}
                    >
                      Interactive
                    </Link>
                  </p>
                  <p className="bold-text">
                    <Link
                      to="#"
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}
                    >
                      Creative
                    </Link>
                  </p>
                  <p className="bold-text">
                    <Link
                      to="#"
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}
                    >
                      Development Solutions
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <div className="small-container">
        <div>
          <small className="small-text">NEWS + VIEWS</small>
          <div className="large-text bold-text mdeium-text-box">
            Recent agency happenings, press.
          </div>
        </div>
      </div>
      <div className="big-screen">
        <BlogsSlider />
      </div>
      <div className="small-screen">
        <BlogsSliderMobile />
      </div>
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query {
    home_banner_desktop: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    home_banner_mobile: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    card_image: file(relativePath: { eq: "card.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    background_desktop: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
