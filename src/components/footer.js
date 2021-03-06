import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Socials from "./socials/socials"

const Footer = ({ siteTitle }) => (
  <div
    style={{
      marginTop: `2rem`,
      background: `#111`,
    }}
  >
    <div className="footer small-container">
      <h1
        style={{
          padding: `100px 0px`,
          margin: `0`,
          fontSize: `20px`,
          fontWeight: `bold`,
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
      </h1>
      <small className="small-text">Get in touch</small>
      <div className="large-text bold-text">Don&apos;t be shy, say hi.</div>
      <div className="flex-container footer">
        <div className="footer">
          <small>Work with us</small>
          <br />
          <small>newbusiness@endshift.io</small>
        </div>
        <div className="footer">
          <small>Become a endshift</small>
          <br />
          <small>career@endshift.io</small>
        </div>
        <div className="footer">
          <small>Contact Us</small>
          <br />
          <small>+1.858.755.6922</small>
        </div>
        <div className="footer">
          <small>Contact Us</small>
          <br />
          <small>+1.858.755.6922</small>
        </div>
      </div>

      <div className="flex-container">
        <div className="footer address">
          <small>Location</small>
          <br />
          <small>
            San Diego -- 845 15th Street, Suite 501 San Diego, CA 92101
          </small>
          <br />
          <br />
          <small>The Bay Area -- Location Undisclosed</small>
        </div>
        <div className="footer sites">
          <small>Sites</small>
          <br />
          <small>
            <Link
              to="#"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Our Work
            </Link>
          </small>
          <br />
          <small>
            <Link
              to="/about/#what-we-do"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              What We Do
            </Link>
          </small>
          <br />
          <small>
            <Link
              to="/about"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              About
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
              News
            </Link>
          </small>
          <br />
          <small>
            <Link
              to="/careers"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Careers
            </Link>
          </small>
          <br />
          <small>
            <Link
              to="/blogs"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Blogs
            </Link>
          </small>
        </div>
        <div className="footer socials">
          <Socials />
        </div>

        <div className="footer company" style={{ color: `#808080` }}>
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
