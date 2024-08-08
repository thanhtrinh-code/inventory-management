import { Box, Button, Divider } from '@mui/material';
import React from 'react'
import GettingRecipe from './GettingRecipe';

const StyledChartBox = {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '7px',
    gridColumn: '3 / span 2',
    width: '30%',
    height: '56.4vh',
  };
export default function RecipeGenerator({displayRecipe, handleDisplayRecipe, prevSelectedItems }) {
  const query = prevSelectedItems.map(item => item.toLowerCase()).join('+');
  return (
    <Box sx={StyledChartBox}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Button sx={{mt: '5px', border: '1px solid black'}} onClick={handleDisplayRecipe}>
            Generate
          </Button>
        </Box>
        <Divider sx={{bgcolor: 'black', mt: '5px', pt: '1px'}}/>
        {displayRecipe && <GettingRecipe query={query}/>}
    </Box>
  )
}
