import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/blogs.scss"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <div class="small-container">
        <div class="space-around">
          <small class="small-text">BLOGS</small>
          <h1 class="extra-larg-text bold-text">Newsworthy Client Wins</h1>
          <div class="large-text">
            From our clients' growth stories, acquisitions, and Emmy nominations
            - it all lives here
          </div>
        </div>
      </div>

      <div class="small-container">
        <div class="flex-container">
          {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id} class="blog-card">
              <Link to={post.node.frontmatter.path} class="blog-link">
                <div class="blog-card-image">
                  <Img
                    fluid={
                      post.node.frontmatter.cover_image.childImageSharp.fluid
                    }
                    alt="slide-2"
                    style={{ maxWidth: `100%`, maxHeight: `100%` }}
                  />
                </div>
                <p class="bold-text">{post.node.frontmatter.title}</p>
                <small>{post.node.frontmatter.date}</small>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const data = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content/blog)/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            cover_image {
              childImageSharp {
                fluid(fit: FILL, maxWidth: 1600, maxHeight: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
