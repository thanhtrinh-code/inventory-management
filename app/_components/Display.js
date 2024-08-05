"use client"
import { Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from "@mui/material";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";


const columns = [
    {id: 'itemName', label: 'Item Name', minWidth: 80},
    {id: 'quantity', label: 'Quantity', minWidth: 80},
    {id: 'department', label: 'Department', minWidth: 80},
    {id: 'action', label: '', minWidth: 30},
];
function createData(itemName, quantity, department) {
    return {itemName, quantity, department };
}
const rows = [
    createData('Apple', 10, 'Produce'),
    createData('Palets', 20, 'Grocery'),
    createData('Knife', 5, 'Meat'),
    createData('Cup', 15, 'Kitchen'),
    createData('Table', 12, 'Furniture'),
]
const StyledChartBox = {
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '7px',
  padding: '2.4rem 3.2rem',
  gridColumn: '3 / span 2',
  width: '30%',
  height: '175px',

};
export default function Display() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    function handleChangePage(e) {
        setRowsPerPage(+e.target.value);
        setPage(0);
    }
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '250px', gap: '5px'}}>
        <div style={StyledChartBox}>
          Hello World
        </div>


    <Paper sx={{width: '70%', overflow: 'hidden', display: 'flex', border: '1px solid black'}}>
      <TableContainer sx={{maxHeight: '250px', border: '1px solid black'}}>
        <Table stickyHeader aria-label = 'sticky table'> 
        <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , 
                    borderBottom: '2px solid black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.itemName}>
                <TableCell style={{borderBottom: '1px solid black'}}>{row.itemName}</TableCell>
                <TableCell style={{borderBottom: '1px solid black'}}>{row.quantity}</TableCell>
                <TableCell style={{borderBottom: '1px solid black'}}>{row.department}</TableCell>
                <TableCell align="center" style={{borderBottom: '1px solid black'}}>
                  {<CiMenuKebab size={20}/>}
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </div>
  )
}
