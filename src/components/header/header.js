import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Menu from "../menu/menu"

const Header = ({ siteTitle }) => {
  const [headerBackground, setHeaderBackground] = useState("transparent-header")
  const headerRef = React.useRef()
  headerRef.current = headerBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30
      if (show) {
        setHeaderBackground("solid-header")
      } else {
        setHeaderBackground("transparent-header")
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className={headerRef.current}>
      <div>
        <Menu />
        <h1
          style={{
            margin: 0,
            fontSize: `20px`,
            fontWeight: `bold`,
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
        </h1>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
