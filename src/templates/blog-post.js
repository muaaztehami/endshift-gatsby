// import React from 'react'
// import { Link } from 'gatsby'

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// export default function Template({data}) {
//   const post = data.markdownRemark

//   return(
//     <Layout>
//       <SEO title="Page two" />
//       <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
//       <div dangerouslySetInnerHTML={{ __html: post.html }}/>
//       <Link to="/blogs">Go Back</Link>
//     </Layout>
//   )
// }

// export const postQuery = graphql`
// query BlogPostByPath($path: String!) {
//   markdownRemark(frontmatter: { path: { eq: $path } }){
//     html
//     frontmatter {
//       title
//       author
//       date
//     }
//   }
// }
// `

import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import imgs from "../images/office.jpg"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = post.frontmatter.title || `Title`
  // const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      {/* <div class="small-container">
        <div class="space-around">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
      </div> */}
      {/* <div style={{ 
          backgroundImage: "url(" + imgs + ")", 
          width: `100%`, 
          height: `400px`,
          opacity: `0.5`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `100% 100%`,
          textAlign: `center`,
          padding: `10px 0`
        }}>
        <div class="small-container">
          <h1 class="extra-larg-text bold-text">{post.frontmatter.title}</h1>
        </div>
      </div> */}
      <div
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
      </div>
      <div class="small-container">
        <div class="space-around">
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            {/* <header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
            </header> */}
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
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
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        author
        date
        cover_image {
          childImageSharp {
            fluid(fit: FILL, maxWidth: 1600, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
