import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import imgs from "../images/card.jpg"
import "../styles/blogs.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogIndexQuery {
      allMarkdownRemark {
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
  `)
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
                  {/* <img src={imgs} alt="Blog" class="img" /> */}
                  <Img
                    fluid={
                      post.node.frontmatter.cover_image.childImageSharp.fluid
                    }
                    alt="slide-2"
                    style={{ maxWidth: `100%`, maxHeight: `100%` }}
                  />
                </div>
                <p class="bold-text">{post.node.frontmatter.title}</p>
                <small>
                  {/* Posted by{post.node.frontmatter.author} on{" "} */}
                  {post.node.frontmatter.date}
                </small>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             date
//             author
//           }
//         }
//       }
//     }
//   }
// `

export default BlogPage
