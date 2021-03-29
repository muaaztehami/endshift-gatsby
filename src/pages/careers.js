/* eslint-disable react/prop-types */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/services.scss"
import "../styles/careers.scss"
import CareersSlider from "../components/slider/careersSlider"
import MainSlider from "../components/slider/mainSlider"
import { graphql, Link } from "gatsby"
import scrollDown from "../utils/scrollDown"

const CareersPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Services" />
      <div className="small-container top-container">
        <div className="space-around">
          <small className="small-text">CAREERS</small>
          <h1 className="extra-larg-text bold-text">
            We&apos;re all in this together
          </h1>
          <div className="large-text">
            Join a team of passionate digital technology experts who create
            progress every day and take care of each other every step of the
            way.
          </div>
        </div>
      </div>

      <div className="mid-scroll-btn scroll-margin-l">
        <button
          type="button"
          className="btn btn-light btn-align"
          onClick={scrollDown}
        >
          Scroll down
        </button>
      </div>

      <div style={{ padding: `100px 0px` }}>
        <CareersSlider />
      </div>

      <div className="small-container ">
        <div className="large-text bold-text mdeium-text-box">
          Do great work
        </div>
        <hr />
        <div className="flex-container-services">
          <div className="services-box">
            <p className="bold-text">What is great work?</p>
            <small>
              Great work has a purpose, it solves a problem, it creates ways for
              people to connect. If it wins awards or if other people think
              it&apos;s cool then that&apos;s nice, we guess, but that&apos;s
              not why we do it. We do it because it has impact, it helps
              someone, it makes their lives eaiser or better or just more fun.
            </small>
            <br />
            <br />
            <br />

            <p className="bold-text">Who we work with</p>
            <small>
              We work with industry leaders and startups with big dreams. Our
              clients are transforming transportation, news, payments,
              entertainment, communication, fashion, and so on. And we&apos;re
              here with them every step of the way.
            </small>
            <br />
            <br />
            <br />

            <p className="bold-text">How we are growing</p>
            <small>
              Ueno has doubled in size every two years since we founded. In 2019
              we ranked in the top 255 on the Inc 5000 of the fastest growing
              companies in the USA, and we&apos;re not slowing down any time
              soon. We&apos;ve done this without sacrificing culture or quality.
            </small>
          </div>
        </div>
      </div>

      <div
        className="space-around"
        style={{
          padding: `1px 0 100px 0px`,
          backgroundColor: `#f0f5f4`,
        }}
      >
        <div className="small-container">
          <div className="large-text bold-text mdeium-text-box">
            Do great work in a strong culture
          </div>
          <hr />
          <div className="flex-container-services">
            <div className="services-box">
              <small>
                Culture is one of those words. People throw it around a lot.
                It&apos;s hard to define exactly what it is. But it&apos;s
                something you feel pretty much straight away.
              </small>
              <br />
              <br />
              <br />

              <small>
                We&apos;re not going to lie. The culture at Ueno isn&apos;t
                perfect. Like every group of people we have our issues. But we
                are all dedicated to continuing to improve, and we think
                that&apos;s a pretty good start.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div>
        <MainSlider />
      </div>

      <div
        className="space-around"
        style={{
          padding: `1px 0 100px 0px`,
        }}
      >
        <div className="small-container flex-container">
          <div className="card-services">
            <p className="bold-text">Value driven</p>
            <small>
              Our values define who we are on our best days and who we aspire to
              be every day. They continue to evolve and change with us, but we
              created them to facilitate a culture that continues to create
              great work. Want to know more about our values? You&apos;re in
              luck.
            </small>
          </div>
          <div className="card-services">
            <p className="bold-text">Strength through diversity</p>
            <small>
              When people come from different backgrounds the work they created
              together becomes better. We don&apos;t look for culture fits, we
              look for culture additions. The people of Ueno came from over 25
              different countries, and from all walks of life. About half of our
              people are men, even almost of our leadership team are men.
            </small>
          </div>
          <div className="card-services">
            <p className="bold-text">Yearly retreats</p>
            <small>
              Every year the whoe company goes away for a week. All our people
              come together from our different offices to work and play
              together. It&apos;s a time to remind ourselves that behind the
              avatar is a real person, and a time for all of us to help shape
              the vision of who we want to become. So far we&apos;ve gone to
              Plam Springs, Iceland, upstate New York and Vancouver.
            </small>
          </div>

          <div className="card-services">
            <p className="bold-text">Ad Age Best Place to Work</p>
            <small>
              Ok, sure. An award doesn&apos;t prove anything. But we thought
              we&apos;d add this a bit of &quot;proof&quot;. You see, our people
              voted us on the Ad Age Best Place to Work in 2019. It doesn&apos;t
              tell you everything but maybe it tells you something?
            </small>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="space-around">
          <div className="large-text bold-text">
            Strategists, innovators, storytellers
          </div>
        </div>
        <hr />
        <div className="flex-container-reverse">
          <div className="box-left">
            <button type="button" className="btn btn-light btn-align">
              Learn more
            </button>
          </div>
          <div className="box-right">
            <div className="left-padding">
              <small>
                Great work has a purpose, it solves a problem, it creates ways
                for people to connect. If it wins awards or if other people
                think it&apos;s cool then that&apos;s nice, we guess, but
                that&apos;s not why we do it. We do it because it has impact, it
                helps someone, it makes their lives easier or just more fun.
              </small>
            </div>
            <div>
              {data.allMarkdownRemark.edges.map((jobs, index) => (
                <Link to="#" className="link-style" key={jobs.node.id}>
                  <div className="flex-container space-around">
                    <div className="left">
                      {index + 1 < 10 && "0"}
                      {index + 1}
                    </div>
                    <div className="center">
                      <p
                        className="bold-text"
                        style={{
                          marginBottom: 0,
                        }}
                      >
                        {jobs.node.frontmatter.title}
                      </p>
                    </div>
                    <div className="right">
                      <small className="bold-text">
                        {jobs.node.frontmatter.nature}
                      </small>
                    </div>
                    <div className="content">
                      <small>{jobs.node.frontmatter.tagline}</small>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="large-text bold-text">Need Interactive Services?</div>
        <hr className="space-around" />
        <button type="button" className="btn btn-light btn-align">
          Let&apos;s chat about your needs.
        </button>
      </div>
    </Layout>
  )
}

export default CareersPage

export const data = graphql`
  query JobsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(jobs)/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            nature
            tagline
          }
        }
      }
    }
  }
`
