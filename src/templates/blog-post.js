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
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
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
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`
