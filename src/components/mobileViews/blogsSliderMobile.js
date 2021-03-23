import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogsSliderMobile = () => {
  const data = useStaticQuery(graphql`
    query BlogsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content/blog)/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <div class="small-container">
      <hr />
      <div>
        {data.allMarkdownRemark.edges.map((blogs, index) => (
          <Link to={blogs.node.fields.slug} class="link-style">
            <div class="flex-container space-around" key={blogs.node.id}>
              <div
                style={{
                  width: `10%`,
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `center`,
                }}
              >
                {index + 1 < 10 && "0"}
                {index + 1}
              </div>
              <div style={{ width: `90%` }}>
                <p class="bold-text" style={{ margin: `0` }}>
                  {blogs.node.frontmatter.title}
                </p>
                <small>{blogs.node.frontmatter.date}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default BlogsSliderMobile