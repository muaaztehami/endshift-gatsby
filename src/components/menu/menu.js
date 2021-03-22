import React, { useState, useEffect } from "react"
import "./style.scss"
import { Link } from "gatsby"
import Socials from "../socials/socials"

const Menu = ({ changeHeader }) => {
  const [menuState, setMenuState] = useState("close")
  const menuRef = React.useRef()
  menuRef.current = menuState

  function openNav() {
    document.getElementById("myNav").style.height = "91%"
    setMenuState("open")
    changeHeader.changeHeader("dark-header")
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%"
    setMenuState("close")
    changeHeader.changeHeader("solid-header")
  }
  return (
    <div>
      <div id="myNav" class="overlay menu-flex-container">
        <div class="menu-left-box">
          <div class="menu">
            <Socials />
          </div>
        </div>
        <div class="overlay-content big-items menu-mid-box">
          <ul style={{ listStyleType: `none` }}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact_us">Contact</Link>
            </li>
          </ul>
        </div>
        <div class="menu-right-box">
          <div
            class="menu"
            // style={{ marginBottom: `30px`, marginLeft: `auto` }}
          >
            <small>Location</small>
            <br />
            <small>
              San Diego -- 845 15th Street, Suite 501 San Diego, CA 92101
            </small>
            <br />
            <br />
            <small>The Bay Area -- Location Undisclosed</small>
          </div>
        </div>
      </div>
      <div style={{ display: `flex`, float: `right` }}>
        <small class="hide" style={{ padding: `7px` }}>
          LET'S TALK
        </small>
        <span
          style={{ fontSize: `23px`, cursor: `pointer` }}
          onClick={menuRef.current == "close" ? openNav : closeNav}
        >
          &#9776;
        </span>
      </div>
    </div>
  )
}
export default Menu
