"use client"
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'


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
    const pathname = usePathname();
    const router = useRouter();
    function handleNext(){
        router.push('/landing')
    };
    function handleSignOut(){
        localStorage.removeItem('token');
        router.push('/')
    }
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
            {pathname === '/' && (
            <>
                <Button variant='outlined' sx={StylesSignIn} onClick={handleNext}>
                    Sign In
                </Button>
                <Button variant='contained' sx={StyleGetStarted} onClick={handleNext}>
                    Get Started
                </Button>
            </>
            )}
            {pathname === '/landing' && (
                <Button variant='contained' sx={StyleGetStarted} onClick={handleSignOut}>
                    Sign Out
                </Button>
            )}
        </Box>
    </Box>
  )
}
