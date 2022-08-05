import React from 'react'
import { Link } from 'react-router-dom'
// import js from '../images/js.png'
import { IconeJS, LinkPosition, LinkHeader } from '../style/Header'

function Header() {
  return (
    <main>
      <LinkPosition>
        <div>
          <IconeJS href='https://github.com/JonathanProjetos' alt='GitHub'>JS</IconeJS>
        </div>
        <LinkHeader>
          <Link to="/about">About</Link>
          <Link to="/stacks">Stacks</Link>
          <Link to="/projects">Projetos</Link>
        </LinkHeader>
      </LinkPosition>
    </main>
  )
};

export default Header