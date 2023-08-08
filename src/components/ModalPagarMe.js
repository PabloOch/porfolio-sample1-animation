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


const ModalPagarBem = () => {

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
          PagarMe
        </Button>
      <Modal
        hideBackdrop
        open={toggle}
        onClose={handleToggle}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">FoodDelivery</h2>
          <p id="child-modal-description">
          A API PagarMe é uma proposta de resolução do desafio técnico da Pager.me e oferece um sistema de Payment Service Provider (PSP) super simplificado.
          Para esta proposta, foi adicionado um sistema de cadastro para que o usuário cadastrado possa realizar transações financeiras quando autorizado.
          Esta aplicação gera autenticação utilizando bearer token através do JWT e tem como propósito simular o ciclo de uso, que se inicia com o cadastro, 
          autorização e manipulação dos dados. Espero que gostem, foi muito divertido desenvolver esta solução.
          </p>
          <h5>Link do repositório está no icone do Github.</h5>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://github.com/JonathanProjetos/PagarMe"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://pagarme-production.up.railway.app/docs/"
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

export default ModalPagarBem;