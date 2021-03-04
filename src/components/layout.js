import * as React from "react"
import { Link } from "gatsby"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"
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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            // background: `#333`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  // return (
  //   <div className="global-wrapper" data-is-root-path={isRootPath}>
  //     <header className="global-header">{header}</header>
  //     <main>{children}</main>
  //     <footer>
  //       © {new Date().getFullYear()}, Built with
  //       {` `}
  //       <a href="https://www.gatsbyjs.com">Gatsby</a>
  //     </footer>
  //   </div>
  // )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
