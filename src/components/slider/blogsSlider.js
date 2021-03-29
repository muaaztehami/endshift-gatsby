import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import dispplayDate from "../../utils/displayDate"

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
  swipeToSlide: true,
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
            fields {
              slug
            }
            frontmatter {
              title
              date
              author
              cover_image {
                childImageSharp {
                  fluid(fit: FILL, maxWidth: 1600, maxHeight: 1000) {
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
    <div className="slider-container">
      <Slider {...settings}>
        {data.allMarkdownRemark.edges.map(slide => (
          <div key={slide.node.id} className="card">
            <a href={slide.node.fields.slug} className="link-style">
              <div className="blog-card-image">
                <Img
                  fluid={
                    slide.node.frontmatter.cover_image.childImageSharp.fluid
                  }
                  alt="slide-2"
                  style={{ maxWidth: `100%`, maxHeight: `100%` }}
                />
              </div>
              <p className="bold-text">{slide.node.frontmatter.title}</p>
              <small>
                {dispplayDate(new Date(slide.node.frontmatter.date))}
              </small>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default BlogsSlider
