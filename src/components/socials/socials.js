import React from "react"
import { Link } from "gatsby"
import "./style.scss"

const Socials = () => {
  return (
    <div class="socials-flex-container">
      <small class="title">Social</small>
      <small>
        <Link
          to="#"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Facebook
        </Link>
      </small>
      <small>
        <Link
          to="#"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Dribbble
        </Link>
      </small>
      <small>
        <Link
          to="#"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Behance
        </Link>
      </small>
      <small>
        <Link
          to="#"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Github
        </Link>
      </small>
      <small>
        <Link
          to="#"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Twitter
        </Link>
      </small>
    </div>
  )
}

export default Socials
