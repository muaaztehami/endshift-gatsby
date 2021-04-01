/* eslint-disable react/prop-types */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/case_study.scss"
import MainSlider from "../components/slider/mainSlider"
import scrollDown from "../utils/scrollDown"
import BackgroundImage from "gatsby-background-image"

const CaseStudyPage = ({ data }) => {
  const sources_big_picture = [
    data.big_picture_desktop.childImageSharp.fluid,
    {
      ...data.big_picture_mobile.childImageSharp.fluid,
      media: `(max-width: 480px)`,
    },
  ]
  const sources_banner_image = [
    data.banner_image_1_desktop.childImageSharp.fluid,
    {
      ...data.banner_image_1_mobile.childImageSharp.fluid,
      media: `(max-width: 480px)`,
    },
  ]
  const sources_background_image = [
    data.background_image_desktop.childImageSharp.fluid,
    {
      ...data.background_image_mobile.childImageSharp.fluid,
      media: `(max-width: 480px)`,
    },
  ]

  return (
    <Layout>
      <SEO title="Home" />

      <BackgroundImage
        Tag="section"
        style={{ opacity: `1 !important` }}
        fluid={sources_background_image}
      >
        <div style={{ background: `rgb(0, 0, 0, 0.5)` }}>
          <div
            className="small-container footer"
            style={{
              marginTop: `0`,
              border: `solid transparent`,
              paddingTop: `127px`,
              paddingBottom: "127px",
            }}
          >
            <div className="space-around">
              <small className="small-text">MOBILE APPLICATION</small>
              <h1 className="extra-larg-text bold-text">Outreach</h1>
            </div>
            <div className="space-around">
              <button
                type="button"
                className="btn btn-light btn-align"
                style={{ color: `white` }}
              >
                Launch project
              </button>
            </div>
            <div className="case-study-scroll-btn">
              <button
                type="button"
                className="btn btn-light btn-align"
                onClick={scrollDown}
                style={{ color: `white` }}
              >
                Scroll down
              </button>
            </div>
          </div>
        </div>
      </BackgroundImage>

      <div className="small-container ">
        <div className="large-text bold-text mdeium-text-box">
          The Challenge
        </div>
        <hr />
        <div className="flex-container-services">
          <div className="services-box">
            <small>
              Outreach needed to re-energize an industry-leading sales
              engagement platform and promote a fun company culture. In a
              saturated, jargon-filled market, it was our first challenge to
              give this work-hard/play-hard team a stand-out brand makeover. But
              the real challenge is redesigning and developing a fluid website
              that could communicate how intutive and rewarding their platform
              is to use -- while capturing everything Outreach offers.
            </small>
            <br />
            <br />
            <p className="bold-text">Go-to-Market Strategy</p>
            <p className="bold-text">Brand Strategy</p>
            <p className="bold-text">Brand Design</p>
            <p className="bold-text">Packaging Design</p>
            <p className="bold-text">Website Design</p>
            <p className="bold-text">360 Marketing Development</p>
          </div>
        </div>
      </div>

      <div style={{ padding: `100px 0px` }}>
        <MainSlider />
      </div>

      <div className="small-container ">
        <div className="large-text bold-text mdeium-text-box">Our Approach</div>
        <hr />
        <div className="flex-container-services">
          <div className="services-box">
            <small>
              Nearly every member of the team lent their magic to this project,
              which required a long, expertly managed project timeline. Not only
              did we build a whole new brand system to create content around, we
              got mega-strategic with information architecture to streamline
              content that had grown quikly with their success. Every pixel,
              every word, and every bit of code was laid out with intention in
              collaborative review with the client.
            </small>
          </div>
        </div>
      </div>

      <div className="big-picture space-around">
        <Img
          fluid={sources_big_picture}
          alt="slide-1"
          style={{ maxWidth: `100%`, maxHeight: `100%` }}
        />
      </div>

      <div className="small-container ">
        <div className="large-text bold-text mdeium-text-box">Branding</div>
        <hr />
        <div className="flex-container-services">
          <div className="services-box">
            <small>
              Great work has a purpose, it solves a problem, it creates ways for
              people to connect. If it wins awards or if other people think
              it&apos;s cool then that&apos;s nice, we do it. We do it because
              it has impact, it helps someone, it makes their lives easier or
              better or just more fun.
            </small>
          </div>
        </div>

        <div
          className="space-around"
          style={{
            maxWidth: `100%`,
            height: "fit-content",
            marginBottom: `1.45rem`,
          }}
        >
          <Img
            fluid={sources_banner_image}
            alt="slide-1"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>

        <div className="flex-container">
          <div className="card-case-study">
            <div className="card-img-case-study">
              <Img
                fluid={data.banner_image_2.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
          </div>
          <div className="card-case-study">
            <div className="card-img-case-study">
              <Img
                fluid={data.banner_image_2.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="small-container ">
        <div className="large-text bold-text mdeium-text-box">
          Communications
        </div>
        <hr />
        <div className="flex-container-services">
          <div className="services-box">
            <small>
              Nearly every member of the team lent their magic to this project,
              which required a long, expertly managed project timeline. Not only
              did we build a whole new brand system to create content around, we
              got mega-strategic with information architecture to streamline
              content that had grown quikly with their success. Every pixel,
              every word, and every bit of code was laid out with intention in
              collaborative review with the client.
            </small>
          </div>
        </div>
      </div>

      <div
        className="small-container"
        style={{ backgroundColor: `black`, padding: `70px` }}
      >
        <div
          className="space-around"
          style={{ textAlign: `center`, color: `white` }}
        >
          <p>
            &quot;We believe that we can live in a world where every product or
            service has an easy to use experience on all platforms. And our
            mission is to make it happen.&quot;
          </p>
          <p style={{ fontWeight: `bold` }}>Tomislav Grubisic</p>
          <small>CEO</small>
        </div>
      </div>

      <div className="small-container ">
        <div className="large-text bold-text mdeium-text-box">
          Communications
        </div>
        <hr />
        <div className="flex-container-services">
          <div className="services-box">
            <small>
              Nearly every member of the team lent their magic to this project,
              which required a long, expertly managed project timeline. Not only
              did we build a whole new brand system to create content around, we
              got mega-strategic with information architecture to streamline
              content that had grown quikly with their success. Every pixel,
              every word, and every bit of code was laid out with intention in
              collaborative review with the client.
            </small>
            <br />
            <br />
            <small>
              Nearly every member of the team lent their magic to this project,
              which required a long, expertly managed project timeline. Not only
              did we build a whole new brand system to create content around, we
              got mega-strategic with information architecture to streamline
              content that had grown quikly with their success. Every pixel,
              every word, and every bit of code was laid out with intention in
              collaborative review with the client.
            </small>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="large-text bold-text">Need Interactive Services?</div>
        <hr className="space-around" />
        <button type="button" className="btn btn-light btn-align">
          Let&apos;s chat about your needs.
        </button>
      </div>
    </Layout>
  )
}
export default CaseStudyPage

export const data = graphql`
  query {
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

    background_image_desktop: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    background_image_mobile: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 180, maxHeight: 275) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    banner_image_1_desktop: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    banner_image_1_mobile: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    banner_image_2: file(relativePath: { eq: "office1.jpeg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    banner_image_3: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
