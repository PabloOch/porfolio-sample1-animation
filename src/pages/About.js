import React from 'react'
import Footer from '../components/Footer'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import perfil from '../images/profile/perfilexemple.svg'
import message from '../util/Message';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

function About() {
  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
           sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '40vw',
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
              width: '40vw',
              }}
            >
            <Typography 
              variant='h4'
              sx={{
                fontSize: '25px',
                fontWeight: '600',
              }}
              >
              Sou um aspirante a Desenvolvedor Web em constante aprendizado.
            </Typography>
            <Typography variant='h6'>
              { message }
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography 
            variant='h4'
            sx={{
              marginTop: '100px',
              display: 'flex',
              justifyContent: 'center'
            }}
            >
              Contatos
            </Typography>
          <Box>
            <IconButton
                size="large"
                color="primary"
                sx={{ color:'black' }}
                href="https://www.linkedin.com/in/jonathan-jhon/"
                target="_blank"
              >
                <LinkedInIcon fontSize="inherit" />
              </IconButton>

              <IconButton
                size="large"
                color="primary"
                backgroudcolor="white"
                sx={{ color:'black' }}
                href="https://github.com/JonathanProjetos"
                target="_blank"
              >
                <GitHubIcon fontSize="inherit" />
              </IconButton>

              <IconButton
                size="large"
                color="primary"
                backgroudcolor="white"
                sx={{ color:'black' }}
                href="mailto:jonathan01347@gmail.com"
                target="_blank"
              >
                <EmailIcon fontSize="inherit" />
            </IconButton>

            <IconButton
                size="large"
                color="primary"
                backgroudcolor="white"
                sx={{ color:'black' }}
                href="https://wa.me/5531975103073"
                target="_blank"
              >
                <WhatsAppIcon fontSize="inherit" />
            </IconButton>

          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  )
}

export default About