import React, { useState  } from 'react';
import { useNavigate } from "react-router-dom";
import Context from './Context';


function Provider ({children}) {
  const navigate = useNavigate()
  const [mode, setMode] = useState('white');
  console.log(mode);

  const toggleColor = ({ target }) => {
    if(target.name === "black" ) {
      setMode("white")
    }

    if(target.name === "white") {
      setMode("black")
    }
  }

  const redirectAbout = () => {
    navigate('/about')
  }

/*   const imageWhite = () => {
    return (
      <img src={ Arrow } alt="Seta"/>
    )
  }
 */

  const context = {
    redirectAbout,
    toggleColor,
    mode
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )

}

export default Provider;