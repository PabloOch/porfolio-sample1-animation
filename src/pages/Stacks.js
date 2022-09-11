import React from 'react';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { aprendidas, desenvolvendo } from '../images/icons/Skill';

function Stacks() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        id="s"
      >
        <Container>
        <Box
          component="h2"
          variant="h2"
          align="center"
          textAlign= "center"
          sx={{
            py: 10,
            color: 'black',
            marginTop: "20px",
            fontSize: {
              xs: '3rem',
            },
          }}
        >
          Skills
        </Box>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {aprendidas.map((i) => (
            <Grid item xs={4} align="center" key={i.title}>
              <Box
                component="img"
                src={i.img}
                alt={i.title}
                sx={{
                  width: 52,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              />
              <Box variant="caption" sx={{ color: 'text.disabled' }}>
                {i.title}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Container>
        <Box
          component="h2"
          variant="h2"
          align="center"
          textAlign= "center"
          sx={{
            py: 10  ,
            color: 'color',
            fontSize: {
              xs: '3rem',
            },
          }}
        >
          Learning
        </Box>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {desenvolvendo.map((i) => (
            <Grid item xs={4} align="center" key={i.title}>
              <Box
                component="img"
                src={i.img}
                alt={i.title}
                sx={{
                  width: 52,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              />
              <Box variant="caption" sx={{ color: 'text.disabled' }}>
                {i.title}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Stack>
      <Footer />
    </div>
  )
}

export default Stacks