import { TableBody } from "@mui/material";
import TableCard from "./TableCard";

export default function MyTableBody({rows}) {
    
  return (
    <TableBody>
            {rows.filter((item) => {
              return item.itemName.toLowerCase() === '' ? item : item.itemName.toLowerCase().includes(search.toLowerCase());
            })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
              <TableCard key={row.id} 
              row={row}
              handleSelectedItems={handleSelectedItems}
              handleOpenModal={handleOpenModal}
              handleDeletePage={handleDeletePage} />
            ))}
    </TableBody>
  )
}
