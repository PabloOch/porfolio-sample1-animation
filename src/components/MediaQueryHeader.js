import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeMobile from './HeaderMobile';
import Header from './Header';

function MediaQueryHeader() {
  const matches = useMediaQuery('(min-width:850px)');

  return <div>
    {
      matches ? <Header /> : <HomeMobile />
    }
  </div>
}

export default MediaQueryHeader;