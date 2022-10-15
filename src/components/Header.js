import React from 'react'
import { Link } from 'react-router-dom'
import { IconeJS, LinkPosition, LinkHeader } from '../style/Header'

function Header() {
  return (
    <main>
      <LinkPosition>
        <div>
          <IconeJS href='https://my-portifolio-eta.vercel.app/' alt='Home'>JS</IconeJS>
        </div>
        <LinkHeader>
          <Link to="/about">Sobre</Link>
          <Link to="/stacks">Stacks</Link>
          <Link to="/projects">Projetos</Link>
        </LinkHeader>
      </LinkPosition>
    </main>
  )
};

export default Header
