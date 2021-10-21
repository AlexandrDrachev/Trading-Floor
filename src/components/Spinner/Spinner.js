import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex', padding: '2.5rem' }}>
      <CircularProgress color="inherit" />
    </Box>
  );
}

export default Spinner;
