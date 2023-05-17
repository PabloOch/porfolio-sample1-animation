import React from 'react'
import Footer from '../components/Footer'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import perfil from '../images/profile/Minha-foto2.jpg'
import message from '../util/Message';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Avatar  from '@mui/material/Avatar';

function About() {
  console.log('AboutMobile')
  return (
    <Box>
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
              // height: '50vh',
            }}
          >
            <Avatar 
              src={ perfil } 
              alt='Foto de jonathan'
              sx={{
                width: '350px',
                height: '350px',
              }}
              />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              textAlign: 'start',
              width: '40vw',
              height: '30vh',
              }}
            >
            <Typography 
              variant='h4'
              sx={{
                fontSize: '25px',
                fontWeight: '600',
                marginTop: '20px',
              }}
              >
              Sou um aspirante a Desenvolvedor Web em constante aprendizado.
            </Typography>
            <Typography sx={{fontSize: '1.2rem', marginTop: '15px'}}>
              { message }
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography 
            variant='h4'
            sx={{
              marginTop: '50px',
              display: 'flex',
              justifyContent: 'center'
            }}
            >
              Contatos
            </Typography>
          <Box sx={{
            marginBottom: '50px',
          }}>
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
            <IconButton
                size="large"
                color="primary"
                backgroudcolor="white"
                sx={{ color:'black' }}
                href="https://docs.google.com/document/d/1PZlAgKIy0eBQIAsFTV4uZmPJihh5fpVqTQdm1T0Z4DE/edit#"
                target="_blank"
              >
                <ContactPageIcon fontSize="inherit" />
            </IconButton>

          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default About