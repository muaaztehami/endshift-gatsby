import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../menu/menu"

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#fff`,
      position: `fixed`,
      width: `100%`,
      top: 0,
      height: `70px`,
      padding: `20px`,
      zIndex: 5,
    }}
  >
    <div>
      <Menu />
      <h5
        style={{
          margin: 0,
        }}
      >
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h5>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
