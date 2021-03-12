import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  centerPadding: "14%",
  slidesToShow: 2.5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
}

const AuthorsSlider = () => {
  const data = useStaticQuery(graphql`
    query AuthorsSliderQuery {
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
                  fluid(fit: FILL, maxWidth: 2000, maxHeight: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div class="slider-container">
      <Slider {...settings}>
        {data.allMarkdownRemark.edges.map(slide => (
          <div class="card" key={slide.node.id}>
            <div class="card-image">
              <div style={{ height: `300px` }}>
                <Img
                  fluid={
                    slide.node.frontmatter.slide_image.childImageSharp.fluid
                  }
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
      </Slider>
    </div>
  )
}
export default AuthorsSlider
