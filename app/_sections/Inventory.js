import { Box, Button } from '@mui/material'
import Display from '../_components/Display'


export default function Inventory() {
  return (
    <>
    <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'space-between', mx: '20px', fontFamily: 'Georgia'}}>
        <h2>
            Recipe Generator
        </h2>
        <h3>
            Inventory Items
        </h3>
    </Box>
    <Display/>
    </>
  )
}
