/* eslint-disable react/prop-types */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/contact_us.scss"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import scrollDown from "../utils/scrollDown"

export const styles = {
  longText: { width: "100%", margin: "20px 10px" },
  shortText: { width: "45%", margin: "20px 10px" },
}

const useStyles = makeStyles(styles)

const ContactUsPage = ({ data }) => {
  const classes = useStyles()
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
          <small className="small-text">CONTACT US</small>
          <h1 className="extra-larg-text bold-text">Let&apos;s Chat</h1>
          <div className="large-text">
            Fill this out so we can learn more about you and your needs.
          </div>
        </div>
      </div>

      <div className="flex-container-reverse" style={{ marginTop: `40px` }}>
        <div
          className="flex-container small-container"
          style={{ margin: `0 0 0 auto` }}
        >
          <TextField
            id="talk-about"
            label="I'd like to talk about"
            className={classes.longText}
          />
          <TextField
            id="first-name"
            label="First Name"
            className={classes.shortText + " small-text-box"}
          />
          <TextField
            id="last-name"
            label="Last Name"
            className={classes.shortText + " small-text-box"}
          />
          <TextField
            id="email"
            label="Email"
            className={classes.shortText + " large-text-box"}
          />
          <TextField
            id="phone-number"
            label="Phone Number"
            className={classes.shortText + " large-text-box"}
          />
          <TextField
            id="company-name"
            label="Company Name"
            className={classes.shortText + " small-text-box"}
          />
          <TextField
            id="role"
            label="Your title/role"
            className={classes.shortText + " small-text-box"}
          />
          <TextField
            id="detail"
            placeholder="Please tell us a bit about what you're looking to collaborate on. Things like scope, budget, timeline, and the issues you'd like to solve are helpful :)"
            multiline
            rows={3}
            className={classes.longText}
          />
          <button
            type="button"
            className="btn btn-light submit-btn space-around"
            style={{ marginRight: `auto` }}
          >
            Submit
          </button>
        </div>
        <div className="side-scroll-btn-contact">
          <button
            type="button"
            className="btn btn-light btn-align"
            onClick={scrollDown}
          >
            Scroll down
          </button>
        </div>
      </div>

      <div className="big-picture space-around">
        <Img
          fluid={sources}
          alt="slide-1"
          style={{ maxWidth: `100%`, maxHeight: `100%` }}
        />
      </div>
    </Layout>
  )
}

export default ContactUsPage

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
  }
`
