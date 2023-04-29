/* eslint-disable react/jsx-key */
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom'
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import IconButton from '@mui/material/IconButton';
  import Typography from '@mui/material/Typography';
  import Menu from '@mui/material/Menu';
  import MenuIcon from '@mui/icons-material/Menu';
  import Container from '@mui/material/Container';
  import Button from '@mui/material/Button';
  import MenuItem from '@mui/material/MenuItem';

  const pages = [
    <Link to="/">Home</Link>,
    <Link to="/about">Sobre</Link>,
    <Link to="/stacks">Stacks</Link>,
    <Link to="/projects">Projetos</Link>,
  ];

  function HomeMobile() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };


    return (
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ backgroundColor: 'black' }}>
          <Toolbar disableGutters>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page} 
                    onClick={handleCloseNavMenu}
                    sx={{textDecoration: 'none'}}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Typography
                color={'white'}
              >
                Jonathan Santos
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  export default HomeMobile;
