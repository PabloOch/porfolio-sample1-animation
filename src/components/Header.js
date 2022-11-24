import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconeJS, LinkPosition, LinkHeader } from '../style/Header'
import HomeMobile from './HeaderMobile'

function Header() {
  const [w, setw] = useState('')
  const  medida = window.innerWidth;
  useEffect(() => {
    if(window.innerWidth < 340 ) {
      setw(window.innerWidth)
    }
  },[medida])

  return (
    <main>
      { console.log(w) }
      {window.innerWidth < Number(w)? (<HomeMobile/>):(
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
      )}
    </main>
  )
};

export default Header
