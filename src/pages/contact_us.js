import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/contact_us.scss"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"

export const styles = {
  longText: { width: "100%", margin: "20px 10px" },
  shortText: { width: "45%", margin: "20px 10px" },
}

const useStyles = makeStyles(styles)

const ContactUsPage = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Services" />
      <div class="small-container top-container">
        <div class="space-around">
          <small class="small-text">CONTACT US</small>
          <h1 class="extra-larg-text bold-text">Let's Chat</h1>
          <div class="large-text">
            Fill this out so we can learn more about you and your needs.
          </div>
        </div>

        <div class="flex-container">
          <TextField
            id="talk-about"
            label="I'd like to talk about"
            className={classes.longText}
          />
          <TextField
            id="first-name"
            label="First Name"
            className={classes.shortText}
          />
          <TextField
            id="last-name"
            label="Last Name"
            className={classes.shortText}
          />
          <TextField id="email" label="Email" className={classes.shortText} />
          <TextField
            id="phone-number"
            label="Phone Number"
            className={classes.shortText}
          />
          <TextField
            id="company-name"
            label="Company Name"
            className={classes.shortText}
          />
          <TextField
            id="role"
            label="Your title/role"
            className={classes.shortText}
          />
          <TextField
            id="detail"
            placeholder="Please tell us a bit about what you're looking to collaborate on. Things like scope, budget, timeline, and the issues you'd like to solve are helpful :)"
            multiline
            rows={3}
            className={classes.longText}
          />
          <button type="button" class="btn btn-light submit-btn space-around">
            Submit
          </button>
        </div>
      </div>

      <div class="big-picture space-around">
        <Img
          fluid={data.slide01ql.childImageSharp.fluid}
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
    slide01ql: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(fit: FILL, maxWidth: 1600, maxHeight: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
