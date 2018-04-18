import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <p>
      When I'm not indulging in <strong>graphics programming, game development, or web design</strong>, 
      I'm likely watching cooking/food videos, trying to recreate such foods from aforementioned videos,
      then contemplating where it all went wrong.
    </p>
    <h3>projects</h3>
    <ul>
      <Link to="/">Global illumination demo/showcase.</Link>
    </ul>
    <ul>
      <Link to="/">Simple visualizations for sorting and ordering algorithms</Link>
    </ul>
    <ul>
      Learning React
    </ul>
    <ul>
      Rust and Servo
    </ul>

  </div>
  
)

export default IndexPage
