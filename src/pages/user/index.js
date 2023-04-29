// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import TableUser from 'src/views/typography/TableUser'
import Typography from '@mui/material/Typography'

const TypographyPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h2'>User Details</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <TableUser />
      </Grid>
    </Grid>
  )
}

export default TypographyPage
