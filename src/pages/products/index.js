// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ProductTable from 'src/views/cards/ProductTable'
import ProductForm from 'src/views/cards/ProductForm'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Products</Typography>
      </Grid>
      <Grid>
        <ProductForm/>
      </Grid>
      <Grid>
        <ProductTable/>
      </Grid>
    </Grid>
  )
}

export default CardBasic
