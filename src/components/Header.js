import React from 'react'
import { Link } from 'react-router-dom'
// import js from '../images/js.png'
import { IconeJS, LinkPosition, LinkHeader } from '../style/Header'

function Header() {
  return (
    <main>
      <LinkPosition>
        <div>
          <IconeJS href='https://my-portifolio-eta.vercel.app/' alt='GitHub'>JS</IconeJS>
        </div>
        <LinkHeader>
          <Link to="/about">About</Link>
          <Link to="/stacks">Stack</Link>
          <Link to="/projects">Project</Link>
        </LinkHeader>
      </LinkPosition>
    </main>
  )
};

export default Header
