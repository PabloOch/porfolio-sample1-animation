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


const ModalWallet = () => {

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
          Wallet
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
          Está e uma aplicação para cadastramento de tarefas, 
          nela e possível inserir valor dedicado para gastos e converter valores de real para varias moedas estrangeiras, 
          a aplicação permite inserir,excluir ou editar valores já adicionados há tabela, 
          após fazer o login na aplicação na área superior direito tem o somatório do valores 
          de todas as tabelas e o valor total sempre e atualizado quando adicionado, excluído ou editado um valor na tabela.
          </p>
          <h5>Link do repositório está no icone do Github.</h5>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://github.com/JonathanProjetos/Wallet"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={{ p: 0, pl: 2, color:'black' }}
            href="https://wallet-1p88arfrh-jonathanprojetos.vercel.app/"
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

export default ModalWallet;