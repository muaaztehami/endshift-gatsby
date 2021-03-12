import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

import "./style.scss"

const settings = {
  centerMode: true,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  centerMode: true,
  centerPadding: "33.5%",
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
}

const BlogsSlider = () => {
  const data = useStaticQuery(graphql`
    query BlogSliderQuery {
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
  `)

  return (
    <div class="slider-container">
      <Slider {...settings}>
        {data.allMarkdownRemark.edges.map(slide => (
          <div key={slide.node.id} class="card">
            <Link to={slide.node.frontmatter.path} class="blog-link">
              <div class="blog-card-image">
                <Img
                  fluid={
                    slide.node.frontmatter.cover_image.childImageSharp.fluid
                  }
                  alt="slide-2"
                  style={{ maxWidth: `100%`, maxHeight: `100%` }}
                />
              </div>
              <p class="bold-text">{slide.node.frontmatter.title}</p>
              <small>{slide.node.frontmatter.date}</small>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default BlogsSlider
