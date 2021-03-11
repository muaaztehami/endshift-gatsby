// import "bootstrap/dist/css/bootstrap.min.css"
// import $ from "jquery"
// import Popper from "popper.js"
// import "bootstrap/dist/js/bootstrap.bundle.min"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"
import Img from "gatsby-image"
import { graphql } from "gatsby"

// import imgs from "../images/card.jpg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />/
    <div class="small-container">
      <div class="space-around">
        <small class="small-text">WE ARE ENDSHIFT</small>
        <h1 class="extra-larg-text bold-text">Solutions by design</h1>
        <div class="large-text">
          We build identities and experiences to elevate and empower
          organizations.
        </div>
      </div>
      <div class="space-around">
        <button type="button" class="btn btn-light btn-align">
          Contact us
        </button>
      </div>
      <div
        class="space-around"
        style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}
      >
        {/* <Image /> */}
        <Img
          fluid={data.home_banner.childImageSharp.fluid}
          alt="slide-1"
          style={{ maxWidth: `100%`, maxHeight: `100%` }}
        />
      </div>
      <div class="space-around">
        <small class="small-text">WHAT WE DO</small>
        <div class="large-text bold-text" style={{ width: `40%` }}>
          Let's Build Something Great. Together.
        </div>
      </div>
      <hr />
      <div class="flex-container">
        <div class="box">
          <button type="button" class="btn btn-light btn-align">
            Learn more
          </button>
        </div>
        <div class="box">
          <small>
            Dolore ut ipsum deserunt amet non nisi eu do irure eu eiusmod sit
            laborum. Nisi velit fugiat culpa proident commodo occaecat cupidatat
            nostrud. Sit id sunt do amet aute aliqua mollit tempor aliquip ex ea
            labore. Anim nulla nulla amet enim esse consectetur nostrud ea
            nostrud cillum exercitation ad tempor non. Nisi ex irure mollit
            consequat commodo ipsum.
          </small>
        </div>
      </div>

      <div class="flex-container space-around">
        <div class="card">
          <div class="card-image">
            {/* <img src={imgs} alt="Card" class="img" /> */}
            <Img
              fluid={data.card_image.childImageSharp.fluid}
              alt="slide-1"
              style={{ maxWidth: `100%`, maxHeight: `100%` }}
            />
          </div>
          <p style={{ fontWeight: `bold` }}>V-art Gallery</p>
          <small>[Websites][Branding & Brand Identity]</small>
        </div>

        <div class="card">
          <div class="card-image">
            {/* <img src={imgs} alt="Card" class="img" /> */}
            <Img
              fluid={data.card_image.childImageSharp.fluid}
              alt="slide-1"
              style={{ maxWidth: `100%`, maxHeight: `100%` }}
            />
          </div>
          <p style={{ fontWeight: `bold` }}>V-art Gallery</p>
          <small>[Websites][Branding & Brand Identity]</small>
        </div>

        <div class="card">
          <div class="card-image">
            {/* <img src={imgs} alt="Card" class="img" /> */}
            <Img
              fluid={data.card_image.childImageSharp.fluid}
              alt="slide-1"
              style={{ maxWidth: `100%`, maxHeight: `100%` }}
            />
          </div>
          <p style={{ fontWeight: `bold` }}>V-art Gallery</p>
          <small>[Websites][Branding & Brand Identity]</small>
        </div>

        <div class="card">
          <div class="card-image">
            {/* <img src={imgs} alt="Card" class="img" /> */}
            <Img
              fluid={data.card_image.childImageSharp.fluid}
              alt="slide-1"
              style={{ maxWidth: `100%`, maxHeight: `100%` }}
            />
          </div>
          <p style={{ fontWeight: `bold` }}>V-art Gallery</p>
          <small>[Websites][Branding & Brand Identity]</small>
        </div>
      </div>
    </div>
    <div
      style={{ backgroundColor: `grey`, padding: `100px 0px` }}
      class="space-around"
    >
      <div class="small-container footer" style={{ marginTop: 0 }}>
        <div>
          <small class="small-text">WHAT WE DO</small>
          <div class="large-text bold-text" style={{ width: `40%` }}>
            From the Inside Out.
          </div>
        </div>
        <hr />
        <div class="flex-container">
          <div class="box">
            <button type="button" class="btn btn-light btn-align">
              Learn more
            </button>
          </div>
          <div class="box">
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
      </div>
    </div>
    <div class="small-container">
      <div>
        <small class="small-text">NEWS + VIEWS</small>
        <div class="large-text bold-text" style={{ width: `40%` }}>
          Recent agency happenings, press.
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const data = graphql`
  query {
    home_banner: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 600) {
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
  }
`

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `
