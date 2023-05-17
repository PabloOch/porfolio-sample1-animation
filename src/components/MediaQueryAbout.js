import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import AboutMobile from './AboutMobile';
import About from '../pages/About';

function MediaQueryAbout() {
  const matches = useMediaQuery('(min-width:1024px)');

  return <div>
    {
      matches ? <About /> : <AboutMobile />
    }
  </div>
}

export default MediaQueryAbout;