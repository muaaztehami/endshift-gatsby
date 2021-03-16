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
  centerPadding: "33.5%",
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
}

const AboutSlider = () => {
  const data = useStaticQuery(graphql`
    query AboutSliderQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(sliders/aboutSlider)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slide_image {
                childImageSharp {
                  fluid(fit: FILL, maxWidth: 1600, maxHeight: 1300) {
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
          <div class="card" key={slide.node.id}>
            <Img
              fluid={slide.node.frontmatter.slide_image.childImageSharp.fluid}
              alt="slide-1"
              style={{ maxWidth: `100%`, maxHeight: `100%` }}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default AboutSlider
