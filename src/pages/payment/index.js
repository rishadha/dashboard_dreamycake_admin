// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TablePayment from 'src/views/tables/TablePayment'


const Icons = () => {
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h2">Payment Details</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
      <TablePayment/>
      </Grid>
    </Grid>
  )
}

export default Icons
