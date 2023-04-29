import React, { useState  } from 'react';
import { useNavigate } from "react-router-dom";
import { PropTypes } from 'prop-types';
import Context from './Context';


function Provider ({ children }) {
  const navigate = useNavigate()
  const [mode, setMode] = useState('white');

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

  

  Provider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  const context = {
    redirectAbout,
    toggleColor,
    mode,
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )

}

export default Provider;