import React from "react"
import { Link } from "gatsby"

const Socials = () => {
  return (
    <div>
      <small>Social</small>
      <br />
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
      <br />
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
      <br />
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
      <br />
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
      <br />
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
