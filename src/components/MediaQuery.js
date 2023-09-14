import useMediaQuery from '@mui/material/useMediaQuery';

function MediaQuery() {
  const matches = useMediaQuery('(min-width:850px)');
  return matches;
}

export default MediaQuery;