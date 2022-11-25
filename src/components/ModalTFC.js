import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Context from '../context/Context';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

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


const ModalTFC = () => {
  const { handleOpen, handleClose, openTFC } = useContext(Context) 
  return (
    <div>
      <Button 
        onClick={handleOpen}
        id="TFC"
        variant="contained"
            sx={{ 
              color:'black',
              background: 'white',
              marginTop:'20px',
              border: 'solid black 1px',
              '&:hover':{ border:'black', background: 'black', color: 'white'} }}
        >
          TFC - Trybe Foodball Club
        </Button>
      <Modal
        hideBackdrop
        open={openTFC}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">TFC Football Club</h2>
          <p id="child-modal-description">
          TFC é um site informativo sobre partidas e classificações de times de futebol! soccer. 
          O objetivo deste desafio é desenvolver uma API utilizando modelagem de dados através do 
          Sequelize para ser consumida pelo front que já está completamente implementado. 
          O acesso aos end-points, segue os princípios REST. 
          Para acessar alguns endereços vinculado ao usuário é necessário fazer autenticação e quando
          autenticado a API responderá trazendo um token no corpo da requisição. 
          O token deverá ser inserido no cabeçalho de cada requisição privada, com o intuito de autenticação.
          </p>
          <h5>Link do repositório no icone do Github.</h5>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://github.com/JonathanProjetos/TFC-Trybe-Football-Club"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <Button 
            onClick={handleClose} 
            variant="contained"
            id='TFC'
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

export default ModalTFC;