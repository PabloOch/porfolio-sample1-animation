import React, { useContext, useState }  from 'react';
import TypeAnimation from 'react-type-animation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ButtonHome } from '../style/Header'
import Context from '../context/Context';
import Arrow from '../images/icons/arrow.svg'
import Arrow1 from "../images/icons/arrow-1.svg";
import MediaQuery from '../components/MediaQuery';

function Home() {
  const [shown,  setIsShown] = useState(false)
  const { redirectAbout } = useContext(Context) 
  return (
    <>
      <Box
        component="section"
        sx={{
          height: '55vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Container>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              textAlign: 'center',
              fontSize: {
                lg: '5rem',
                md: '4rem',
                sm: '3rem',
                xs: '2rem',
              },
              color: 'text.grey',
            }}
          >
            Olá, me chamo
            {' '}
            <Box
              component="span"
              sx={{
                color: 'grey.600',
              }}

            >
              Jonathan Santos

            </Box>
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: {
                lg: '3rem',
                md: '2.4em',
                sm: '2rem',
                xs: '1.7rem',
              },
              display: "flex",
              justifyContent: "center",
              color: 'text.disabled',
              pl: 2,
            }}
          >
            <TypeAnimation
              cursor
              sequence={[
                'Full Stack Developer.',
                6000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </Typography>
        </Container>
      </Box>
      <Box
        component="section"
        sx={{
          height: '10vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        { MediaQuery() ?
        <ButtonHome
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={ redirectAbout }
        >
          { shown? (
            <img
            src={ Arrow1 } 
            alt='Seta'/>
          ) : (
            <img
            src={ Arrow } 
            alt='Seta'/>
          ) }
        </ButtonHome>
        :
        <ButtonHome
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={ redirectAbout }
        >
          { shown? (
            <img
            style={{ height: '7vh', width: '25vw',   }}
            src={ Arrow1 } 
            alt='Seta'/>
          ) : (
            <img
            style={{ height: '7vh', width: '25vw'  }}
            src={ Arrow } 
            alt='Seta'/>
          ) }
        </ButtonHome>
        }
      </Box>
    </>
  );
}

export default Home;