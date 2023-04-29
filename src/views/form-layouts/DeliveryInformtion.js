import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import { useState, useEffect } from 'react';

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

const createData = (Name, Address, District, Postal_Code, Phone_Number ) => {
  return {Name, Address, District, postal_Code, Phone_Number }
}

const TableCustomized = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // //establish connection to MongoDB using a driver, for example:
    // //import mongodb from 'mongodb';
    // //const MongoClient = mongodb.MongoClient;
    // //const uri = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority';
    // //const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // //await client.connect();
    // //const collection = client.db('<dbname>').collection('<collectionname>');

    // //fetch data from MongoDB collection
    // collection.find({}).toArray((err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     setRows(data.map(row => createData(row.First_Name, row.Last_Name, row.Email, row.Address, row.Phone_Number, row.Course_Type)));
    //   }
    // });

    // //close the connection
    // //await client.close();
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
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align='right'>{row.Name}</StyledTableCell>
              <StyledTableCell align='right'>{row.Address}</StyledTableCell>
              <StyledTableCell align='right'>{row.District}</StyledTableCell>
              <StyledTableCell align='right'>{row.Postal_Code}</StyledTableCell>
              <StyledTableCell align='right'>{row.Phone_Number}</StyledTableCell>

            </StyledTableRow>             
            
          ))}
        </TableBody>
      </Table>





    </TableContainer>
  )
}

export default TableCustomized