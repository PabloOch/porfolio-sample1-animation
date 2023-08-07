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


const ModalFoodDelivery = () => {

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
          Food Delivery
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
          A API Food Delivery é um e-commerce simples que oferece meios de acesso através de autenticação JWT utilizando bearer token. 
          Nele, foi realizada a proposta de regra de negócio para definir etapas de progressão da empresa. 
          Cada endpoint oferece o momento em que a empresa se encontra em relação 
          à quantidade de usuários cadastrados e à quantidade de produtos por usuário em cada etapa.
          A API também conta com uma documentação interna feita com o Swagger, que traz facilidade e rapidez ao acesso dos endpoints da aplicação.
          </p>
          <h5>Link do repositório está no icone do Github.</h5>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://github.com/JonathanProjetos/Food-Delivery"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://food-delivery-production-fba9.up.railway.app/docs/"
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

export default ModalFoodDelivery;