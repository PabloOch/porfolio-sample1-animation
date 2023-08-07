import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
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


const ModalTrivia = () => {

  const [toggle, setToogle] = useState('')

  const handleToggle = () => {
    if (toggle === true) {
      setToogle(false)
    }else {
      setToogle(true);
    }
  }

  return (
    <div>
      <Button 
        onClick={handleToggle}
        variant="contained"
            sx={{ 
              color:'black',
              background: 'white',
              border: 'solid black 1px',
              '&:hover':{ border:'black', background: 'black', color: 'white'} }}
        >
          Trívia
        </Button>
      <Modal
        hideBackdrop
        open={toggle}
        onClose={handleToggle}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Wallet</h2>
          <p id="child-modal-description">
          Trivia é um jogo de perguntas e respostas divertido e educativo. 
          O objetivo é acertar o máximo de perguntas em um tempo determinado. 
          A pontuação é baseada na quantidade de perguntas corretas e na rapidez em respondê-las. 
          É uma opção versátil e acessível para todos os públicos.
          </p>
          <h5>Link do repositório está no icone do Github.</h5>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://github.com/JonathanProjetos/Trivia"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://trivia-nu-ten.vercel.app/"
            target="_blank"
          >
            <Deploy fontSize="inherit" />
          </IconButton>
          <Button 
            onClick={handleToggle} 
            variant="contained"
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

export default ModalTrivia;