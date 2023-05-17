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
import useMediaQuery from '@mui/material/useMediaQuery';

function About() {
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '30px'
        }}
      >
        <Box
               sx={{
                 display: 'flex',
                 justifyContent: 'center',
                 width: '40vw',
                 marginTop: '20px'
               }}
             >
               <Avatar 
                 src={ perfil } 
                 alt='Foto de jonathan'
                 sx={{
                   width: '250px',
                   height: '250px',
                 }}
                 />
        </Box>
        <Box
           sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              textAlign: 'center',
              width: '70vw',
              }}
            >
            <Typography 
              variant='h3'
              sx={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginTop: '20px',
                marginBottom: '20px',
              }}
              >
              Sou um aspirante a Desenvolvedor Web em constante aprendizado.
            </Typography>
            <Typography sx={{fontSize: '1ren'}}>
              { message }
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography 
            variant='h4'
            marginTop='20px'
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
            >
              Contatos
            </Typography>
          <Box sx={{ marginBottom: '60px'}}>
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
      {
        matches ? <Footer /> : null 
      }
    </div>
  )
}

export default About