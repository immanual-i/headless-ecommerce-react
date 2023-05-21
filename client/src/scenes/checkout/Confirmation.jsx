import React from "react";
import { Box, Typography } from "@mui/material";

const Confirmation = () => {
   return (
      <Box sx={{ width: "80%", mx: "auto", textAlign: "center" }}>
         <Typography variant="h3" sx={{ mt: 10 }}>
            Payment Successful
         </Typography>
         <Box sx={{ mt: 4 }}>
            <Typography variant="body1">
               Thank you for your purchase! Your payment has been successfully
               processed.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
               Your order confirmation and receipt will be sent to your email shortly.
            </Typography>
         </Box>
      </Box>
   );
};

export default Confirmation;
