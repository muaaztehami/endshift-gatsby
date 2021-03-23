import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"

const AuthorsSliderMobile = () => {
  const data = useStaticQuery(graphql`
    query AuthorsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(sliders/authorsSlider)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              designation
              slide_image {
                childImageSharp {
                  fluid(fit: FILL, maxWidth: 800, maxHeight: 1000) {
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
    <div class="small-container">
      {data.allMarkdownRemark.edges.map(slide => (
        <div class="author-card" key={slide.node.id}>
          <div class="card-image" style={{ textAlign: `center` }}>
            <div style={{ height: `fit-content` }}>
              <Img
                fluid={slide.node.frontmatter.slide_image.childImageSharp.fluid}
                alt="slide-1"
                style={{ maxWidth: `100%`, maxHeight: `100%` }}
              />
            </div>
            <p style={{ fontWeight: `bold`, margin: `0` }}>
              {slide.node.frontmatter.name}
            </p>
            <small>{slide.node.frontmatter.designation}</small>
          </div>
        </div>
      ))}
    </div>
  )
}
export default AuthorsSliderMobile
