import React from 'react'
import Footer from '../components/Footer'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Grid from '@mui/material/Grid';
// import Divider from '@mui/material/Divider';
import perfil from '../images/profile/perfilexemple.svg'
import message from '../util/Message';

function About() {
  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50vw',
            marginTop: '90px'
          }}
        >
          <img src={ perfil } alt='Foto'/>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            textAlign: 'start',
            width: '50vw',
          }}
        >
          <h2>Sou um aspirante a Desenvolvedor Web em constante aprendizado.</h2>
          <h5>{ message }</h5>
        </Box>
      </Container>
      <Footer />
    </div>
  )
}

export default About