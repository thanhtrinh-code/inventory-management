import { Box, Button, NativeSelect, Typography } from '@mui/material'
import Link from 'next/link'


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
export default function Header({type}) {
  return (
    <Box sx={StyleHeader}>
        <Box>
            <Link href='/' style={{textDecoration: 'none'}}>
        <Typography variant='h5' sx={{fontFamily: 'serif', color: 'black', pl: '4rem'}}>
        Inventory Management System
        </Typography>
        </Link>
        </Box>

        <Box sx={StyleMenus}>
            {type === 'login' && <Button variant='outlined' sx={StylesSignIn}>
                Sign In
            </Button>}
            <Button variant='contained' sx={StyleGetStarted}>
                {type ==='login' ? 'Get Started' : 'Log Out'}
            </Button>
        </Box>
    </Box>
  )
}
