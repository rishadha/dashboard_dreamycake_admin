// ** MUI Imports
// import Paper from '@mui/material/Paper'
// import Table from '@mui/material/Table'
// import { styled } from '@mui/material/styles'
// import TableHead from '@mui/material/TableHead'
// import TableBody from '@mui/material/TableBody'
// import TableContainer from '@mui/material/TableContainer'
// import TableRow from '@mui/material/TableRow'
// import TableCell, { tableCellClasses } from '@mui/material/TableCell'

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     color: theme.palette.common.white,
//     backgroundColor: theme.palette.common.black
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14
//   }
// }))

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover
//   },

//   // hide last border
//   '&:last-of-type td, &:last-of-type th': {
//     border: 0
//   }
// }))

// const createData = (First_Name, Last_Name, Email, Address, Phone_Number, Course_Type) => {
//   return {First_Name, Last_Name, Email, Address, Phone_Number, Course_Type }
// }

// const rows = [
  
// ]

// const TableCustomized = () => {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label='customized table'>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align='right'>First_Name</StyledTableCell>
//             <StyledTableCell align='right'>Last_Name</StyledTableCell>
//             <StyledTableCell align='right'>Email</StyledTableCell>
//             <StyledTableCell align='right'>Address</StyledTableCell>
//             <StyledTableCell align='right'>Phone_Number</StyledTableCell>
//             <StyledTableCell align='right'>Course_Type</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component='th' scope='row'>
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align='right'>{row.First_Name}</StyledTableCell>
//               <StyledTableCell align='right'>{row.Last_Name}</StyledTableCell>
//               <StyledTableCell align='right'>{row.Email}</StyledTableCell>
//               <StyledTableCell align='right'>{row.Address}</StyledTableCell>
//               <StyledTableCell align='right'>{row.Phone_Number}</StyledTableCell>
//               <StyledTableCell align='right'>{row.Course_Type}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>

import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import{ Delete, Edit} from '@material-ui/icons';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

const createData = (First_Name, Last_Name, Email, Address, Phone_Number, Course_Type, Action) => {
  return {First_Name, Last_Name, Email, Address, Phone_Number, Course_Type, Action }
}

const TableCustomized = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:4000/api/courseData')
    .then(response => {
      // handle the response and update the state
      setRows(response.data.map(row => createData(row.firstname, row.lastname, row.email, row.address, row.phonenumber, row.course)));
    })
    .catch(error => {
      // handle the error
      console.log(error);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='right'>First_Name</StyledTableCell>
            <StyledTableCell align='right'>Last_Name</StyledTableCell>
            <StyledTableCell align='right'>Email</StyledTableCell>
            <StyledTableCell align='right'>Address</StyledTableCell>
            <StyledTableCell align='right'>Phone_Number</StyledTableCell>
            <StyledTableCell align='right'>Course_Type</StyledTableCell>
            <StyledTableCell align='right'>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align='right'>{row.First_Name}</StyledTableCell>
              <StyledTableCell align='right'>{row.Last_Name}</StyledTableCell>
              <StyledTableCell align='right'>{row.Email}</StyledTableCell>
              <StyledTableCell align='right'>{row.Address}</StyledTableCell>
              <StyledTableCell align='right'>{row.Phone_Number}</StyledTableCell>
              <StyledTableCell align='right'>{row.Course_Type}</StyledTableCell>
              <StyledTableCell align='right'> 
              <IconButton onClick={() => handleEdit(row.id)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleDelete(row.id)}>
                <Delete />
              </IconButton>
          
        </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>





    </TableContainer>
  )
}

export default TableCustomized
