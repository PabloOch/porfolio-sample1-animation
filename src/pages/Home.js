import React, { useContext, useState }  from 'react';
import TypeAnimation from 'react-type-animation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ButtonHome } from '../style/Header'
import Context from '../context/Context';
import Arrow from '../images/icons/arrow.svg'
import Arrow1 from "../images/icons/arrow-1.svg";

function Home() {
  const [shown,  setIsShown] = useState(false)
  const { redirectAbout } = useContext(Context) 
  return (
    <>
      <Box
        component="section"
        sx={{
          height: '70vh',
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
              fontSize: {
                lg: '6rem',
                md: '6rem',
                sm: '6rem',
                xs: '3rem',
              },
              color: 'text.grey',
            }}
          >
            Olá, me chamo!
            {' '}
            <Box
              component="span"
              sx={{
                color: 'grey.600',
              }}

            >
              Jonathan santos

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
              color: 'text.disabled',
              pl: 2,
            }}
          >
            <TypeAnimation
              cursor
              sequence={[
                'Front-end Developer.',
                6000,
                'Back-end Student.',
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
          height: '15vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
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
      </Box>
    </>
  );
}

export default Home;