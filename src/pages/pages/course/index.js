import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import TableCustomized from 'src/views/tables/TableCourse'


const MUITable = () => {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h2'>
            
            Course Registration
    
          </Typography>
        </Grid>
     
        <Grid item xs={12}>
          <Card>
            <TableCustomized />
          </Card>
        </Grid>
      </Grid>
    )
  }
  
  export default MUITable