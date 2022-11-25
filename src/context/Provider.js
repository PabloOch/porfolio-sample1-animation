import React, { useState  } from 'react';
import { useNavigate } from "react-router-dom";
import { PropTypes } from 'prop-types';
import Context from './Context';


function Provider ({ children }) {
  const navigate = useNavigate()
  const [mode, setMode] = useState('white');
  const [open, setOpen] = useState('')
  const [openStore, setOpenStore] = useState('')
  const [openBlog, setOpenBlog] = useState('')
  const [openTFC, setOpenTFC] = useState('')
  const [openWallet, setOpenWallet] = useState('')
  const [openStarWars, setOpenStarWars] = useState('')
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
    if(target.id === "APP DE RECEITAS"){
      setOpen(true);
      setOpenStore(false);
      setOpenBlog(false);
      setOpenTFC(false);
      setOpenWallet(false);
      setOpenStarWars(false);
    }

    if(target.id === "STORE MANAGER"){
      setOpen(false);
      setOpenStore(true);
      setOpenBlog(false);
      setOpenTFC(false);
      setOpenWallet(false);
      setOpenStarWars(false);
    }

    if(target.id === "BLOGS API"){
      setOpen(false);
      setOpenStore(false);
      setOpenBlog(true);
      setOpenTFC(false);
      setOpenWallet(false);
      setOpenStarWars(false);
    }

    if(target.id === "TFC"){
      setOpen(false);
      setOpenStore(false);
      setOpenBlog(false);
      setOpenTFC(true);
      setOpenWallet(false);
      setOpenStarWars(false);
    }
    if(target.id === "WALLET"){
      setOpen(false);
      setOpenStore(false);
      setOpenBlog(false);
      setOpenTFC(false);
      setOpenWallet(true);
      setOpenStarWars(false);
    }
    if(target.id === "STARWARS"){
      setOpen(false);
      setOpenStore(false);
      setOpenBlog(false);
      setOpenTFC(false);
      setOpenWallet(false);
      setOpenStarWars(true);
    }
  };

  const handleClose = ({ target }) => {
    console.log(target.id);
    if(target.id === "APP DE RECEITAS"){
      setOpen(false);
    }

    if(target.id === "STORE MANAGER"){
      setOpenStore(false);
    }

    if(target.id === "BLOGS API"){
      setOpenBlog(false);
    }

    if(target.id === "TFC"){
      setOpenTFC(false);
    }

    if(target.id === "WALLET"){
      setOpenWallet(false);
    }

    if(target.id === "STARWARS"){
      setOpenStarWars(false);
    }
  };

  Provider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  const context = {
    handleOpen,
    handleClose,
    redirectAbout,
    toggleColor,
    mode,
    open,
    openBlog,
    openStore,
    openTFC,
    openWallet,
    openStarWars
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )

}

export default Provider;