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


const ModalCardStore = () => {
  const { handleOpen, handleClose, openBlog } = useContext(Context) 
  return (
    <div>
      <Button 
        onClick={handleOpen}
        variant="contained"
            sx={{ 
              color:'black',
              background: 'white',
              marginTop:'20px',
              border: 'solid black 1px',
              '&:hover':{ border:'black', background: 'black', color: 'white'} }}
        >
          Blogs Api
        </Button>
      <Modal
        hideBackdrop
        open={openBlog}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title"> Blogs Api</h2>
          <p id="child-modal-description">
          Nesta aplicação foi desenvolvido uma API e um banco de dados, com intuito de produzir conteúdo para um blog. 
          A aplicação segue os princípios REST. Para acessar os endereços da aplicação, 
          é necessário fazer autenticação e quando autenticado a API responderá trazendo um token no corpo da requisição. 
          O token deverá ser inserido no cabeçalho de cada requisição privada, com o intuito de autenticação. 
          A arquitetura da aplicação se baseia em relações entre usuário por postagem e de postagem por categorias. 
          Dentro do projeto existe um diagrama exemplificando estas ligações.
          </p>
          <h5>Link do repositório no icone do Github.</h5>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://github.com/JonathanProjetos/Blogs-Api"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <Button 
            onClick={handleClose} 
            variant="contained"
            id='BLOGS API'
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

export default ModalCardStore;