// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    date: '09/27/2018',
    name: 'Sally Quinn',
    email: 'eebsworth2m@sbwire.com',
  },
  {
    date: '09/23/2016',
    name: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
  },
  {
    date: '10/15/2017',
    name: 'Minnie Roy',
    email: 'ediehn6@163.com',
  },
  {
    date: '06/12/2018',
    name: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
  },
  {
    date: '03/24/2018',
    name: 'Annie Martin',
    email: 'sganderton2@tuttocitta.it'
  },
  {
    date: '08/25/2017',
    name: 'Adeline Day',
    email: 'hnisius4@gnu.org',
  },
  {
    date: '06/01/2017',
    name: 'Lora Jackson',
    email: 'ghoneywood5@narod.ru'
  },
  {
    date: '12/03/2017',
    name: 'Rodney Sharp',
    email: 'dcrossman3@google.co.jp'
  }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>First</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
