import React from "react"
// import imgs from "../../images/office.jpg"
// import imgs1 from "../../images/office1.jpeg"

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
  centerPadding: "33%",
  // slidesToShow: 2.5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  // width: 300
}

const MultiSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      slide01ql: file(relativePath: { eq: "office.jpg" }) {
        childImageSharp {
          fluid(fit: FILL, maxWidth: 1600, maxHeight: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide02ql: file(relativePath: { eq: "office1.jpeg" }) {
        childImageSharp {
          fluid(fit: FILL, maxWidth: 1600, maxHeight: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div class="slider-container">
      <Slider {...settings}>
        <div class="card">
          <Img
            fluid={data.slide01ql.childImageSharp.fluid}
            alt="slide-1"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>
        <div class="card">
          <Img
            fluid={data.slide02ql.childImageSharp.fluid}
            alt="slide-1"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>
        <div class="card">
          <Img
            fluid={data.slide01ql.childImageSharp.fluid}
            alt="slide-1"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>
        <div class="card">
          <Img
            fluid={data.slide02ql.childImageSharp.fluid}
            alt="slide-1"
            style={{ maxWidth: `100%`, maxHeight: `100%` }}
          />
        </div>
      </Slider>
    </div>
  )
}
export default MultiSlider
