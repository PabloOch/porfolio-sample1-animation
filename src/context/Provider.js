import React, { useState  } from 'react';
import { useNavigate } from "react-router-dom";
import Context from './Context';


function Provider ({children}) {
  const navigate = useNavigate()
  const [mode, setMode] = useState('white');
  const [open, setOpen] = useState('')
  const [openStore, setOpenStore] = useState('')
  const [openBlog, setOpenBlog] = useState('')
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

  const handleOpen = ({ target }) => {
    console.log(target.innerText)
    if(target.innerText === "APP DE RECEITAS"){
      setOpen(true);
      setOpenStore(false);
      setOpenBlog(false);
    }

    if(target.innerText === "STORE MANAGER"){
      setOpen(false);
      setOpenStore(true);
      setOpenBlog(false);
    }

    if(target.innerText === "BLOGS API"){
      setOpen(false);
      setOpenStore(false);
      setOpenBlog(true);
    }
  };

  const handleClose = ({ target }) => {

    if(target.id === "APP DE RECEITAS"){
      setOpen(false);
    }

    if(target.id === "STORE MANAGER"){
      setOpenStore(false);
    }

    if(target.id === "BLOGS API"){
      setOpenBlog(false);
    }
  };

  const context = {
    handleOpen,
    handleClose,
    redirectAbout,
    toggleColor,
    mode,
    open,
    setOpenBlog,
    openBlog,
    setOpenStore,
    openStore
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )

}

export default Provider;