import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import "jquery/dist/jquery.min.js"
// import "bootstrap/dist/js/bootstrap.min.js"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Header from "./header/header"
import Footer from "./footer"
// import "./layout.css"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div>
        <main>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
