import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
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
        id='STORE MANAGER'
        variant="contained"
            sx={{ 
              color:'black',
              background: 'white',
              marginTop:'20px',
              marginBottom:'20px',
              border: 'solid black 1px',
              '&:hover':{ border:'black', background: 'black', color: 'white'} }}
        >
          Store Manager
        </Button>
      <Modal
        hideBackdrop
        open={toggle}
        onClose={handleToggle}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Store Manager</h2>
          <p id="child-modal-description">
          API RESTful utilizando arquitetura MSC. A pessoa usuária, 
          independente de cadastro, deve conseguir, adicionar, ler, deletar e atualizar produtos. 
          Enviar vendas para o sistema e essas vendas devem validar se o produto em questão existe, 
          também é possível ler, deletar e atualizar vendas;
          </p>
          <h5>Link do repositório está no icone do Github.</h5>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://github.com/JonathanProjetos/Store-Manager"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
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

export default ModalCardStore;