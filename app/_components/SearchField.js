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
  const [item, setItemName] = useState({
    itemName: '',
    department: '',
    quantity: 1,
  });

  // Add Item to firebase
  function handleAddItem(e){
    e.preventDefault();
    if(!item.itemName ||!item.department){
      return;
    }
    console.log(item);
    setItemName({itemName: '', department: '', quantity: 1});
  }


  return (
    <form style={StyledSearchField} onSubmit={handleAddItem}>
            <TextField id='searchItem' 
            label='e.g: Palets, Pen, Pencil,...' 
            required
            value={item.itemName}
            onChange={(e) => setItemName({...item, itemName: e.target.value})}
            sx={{ flex: 3,'& .MuiOutlinedInput-root': { borderRadius: '20px', borderColor: 'black'} }}
            />
            <TextField id='department'
            label='Department' 
            required
            value={item.department}
            onChange={(e) => setItemName({...item, department: e.target.value})}
            sx={{flex: 2, '& .MuiOutlinedInput-root': { borderRadius: '20px', borderColor: 'black'} }}
            
            />
            <TextField id="quantity"
            label='Quantity' 
            required
            type='number'
            value={item.quantity}
            onChange={(e) => setItemName({...item, quantity: e.target.value }) }
            sx={{ flex: 1,'& .MuiOutlinedInput-root': { borderRadius: '20px', borderColor: 'black' } }}
            />

            <Button sx={StyledButton} type='submit'>
              Add to Inventory
            </Button>
      </form>
  )
}
