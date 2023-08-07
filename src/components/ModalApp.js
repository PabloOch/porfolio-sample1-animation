import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// import Context from '../context/Context';
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

const ModalCardAPP = () => {

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
              marginTop:'20px',
              marginBottom:'20px',
              border: 'solid black 1px',
              '&:hover':{ border:'black', background: 'black', color: 'white'} }}
        >
          App de Receitas
        </Button>
      <Modal
        hideBackdrop
        open={toggle}
        onClose={handleToggle}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">APP Receitas</h2>
          <p id="child-modal-description">
          Esta e uma aplicação front-end para consulta de receitas de comidas ou bebidas,
          nesta aplicação e possível acompanhar, filtrar e excluir receitas selecionadas, 
          tambem é possível pesquisar uma receita pelo ingrediente e também por nacionalidade, 
          a aplicação também conta com uma funcionalidade que possibilita pega uma receita surpresa que é caracterizada por uma recita aleatória.
          </p>
          <h5>Link do repositório está no icone do Github.</h5>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://github.com/JonathanProjetos/App-Recipes"
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

export default ModalCardAPP;