import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/case_study.scss"
import MainSlider from "../components/slider/mainSlider"
import scrollDown from "../utils/scrollDown"

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
      <div class="container">
        <Img
          fluid={sources_background_image}
          alt="slide-1"
          style={{ width: `100%`, height: `100%`, opacity: `0.5` }}
        />
        <div class="centered">
          <div class="space-around">
            <small class="small-text">MOBILE APPLICATION</small>
            <h1 class="extra-larg-text bold-text">Outreach</h1>
          </div>
          <div class="space-around">
            <button type="button" class="btn btn-light btn-align">
              Launch project
            </button>
          </div>
        </div>
        <div class="case-study-scroll-btn">
          <button
            type="button"
            class="btn btn-light btn-align"
            onClick={scrollDown}
          >
            Scroll down
          </button>
        </div>
      </div>

      <div class="small-container ">
        <div class="large-text bold-text mdeium-text-box">The Challenge</div>
        <hr />
        <div class="flex-container-services">
          <div class="services-box">
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
            <p class="bold-text">Go-to-Market Strategy</p>
            <p class="bold-text">Brand Strategy</p>
            <p class="bold-text">Brand Design</p>
            <p class="bold-text">Packaging Design</p>
            <p class="bold-text">Website Design</p>
            <p class="bold-text">360 Marketing Development</p>
          </div>
        </div>
      </div>

      <div style={{ padding: `100px 0px` }}>
        <MainSlider />
      </div>

      <div class="small-container ">
        <div class="large-text bold-text mdeium-text-box">Our Approach</div>
        <hr />
        <div class="flex-container-services">
          <div class="services-box">
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

      <div class="big-picture space-around">
        <Img
          fluid={sources_big_picture}
          alt="slide-1"
          style={{ maxWidth: `100%`, maxHeight: `100%` }}
        />
      </div>

      <div class="small-container ">
        <div class="large-text bold-text mdeium-text-box">Branding</div>
        <hr />
        <div class="flex-container-services">
          <div class="services-box">
            <small>
              Great work has a purpose, it solves a problem, it creates ways for
              people to connect. If it wins awards or if other people think it's
              cool then that's nice, we do it. We do it because it has impact,
              it helps someone, it makes their lives easier or better or just
              more fun.
            </small>
          </div>
        </div>

        <div
          class="space-around"
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

        <div class="flex-container">
          <div class="card-case-study">
            <div class="card-img-case-study">
              <Img
                fluid={data.banner_image_2.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
          </div>
          <div class="card-case-study">
            <div class="card-img-case-study">
              <Img
                fluid={data.banner_image_2.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="small-container ">
        <div class="large-text bold-text mdeium-text-box">Communications</div>
        <hr />
        <div class="flex-container-services">
          <div class="services-box">
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
        class="small-container"
        style={{ backgroundColor: `black`, padding: `70px` }}
      >
        <div
          class="space-around"
          style={{ textAlign: `center`, color: `white` }}
        >
          <p>
            "We believe that we can live in a world where every product or
            service has an easy to use experience on all platforms. And our
            mission is to make it happen."
          </p>
          <p style={{ fontWeight: `bold` }}>Tomislav Grubisic</p>
          <small>CEO</small>
        </div>
      </div>

      <div class="small-container ">
        <div class="large-text bold-text mdeium-text-box">Communications</div>
        <hr />
        <div class="flex-container-services">
          <div class="services-box">
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

      <div class="small-container">
        <div class="large-text bold-text">Need Interactive Services?</div>
        <hr class="space-around" />
        <button type="button" class="btn btn-light btn-align">
          Let's chat about your needs.
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
          ...GatsbyImageSharpFluid
        }
      }
    }
    background_image_mobile: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 800, maxHeight: 1600) {
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
