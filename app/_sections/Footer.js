import { Typography, Box, Divider } from '@mui/material';
import React from 'react';

const styleFooter = {
  bgcolor: '#f8f9fa', // Light background color
  color: '#6c757d', // Subtle text color
  p: '20px',
  textAlign: 'center',
  my: '20px'
};

const styleText = {
  fontSize: '14px',
  lineHeight: '2',
};

export default function Footer() {
  return (
    <footer style={styleFooter}>
      <Typography sx={styleText}>
        Terms Policy & Conditions | Contact Us | Help Center
      </Typography>
    </footer>
  );
}
