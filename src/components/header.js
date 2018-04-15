import React from 'react'
import Link from 'gatsby-link'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#191e27',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.85rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <a href="https://www.linkedin.com/in/bdt2722"><FaLinkedinSquare style={{ fill: '#0077b5', float: 'right' }}/></a>
        <a href="https://github.com/modal17"><FaGithub style={{ fill: 'white', float: 'right'}}/></a>
      </h1>
    </div>
  </div>
)

export default Header
