import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import dispplayDate from "../../utils/displayDate"

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
    <div className="small-container">
      <hr />
      <div>
        {data.allMarkdownRemark.edges.map((blogs, index) => (
          <Link
            to={blogs.node.fields.slug}
            className="link-style"
            key={blogs.node.id}
          >
            <div className="flex-container space-around">
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
                <p className="bold-text" style={{ margin: `0` }}>
                  {blogs.node.frontmatter.title}
                </p>
                <small>
                  {dispplayDate(new Date(blogs.node.frontmatter.date))}
                </small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default BlogsSliderMobile
