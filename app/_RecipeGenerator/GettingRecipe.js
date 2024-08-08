import { Box, Button } from '@mui/material'
import React from 'react'

export default function GettingRecipe({query}) {
    async function getRecipe() {
      // API Call to fetch recipe
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`);
      const data = await res.json();
    }
  return (
    <Box>
      Recipe
    </Box>
  )
}
