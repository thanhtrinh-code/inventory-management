import { TableCell, TableRow } from "@mui/material";


export default function TableHeader({columns}) {
  return (
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
  )
}
