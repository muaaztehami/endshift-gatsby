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
      <div class="container">
        <Img
          fluid={sources}
          alt="slide-1"
          style={{ width: `100%`, height: `100%`, opacity: `0.5` }}
        />
        <div class="centered">
          <div class="space-around">
            <h1 class="large-text bold-text">{post.frontmatter.title}</h1>
          </div>
        </div>
      </div>

      {/* <div
        style={{ width: `100%`, height: `400px`, position: `relative` }}
        class="space-around"
      >
        <Img
          fluid={post.frontmatter.cover_image.childImageSharp.fluid}
          alt="slide-2"
          style={{ maxWidth: `100%`, maxHeight: `100%`, opacity: `0.5` }}
        />
        <div
          class="small-container"
          style={{
            position: `absolute`,
            top: `0px`,
            margin: `0 180px`,
            padding: `163px 0`,
          }}
        >
          <h1 class="large-text bold-text">{post.frontmatter.title}</h1>
        </div>
      </div> */}

      <div class="small-container">
        <div class="space-around">
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
