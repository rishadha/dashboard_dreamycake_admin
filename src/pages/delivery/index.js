// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports

import DeliveryInformtion from '/src/views/form-layouts/DeliveryInformtion'

import 'react-datepicker/dist/react-datepicker.css'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        
        <Grid item xs={12}>
          <DeliveryInformtion />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
