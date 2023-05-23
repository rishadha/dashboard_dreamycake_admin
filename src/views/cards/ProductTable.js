import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        const productsWithId = response.data.products.map((product, index) => ({
          ...product,
          id: index + 1, // Generate a unique id for each row
        }));
        setProducts(productsWithId);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  
  const handleEdit = (product) => {
    console.log('Edit product:', product);
    // Call edit API and show edit form here
  };

  const handleDelete = (product) => {
    console.log('Delete product:', product);
    // Call delete API and remove the product from the state here
  };

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
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box marginTop={14}>
      <div style={{ height: 400, width: '100%' }}>
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
