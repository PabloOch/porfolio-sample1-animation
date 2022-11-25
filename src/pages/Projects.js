import React from 'react'
import Footer from '../components/Footer'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import images from '../images/project/ImageProjetos';
import ModalCardAPP from '../components/ModalApp';
import ModalCardStore from '../components/ModalStore';
import ModalBlog from '../components/ModalBlog';
import ModalTFC from '../components/ModalTFC';
import ModalWallet from '../components/ModalWallet';
import ModalStarWars from '../components/ModalStarWars';


function Projects() {
  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100vw',
          marginBottom: '200px' 
        }}
      >
        <Typography
          sx={{
            py: 5,
            color: 'color',
            marginBottom: '40px',
            fontWeight: '600',
            fontSize: {
              xs: '3rem',
            },
          }}
        >
          Projetos
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2} align="center" md={3}>
            <CardMedia
              component="img"
              height="260"
              image={images.apprecipe.img}
              alt='app-recipes'
              sx={{
                width: 240,
                borderRadius: '9px',
                '&:hover': {
                  boxShadow: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
                }
              }}
            />
            <ModalCardAPP/>
          </Grid>
          <Grid item xs={2} align="center" md={3}>
            <CardMedia
              component="img"
              height="260"
              image={images.storeManager.img}
              alt='store-manager'
              sx={{
                width: 240,
                borderRadius: '9px',
                '&:hover': {
                  boxShadow: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
                }
              }}
            />
            <ModalCardStore/>
          </Grid>
          <Grid item xs={2} align="center" md={3}>
            <CardMedia
              component="img"
              height="260"
              image={images.blogs.img}
              alt='blogs api'
              sx={{
                width: 240,
                borderRadius: '9px',
                '&:hover': {
                  boxShadow: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
                }
              }}
            />
            <ModalBlog/>
          </Grid>
          <Grid item xs={2} align="center" md={3}>
            <CardMedia
              component="img"
              height="260"
              image={images.TFC.img}
              alt='Trybe futball club'
              sx={{
                width: 240,
                borderRadius: '9px',
                '&:hover': {
                  boxShadow: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
                }
              }}
            />
            <ModalTFC />
          </Grid>
          <Grid item xs={2} align="center" md={3}>
            <CardMedia
              component="img"
              height="260"
              image={images.Wallet.img}
              alt='Wallet'
              sx={{
                width: 240,
                borderRadius: '9px',
                backgroundColor: 'grey.300',
                margin: '20px',
                '&:hover': {
                  boxShadow: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
                }
              }}
            />
            <ModalWallet />
          </Grid>
          <Grid item xs={2} align="center" md={3}>
            <CardMedia
              component="img"
              height="260"
              image={images.StarWars.img}
              alt='StarWars'
              sx={{
                width: 240,
                borderRadius: '9px',
                margin: '20px',
                '&:hover': {
                  boxShadow: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
                }
              }}
            />
            <ModalStarWars />
          </Grid>
          <Grid item xs={2} align="center" md={3}>
            <CardMedia
              component="img"
              height="260"
              image={images.comingSoon.img}
              alt='app-recipes'
              sx={{
                width: 240,
                borderRadius: '9px',
                margin: '20px',
                '&:hover': {
                  boxShadow: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
                }
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}

export default Projects