import { Button } from '@mui/material'
import React from 'react'

export default function GettingRecipe({query}) {
    function getRecipe() {
      console.log('Getting recipe for:', query);
    }
  return (
    <Button onClick={getRecipe}>
      Get Recipe
    </Button>
  )
}
