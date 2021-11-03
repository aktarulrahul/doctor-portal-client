import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: 'rgba(45, 58, 74, 0.8)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: '150px',
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: '-115px' }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          <Box>
            <Typography
              sx={{ my: 3 }}
              variant="h6"
              style={{ color: '#5ce7ed' }}
            >
              Appointment
            </Typography>
            <Typography sx={{ my: 3 }} variant="h4" style={{ color: 'white' }}>
              Make an Appointmrnt Today
            </Typography>
            <Typography
              sx={{ my: 3 }}
              variant="h6"
              style={{ color: 'white', fontSize: '14px', fontWeight: '300' }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus, recusandae tempora? Iure impedit distinctio voluptatem
              beatae tempore atque aspernatur corporis.
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
