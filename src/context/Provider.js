import React, { useState } from 'react';
import Context from './Context';


function Provider ({children}) {
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

  const context = {
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