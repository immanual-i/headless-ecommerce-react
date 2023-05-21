import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

function Error404() {
   return (

      <Box sx={{ maxWidth: "800px", mx: "auto", textAlign: "center" }}>
         <Box sx={{ mt: 10 }}>
            <Typography variant="h1">
               404
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
               Sorry, the page you are looking for does not exist.
            </Typography>
            <Typography variant='body1' sx={{ mt: 2 }}>
               <Link to="/">Go back to Home</Link>
            </Typography>
         </Box>
      </Box>
   );
}

export default Error404;
