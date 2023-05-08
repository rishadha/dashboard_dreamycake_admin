import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from 'axios';

const Input = styled('input')({
  display: 'none',
});

const ProductForm = () => {
  const [product, setProduct] = useState({
    id:'',
    name: '',
    description: '',
    price: '',
    weight: '',
    photo: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleIdChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  

  const handlePhotoChange = (event) => {
    setProduct({
      ...product,
      photo: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.preventDefault();
    const { id, name } = product;
    const { description, price, weight, photo } = product;
  
    if (id) {
      console.log('Data succesfully post from the Front-end')
      axios.post('http://localhost:4000/product/new', {
        id,
        name,
        description,
        price,
        weight,
        photo
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    } else {
      alert('Please fill all the fields')
    }


    
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label="Id"
                name="id"
                value={product.id}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                name="description"
                value={product.description}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Weight"
                name="weight"
                type="number"
                value={product.weight}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="photo-upload"></InputLabel>
                <Input
                  id="photo-upload"
                  type="file"
                  name="photo"
                  onChange={handlePhotoChange}
                  required
                />
                <label htmlFor="photo-upload">
                  <IconButton color="primary" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Save Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
