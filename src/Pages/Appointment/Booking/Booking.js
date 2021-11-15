import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  const { name, time, space, price } = booking;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 4 }}>
          <Typography variant="h5" sx={{ color: 'info.main', fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="caption" display="block">
            {space} SPACES AVAILABLES
          </Typography>
          <Typography variant="caption" display="block">
            Price ${price}
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        date={date}
        setBookingSuccess={setBookingSuccess}
      />
    </>
  );
};

export default Booking;
