import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Context from '../context/Context';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Deploy from '@mui/icons-material/AutoAwesome'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '20px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const ModalStarWars = () => {
  const { handleOpen, handleClose, openStarWars } = useContext(Context) 
  return (
    <div>
      <Button 
        onClick={handleOpen}
        id='STARWARS'
        variant="contained"
            sx={{ 
              color:'black',
              background: 'white',
              marginTop:'20px',
              border: 'solid black 1px',
              '&:hover':{ border:'black', background: 'black', color: 'white'} }}
        >
          StarWars
        </Button>
      <Modal
        hideBackdrop
        open={openStarWars}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">StarWars</h2>
          <p id="child-modal-description">
          Este projeto trata-se de uma aplicação com a tematica de Starwars e faz requisição
           a uma api para consumir dados dos planetas e suas características, 
           está aplicação possibilita fazer filtros em uma tabela de diversas formas.
          </p>
          <h5>Link do repositório no icone do Github.</h5>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://github.com/JonathanProjetos/StarWarsSeachPlanet"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://star-wars-seach-planet-jonathanprojetos.vercel.app/"
            target="_blank"
          >
            <Deploy fontSize="inherit" />
          </IconButton>
          <Button 
            onClick={handleClose} 
            variant="contained"
            id='STARWARS'
            sx={{ 
              color:'black',
              background: 'white',
              marginLeft:'20px', 
              '&:hover':{ border:'black', background: 'black', color: 'white'} }}
            >
              Close
            </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalStarWars;