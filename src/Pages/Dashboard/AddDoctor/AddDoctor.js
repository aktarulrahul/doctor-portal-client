import React, { useState } from 'react';
import { Input, TextField, Button } from '@mui/material';

const AddDoctor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);
    fetch('http://localhost:5000/doctors', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setSuccess(true);
          console.log('Success:', result);
        }
      })
      .catch((err) => console.log('Error:', err));
  };
  return (
    <div>
      <h3>Add A Doctor</h3>
      <form
        style={{ width: '60%', marginRight: 'auto', marginLeft: 'auto' }}
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          sx={{ mb: 2 }}
          required
        />
        <Input
          accept="image/*"
          type="file"
          sx={{ mb: 2, border: 'none' }}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button
          variant="contained"
          sx={{ display: 'block', mx: 'auto' }}
          type="submit"
        >
          Add Doctor
        </Button>
      </form>
      {success && <p>Doctor Added Successfully.</p>}
    </div>
  );
};

export default AddDoctor;
