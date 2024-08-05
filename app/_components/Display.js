"use client"
import { Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import {collection, deleteDoc, onSnapshot, query, querySnapshot, doc } from 'firebase/firestore';
import {db} from '../../firebase';
import EmptyData from "./EmptyData";
import Loading from "./Loading";
import { toast } from "react-toastify";


const columns = [
    {id: 'itemName', label: 'Item Name', minWidth: 80},
    {id: 'quantity', label: 'Quantity', minWidth: 80},
    {id: 'department', label: 'Department', minWidth: 80},
    {id: 'action', label: '', minWidth: 30},
];
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
    const [isLoading, setIsLoading] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState([]);
    function handleChangePage(e) {
        setRowsPerPage(+e.target.value);
        setPage(0);
    }
    const handleDeletePage = async (id) => {
      try {
        await deleteDoc(doc(db, 'inventory', id));
        toast.success('Document deleted successfully');
      } catch (error) {
        toast.error('Error deleting document');
      }
    };
  // Read data from firebase
  useEffect(() => {
    const q = query(collection(db, 'inventory'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setRows(data);
      setIsLoading(false);
    })
    return () => unsubscribe();
  }, [setRows, setIsLoading]);
  const emptyData = rows.length === 0;
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '250px', gap: '5px'}}>
        <Box sx={StyledChartBox}>
          Hello World
        </Box>


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
          {isLoading ? <Loading/>: 
          emptyData ? <EmptyData/> : (
            <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{borderBottom: '1px solid black'}}>{row.itemName}</TableCell>
                <TableCell style={{borderBottom: '1px solid black'}}>{row.quantity}</TableCell>
                <TableCell style={{borderBottom: '1px solid black'}}>{row.department}</TableCell>
                <TableCell align="center" style={{borderBottom: '1px solid black'}}>
                  {<div style={{display: 'flex',alignItems: 'center', gap: '20px'}}>
                    <MdModeEdit size={20} style={{cursor: 'pointer'}}
                  onClick={() => console.log('clicked')}/>
                  <FaTrashAlt size={20} 
                  onClick={() => handleDeletePage(row.id)}
                  style={{cursor: 'pointer'}}/>
                  </div>
                  }
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>)}
        </Table>
      </TableContainer>
    </Paper>
    </Box>
  )
}
