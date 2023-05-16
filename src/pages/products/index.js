import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProductTable from 'src/views/cards/ProductTable';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import ProductForm from 'src/views/cards/ProductForm';
import Button from '@mui/material/Button';

const ProductTableWithRef = React.forwardRef((props, ref) => {
  return (
    <table ref={ref}>
      {/* table content */}
      
    </table>
  );
});

const CardBasic = () => {
  const pdfExportComponent = useRef(null);
  const tableRef = useRef(null);

  const exportPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  const printTable = () => {
    const tableContent = tableRef.current.outerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Dreamy cake </title></head><body>');
    printWindow.document.write(<ProductTable/>);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant="h5">Products</Typography>
      </Grid>
      <Grid item xs={12}>
        <ProductForm />
      </Grid>
      <Grid item xs={12} sx={{ position: 'relative' }}>
      <PDFExport ref={pdfExportComponent}>
          <ProductTable />
        </PDFExport>
        <ProductTableWithRef ref={tableRef} />
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: '10px',
            width: '100%',
          }}
        >
          <Button fullWidth variant="contained" color="primary" type="submit" onClick={printTable} sx={{ width: '120px' }}>
          Print
          </Button>
          <Button fullWidth variant="contained" color="primary" type="submit" onClick={exportPDF} sx={{ width: '160px' }}>
          Export to PDF
          </Button>
         
        </div>
        
      </Grid>
    </Grid>
  );
};

export default CardBasic;
