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
import ModalFoodDelivery from '../components/ModalFoodDelivery';
import useMediaQuery from '@mui/material/useMediaQuery';
import ModalTrivia from '../components/ModalTrivia';
import ModalPagarBem from '../components/ModalPagarMe';

function Projects() {
  const matches = useMediaQuery('(min-width:850px)');

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
          <Grid item xs={12} sm={6} md={3} xl={0} align="center">
            <CardMedia
              component="img"
              height="260"
              image={images.apprecipe.img}
              alt='app recipe'
              onClick={() => window.location.href = 'https://github.com/JonathanProjetos/App-Recipes'}
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
          <Grid item xs={12} sm={6} md={3} xl={0} align="center">
            <CardMedia
              component="img"
              height="260"
              image={images.storeManager.img}
              onClick={() => window.location.href = 'https://github.com/JonathanProjetos/Store-Manager'}
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
          <Grid item xs={12} sm={6} md={3} xl={0} align="center">
            <CardMedia
              component="img"
              height="260"
              image={images.blogs.img}
              onClick={() => window.location.href = 'https://github.com/JonathanProjetos/Blogs-Api'}
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
          <Grid item xs={12} sm={6} md={3} xl={0} align="center">
            <CardMedia
              component="img"
              height="260"
              image={images.TFC.img}
              onClick={() => window.location.href = 'https://github.com/JonathanProjetos/TFC-Trybe-Football-Club'}
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
          <Grid item xs={12} sm={6} md={3} xl={0} align="center">
            <CardMedia
              component="img"
              height="260"
              image={images.Wallet.img}
              onClick={() => window.location.href = 'https://wallet-1p88arfrh-jonathanprojetos.vercel.app/'}
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
          <Grid item xs={12} sm={6} md={3} xl={0} align="center">
            <CardMedia
              component="img"
              height="260"
              width="200"
              image={images.StarWars.img}
              onClick={() => window.location.href = 'https://star-wars-seach-planet-jonathanprojetos.vercel.app/'}
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
          <Grid item xs={12} sm={6} md={3} xl={0} align="center">
            <CardMedia
              component="img"
              height="260"
              image={images.FoodDelivery.img}
              onClick={() => window.location.href = 'https://food-delivery-production-fba9.up.railway.app/docs/'}
              alt='food-delivery'
              sx={{
                width: 240,
                borderRadius: '9px',
                margin: '20px',
                '&:hover': {
                  boxShadow: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
                }
              }}
            />
            <ModalFoodDelivery />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={0} align="center">
            <CardMedia
              component="img"
              height="260"
              image={images.trivia.img}
              onClick={() => window.location.href = 'https://trivia-nu-ten.vercel.app/'}
              alt='trivia'
              sx={{
                width: 240,
                borderRadius: '9px',
                margin: '20px',
                '&:hover': {
                  boxShadow: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
                }
              }}
            />
            <ModalTrivia />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={0} align="center">
            <CardMedia
              component="img"
              height="260"
              image={images.Transaction.img}
              onClick={() => window.location.href = 'https://pagarme-production.up.railway.app/docs/'}
              alt='PagarMe'
              sx={{
                width: 240,
                borderRadius: '9px',
                margin: '20px',
                '&:hover': {
                  boxShadow: '4px 4px 4px 1px rgba(0, 0, 0, 0.2)'
                }
              }}
            />
            <ModalPagarBem />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={0} align="center">
            <CardMedia
              component="img"
              height="260"
              image={images.comingSoon.img}
              alt='coming soon'
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
      {
        matches ? <Footer /> : null
      }
    </div>
  )
}

export default Projects