import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World App</h1>
    <p>Welcome to Hello World App.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage


// import * as React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const posts = data.allMarkdownRemark.nodes

//   if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <SEO title="All posts" />
//         <Bio />
//         <p>
//           No blog posts found. Add markdown posts to "content/blog" (or the
//           directory you specified for the "gatsby-source-filesystem" plugin in
//           gatsby-config.js).
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout location={location} title={siteTitle}>
//       <SEO title="All posts" />
//       <Bio />
//       <ol style={{ listStyle: `none` }}>
//         {posts.map(post => {
//           const title = post.frontmatter.title || post.fields.slug

//           return (
//             <li key={post.fields.slug}>
//               <article
//                 className="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     <Link to={post.fields.slug} itemProp="url">
//                       <span itemProp="headline">{title}</span>
//                     </Link>
//                   </h2>
//                   <small>{post.frontmatter.date}</small>
//                 </header>
//                 <section>
//                   <p
//                     dangerouslySetInnerHTML={{
//                       __html: post.frontmatter.description || post.excerpt,
//                     }}
//                     itemProp="description"
//                   />
//                 </section>
//               </article>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export default BlogIndex

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
