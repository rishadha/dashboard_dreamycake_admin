import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton,  Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  // Fetch data from MongoDB here
  useEffect(() => {
    const fetchData = async () => {
      // Replace with the API endpoint that fetches the product data from MongoDB
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'id', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'weight', headerName: 'Weight', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            onClick={() => {
              console.log('Edit product:', params.row);
              {/*Call edit API and show edit form here*/}
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => {
              console.log('Delete product:', params.row);
              {/* Call delete API and remove the product from the state here*/}
            }}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box marginTop={14}>
    <div style={{ height: 400, width: '148%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    </Box>
  );
};

export default ProductTable;
