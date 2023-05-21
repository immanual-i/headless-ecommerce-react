import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme"

const Footer = () => {
   const { palette: { neutral } } = useTheme();
   return (
      <Box
         mt="70px" p="40px 0" backgroundColor={neutral.light}>
         <Box
            width="80%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap="30px"
            columnGap="clamp(20px, 30px, 40px)"
         >
            {/* First Column */}
            <Box width="clamp(20%, 30%, 40%)">
               <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}
               >
                  MISFIT CLOTHING
               </Typography>
               <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corrupti incidunt at dolor nulla voluptates qui impedit dolore repellendus distinctio.
               </div>
            </Box>

            {/* Second Column */}
            <Box>
               <Typography variant="h4" fontWeight="bold" mb="30px">
                  About Us
               </Typography>
               <Typography mb="30px">Career</Typography>
               <Typography mb="30px">Our Stores</Typography>
               <Typography mb="30px">Terms & Conditions</Typography>
               <Typography mb="30px">Privacy Policy</Typography>
            </Box>

            {/* Third Column */}
            <Box>
               <Typography variant="h4" fontWeight="bold" mb="30px">
                  Customer Care
               </Typography>
               <Typography mb="30px">Help Center</Typography>
               <Typography mb="30px">Track Your Order</Typography>
               <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
               <Typography mb="30px">Returns & Refunds</Typography>
            </Box>

            {/* Fourth Column */}
            <Box width="clamp(20%, 25%, 30%)">
               <Typography variant="h4" fontWeight="bold" mb="30px">
                  Contact Us
               </Typography>
               <Typography mb="30px">Glamorgan Court 123</Typography>
               <Typography mb="30px">Email: testemail123@gmail.com</Typography>
               <Typography mb="30px">(123)123-1234</Typography>
            </Box>
         </Box>
      </Box>
   )
}

export default Footer