import { Box, Button, Typography } from '@mui/material'
import { AiOutlineProfile } from "react-icons/ai";

const StyleHeader = {
    bgcolor: 'white',
    display: 'flex',
    p: '16px',
    justifyContent: 'space-between',
    alignItems: 'center',
    
}
const StyleMenus = {
    display: 'flex',
    gap: '8px',
    mr: '1rem'

}
const StyleGetStarted = {
    bgcolor: 'black', 
    borderRadius: '16px',
    '&:hover': {
        backgroundColor: '#4d4c49',
        color: 'white',
      },

}
const StylesSignIn = {
    bgcolor: 'white', 
    color: 'black', 
    borderRadius: '16px',
    border: '1px solid grey',
    '&:hover': {
        backgroundColor: '#bfbeba',
        color: 'white',
      },
}
export default function Header() {
  return (
    <Box sx={StyleHeader}>
        <Box>
        <Typography variant='h5' sx={{fontFamily: 'serif', color: 'black', pl: '4rem'}}>
        Inventory Management System
        </Typography>
        </Box>

        <Box sx={StyleMenus}>
            <Button variant='outlined' sx={StylesSignIn}>
                Sign In
            </Button>
            <Button variant='contained' sx={StyleGetStarted}>
                Get Started
            </Button>
            <AiOutlineProfile size={40}/>
        </Box>
    </Box>
  )
}
