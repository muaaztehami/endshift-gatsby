/* eslint-disable react/prop-types */
import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../styles/blogs_template.scss"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = post.frontmatter.title || `Title`

  const sources = [
    post.frontmatter.cover_image_desktop.childImageSharp.fluid,
    {
      ...post.frontmatter.cover_image_mobile.childImageSharp.fluid,
      media: `(max-width: 480px)`,
    },
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="container">
        <Img
          fluid={sources}
          alt="slide-1"
          style={{ width: `100%`, height: `100%`, opacity: `0.5` }}
        />
        <div className="centered">
          <div className="space-around">
            <h1 className="large-text bold-text">{post.frontmatter.title}</h1>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="space-around">
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            {/* <p>{post.frontmatter.excerpt}</p> */}
            <Link to="/blogs">Go Back</Link>
            <hr />
            <footer>
              <Bio />
            </footer>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        author
        date
        cover_image_desktop: cover_image {
          childImageSharp {
            fluid(fit: FILL, maxWidth: 1600, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cover_image_mobile: cover_image {
          childImageSharp {
            fluid(fit: FILL, maxWidth: 800, maxHeight: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
