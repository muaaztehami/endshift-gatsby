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
  slidesToShow: 1,
  slidesToScroll: 0.5,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  swipeToSlide: true,
}

const CareersSlider = () => {
  const data = useStaticQuery(graphql`
    query CareersSliderQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(sliders/careersSlider)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slide_image_1 {
                childImageSharp {
                  fluid(fit: FILL, maxWidth: 1600, maxHeight: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              slide_image_2 {
                childImageSharp {
                  fluid(fit: FILL, maxWidth: 1600, maxHeight: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              slide_image_3 {
                childImageSharp {
                  fluid(fit: FILL, maxWidth: 1600, maxHeight: 1600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              slide_image_4 {
                childImageSharp {
                  fluid(fit: FILL, maxWidth: 600, maxHeight: 900) {
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
    <div className="big-slider-container">
      <Slider {...settings}>
        {data.allMarkdownRemark.edges.map(slide => (
          <div className="card " key={slide.node.id}>
            <div className="flex-container-slider">
              <div style={{ width: `26%`, marginTop: `70px` }}>
                <div style={{ marginBottom: `20px` }}>
                  <Img
                    fluid={
                      slide.node.frontmatter.slide_image_1.childImageSharp.fluid
                    }
                    alt="slide-1"
                    style={{ maxWidth: `100%`, maxHeight: `100%` }}
                  />
                </div>
                <div style={{ marginTop: `20px` }}>
                  <Img
                    fluid={
                      slide.node.frontmatter.slide_image_2.childImageSharp.fluid
                    }
                    alt="slide-1"
                    style={{ maxWidth: `100%`, maxHeight: `100%` }}
                  />
                </div>
              </div>
              <div style={{ width: `37%` }}>
                <Img
                  fluid={
                    slide.node.frontmatter.slide_image_3.childImageSharp.fluid
                  }
                  alt="slide-1"
                  style={{ maxWidth: `100%`, maxHeight: `100%` }}
                />
              </div>
              <div style={{ width: `26%`, marginTop: `40px` }}>
                <Img
                  fluid={
                    slide.node.frontmatter.slide_image_4.childImageSharp.fluid
                  }
                  alt="slide-1"
                  style={{ maxWidth: `100%`, maxHeight: `100%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default CareersSlider
