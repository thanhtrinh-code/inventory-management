"use client"
import {Button, TextField} from '@mui/material';
import { useState } from 'react';


const StyledSearchField = {
    backgroundColor: 'white', 
    display: 'flex', 
    justifyContent: 'center', 
    width: '70%', 
    gap: '10px', 
    alignItems: 'center',
}
const StyledButton = {
  flex: '0 0 auto',
  bgcolor: 'green', 
  borderRadius: '20px', 
  height: '2.5rem', 
  color: 'white',
  '&:hover': {
    backgroundColor: '#38c914',
    color: 'white',
  },
}
export default function SearchField() {
  const [itemName, setItemName] = useState('');
  const [department, setDepartment] = useState('');
  const [quantity, setQuantity] = useState(0);

  function handleQuantityChange(e) {
    e.preventDefault();
    setQuantity(e.target.value);
  }
  return (
    <div style={StyledSearchField}>
            
            <TextField id='searchItem' 
            label='e.g: Palets, Pen, Pencil,...' 
            required
            value={itemName}
            sx={{ flex: 3,'& .MuiOutlinedInput-root': { borderRadius: '20px', borderColor: 'black'} }}
            />
            <TextField id='department'
            label='Department' 
            defaultValue='General'
            value={department}
            sx={{flex: 1, '& .MuiOutlinedInput-root': { borderRadius: '20px', borderColor: 'black'} }}
            required
            
            />
            <TextField id="quantity"
            label='Quantity' 
            required
            type='number'
            value={quantity}
            onChange={handleQuantityChange}
            sx={{ flex: 1,'& .MuiOutlinedInput-root': { borderRadius: '20px', borderColor: 'black' } }}
            />

            <Button sx={StyledButton}>
              Add to Inventory
            </Button>
          </div>
  )
}
