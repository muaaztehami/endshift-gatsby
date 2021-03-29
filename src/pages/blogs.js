/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/blogs.scss"
import dispplayDate from "../utils/displayDate"
import scrollDown from "../utils/scrollDown"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="small-container top-container">
        <div className="space-around">
          <small className="small-text">BLOGS</small>
          <h1 className="extra-larg-text bold-text">Newsworthy Client Wins</h1>
          <div className="large-text">
            From our clients&apos; growth stories, acquisitions, and Emmy
            nominations - it all lives here
          </div>
        </div>
      </div>

      <div
        className="mid-scroll-btn scroll-margin-l"
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

      <div className="small-container big-screen" style={{ marginTop: `0` }}>
        <div className="flex-container">
          {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id} className="blog-card">
              <Link to={post.node.fields.slug} class="link-style">
                <div className="blog-card-image">
                  <Img
                    fluid={
                      post.node.frontmatter.cover_image.childImageSharp.fluid
                    }
                    alt="slide-2"
                    style={{ maxWidth: `100%`, maxHeight: `100%` }}
                  />
                </div>
                <p className="bold-text" style={{ margin: `0` }}>
                  {post.node.frontmatter.title}
                </p>
                <small>
                  {dispplayDate(new Date(post.node.frontmatter.date))}
                </small>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="small-container small-screen">
        <div className="">
          {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id} className="space-around">
              <Link to={post.node.fields.slug} class="link-style">
                <small>
                  {dispplayDate(new Date(post.node.frontmatter.date))}
                </small>
                <p className="bold-text large-text" style={{ margin: `0` }}>
                  {post.node.frontmatter.title}
                </p>
                <hr />
                <div style={{ width: `90%`, marginLeft: `10%` }}>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{ __html: post.node.html }}
                  />
                  <button type="button" className="btn btn-light btn-align">
                    Learn more
                  </button>
                </div>
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
          html
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            cover_image {
              childImageSharp {
                fluid(fit: FILL, maxWidth: 1600, maxHeight: 800) {
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
