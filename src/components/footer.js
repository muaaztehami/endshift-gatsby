import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <div
    style={{
      marginTop: `2rem`,
      background: `#111`,
    }}
  >
    <div
      // style={{
      //   margin: `0 auto`,
      //   marginTop: '100px',
      //   maxWidth: 960,
      //   padding: `0 1.0875rem 1.45rem`,
      // }}
      class="footer small-container"
    >
      <h5
        style={{
          padding: `100px 0px`,
          margin: `0`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h5>
      <small class="small-text">Get in touch</small>
      <div class="large-text bold-text">Don't be shy, say hi.</div>
      <div class="flex-container">
        <div class="footer">
          <small>Work with us</small>
          <br />
          <small>newbusiness@endshift.io</small>
        </div>
        <div class="footer">
          <small>Become a endshift</small>
          <br />
          <small>career@endshift.io</small>
        </div>
        <div class="footer">
          <small>Contact Us</small>
          <br />
          <small>+1.858.755.6922</small>
        </div>
        <div class="footer">
          <small>Contact Us</small>
          <br />
          <small>+1.858.755.6922</small>
        </div>
        <div class="footer">
          <small>Location</small>
          <br />
          <small>
            San Diego -- 845 15th Street, Suite 501 San Diego, CA 92101
          </small>
          <br />
          <br />
          <small>The Bay Area -- Location Undisclosed</small>
        </div>
        <div class="footer">
          <small>Sites</small>
          <br />
        </div>
        <div class="footer">
          <small>Social</small>
          <br />
        </div>
        <div class="footer" style={{ color: `#808080` }}>
          <small>©2020 ENDSHIFT IO.</small>
          <br />
          <small>All rigths Reserved</small>
        </div>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
