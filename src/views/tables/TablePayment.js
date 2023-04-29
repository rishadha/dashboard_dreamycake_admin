import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
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

const createData = ( Order_No,User_Name,Payment_Type ,  Phone_Number) => {
  return {Order_No,User_Name,Payment_Type ,  Phone_Number}
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
          <StyledTableCell align='right'>Order_No</StyledTableCell>
            <StyledTableCell align='right'>User_Name</StyledTableCell>
            <StyledTableCell align='right'>Payment_Type</StyledTableCell>
            <StyledTableCell align='right'>Phone_Number</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              
              <StyledTableCell align='right'>{row.Order_No}</StyledTableCell>
              <StyledTableCell align='right'>{row.User_Name}</StyledTableCell>
              <StyledTableCell align='right'>{row.Payment_Type}</StyledTableCell>
              <StyledTableCell align='right'>{row.Phone_Number}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>





    </TableContainer>
  )
}

export default TableCustomized