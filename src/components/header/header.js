import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Menu from "../menu/menu"
import "./style.scss"

const Header = ({ siteTitle }) => {
  const [headerBackground, setHeaderBackground] = useState("transparent-header")
  const headerRef = React.useRef()
  headerRef.current = headerBackground

  useEffect(() => {
    if (window.location.pathname == "/case_study/") {
      setHeaderBackground("white-header")
    }
    const handleScroll = () => {
      const show = window.scrollY > 30
      if (headerRef.current != "dark-header") {
        if (show) {
          setHeaderBackground("solid-header")
        } else {
          setHeaderBackground("transparent-header")
          if (window.location.pathname == "/case_study/") {
            setHeaderBackground("white-header")
          }
        }
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const changeHeader = headerStyle => {
    setHeaderBackground(headerStyle)
  }
  return (
    <div className={`${headerRef.current} header`}>
      <div>
        <Menu changeHeader={{ changeHeader }} />
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
              // color: `black`,
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
