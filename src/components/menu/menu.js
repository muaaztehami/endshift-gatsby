import React from "react"
import "./style.scss"
import { Link } from "gatsby"

// import styled from "styled-components"

// const MenuIcon = styled.button`
//   display: flex;
//   float: right;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 1.5rem;
//   height: 1.5rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   z-index: 5;

//   div {
//     width: 1.5rem;
//     height: 0.2rem;import { Link } from "gatsby"

//     background: black;
//     border-radius: 5px;
//     transform-origin: 1px;
//     position: relative;
//   }
// `

const Menu = () => {
  function openNav() {
    document.getElementById("myNav").style.height = "100%"
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%"
  }
  return (
    <div>
      <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div class="overlay-content">
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
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
      <div style={{ display: `flex`, float: `right` }}>
        <small style={{ padding: `7px` }}>LET'S TALK</small>
        <span style={{ fontSize: `23px`, cursor: `pointer` }} onClick={openNav}>
          &#9776;
        </span>
      </div>
    </div>
  )
}
export default Menu
