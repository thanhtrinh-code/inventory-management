import { Box, Button, Divider } from '@mui/material';
import React from 'react'

const StyledChartBox = {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '7px',
    gridColumn: '3 / span 2',
    width: '30%',
    height: '56.4vh',
  };
export default function RecipeGenerator({selectedItems, displayRecipe, setDisplayRecipe }) {
  return (
    <Box sx={StyledChartBox}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Button sx={{mt: '5px', border: '1px solid black',}}>Generate</Button>
        </Box>
        <Divider sx={{bgcolor: 'black', mt: '5px', pt: '1px'}}/>
    </Box>
  )
}
