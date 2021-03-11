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
  centerPadding: "10%",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  // width: 300
}

const SingleSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      slide01ql: file(relativePath: { eq: "office.jpg" }) {
        childImageSharp {
          fluid(fit: FILL, maxWidth: 1600, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide02ql: file(relativePath: { eq: "office1.jpeg" }) {
        childImageSharp {
          fluid(fit: FILL, maxWidth: 1600, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div class="big-slider-container">
      <Slider {...settings}>
        <div class="big-card">
          <Img
            fluid={data.slide01ql.childImageSharp.fluid}
            alt="slide-1"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>
        <div class="big-card">
          <Img
            fluid={data.slide02ql.childImageSharp.fluid}
            alt="slide-2"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>
        <div class="big-card">
          <Img
            fluid={data.slide01ql.childImageSharp.fluid}
            alt="slide-3"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>
        <div class="big-card">
          <Img
            fluid={data.slide02ql.childImageSharp.fluid}
            alt="slide-4"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>
      </Slider>
    </div>
  )
}
export default SingleSlider
