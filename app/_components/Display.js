"use client"
import { Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Box, TablePagination } from "@mui/material";
import { useEffect, useState } from "react";

import {collection, deleteDoc, onSnapshot, query, querySnapshot, doc } from 'firebase/firestore';
import {db} from '../../firebase';
import EmptyData from "./EmptyData";
import Loading from "./Loading";
import { toast } from "react-toastify";
import TableHeader from "../_table/TableHeader";
import TableCard from "../_table/TableCard";
import MyModal from "./MyModal";


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
  height: '46vh',
};
const StyledColumnsAndGenerator = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'flex-end', 
  height: '56vh', 
  gap: '5px'
}
const StyledTable = {
  width: '70%', 
  overflow: 'hidden', 
  display: 'flex', 
  border: '1px solid black', 
  flexDirection: 'column',
  height: '100%', 
  // bgcolor: 'tomato'
};
export default function Display() {
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [rows, setRows] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const handleCloseModal = () => setOpenModal(false);
    

    function handleOpenModal (rowId){
      setSelectedRow(rowId);
      setOpenModal(true);
    }
    function handleChangePage(e, newPage) {
        setPage(newPage);
    }
    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
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
  }, [setRows, setIsLoading, openModal]);
  const emptyData = rows.length === 0;
  return (
    <Box sx={StyledColumnsAndGenerator}>
        <Box sx={StyledChartBox}>
          Hello World
        </Box>


    <Paper sx={StyledTable}>
      <TableContainer sx={{maxHeight: '100%', border: '1px solid black', flex: '1 1 auto'}}>
        <Table stickyHeader aria-label = 'sticky table'> 
        <TableHead>
            <TableHeader columns={columns}/>
          </TableHead>
          {isLoading ? <Loading/>: 
          emptyData ? <EmptyData/> : (
            <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableCard key={row.id} 
              row={row}

              handleOpenModal={handleOpenModal}
              handleDeletePage={handleDeletePage} />
            ))}
          </TableBody>)}
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[]}
        sx={{alignSelf: 'flex-end' }}
      />
    </Paper>
    <MyModal openModal={openModal} handleCloseModal={handleCloseModal} selectedRow={selectedRow}/>
    </Box>
  )
}
