import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'

import { styled } from '@mui/material/styles'

import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'

import TableCell, { tableCellClasses } from '@mui/material/TableCell'

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

const TableCustomized = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/deliveries")
      .then((response) => response.json())
      .then((data) => setDeliveries(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='right'>Name</StyledTableCell>
            <StyledTableCell align='right'>Address</StyledTableCell>
            <StyledTableCell align='right'>District</StyledTableCell>
            <StyledTableCell align='right'>Postal_Code</StyledTableCell>
            <StyledTableCell align='right'>Phone_Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliveries.map(delivery => (
            <StyledTableRow key={delivery._id}>
              <StyledTableCell align='right'>{delivery.name}</StyledTableCell>
              <StyledTableCell align='right'>{delivery.address}</StyledTableCell>
              <StyledTableCell align='right'>{delivery.district}</StyledTableCell>
              <StyledTableCell align='right'>{delivery.postalcode}</StyledTableCell>
              <StyledTableCell align='right'>{delivery.phonenumber}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCustomized
