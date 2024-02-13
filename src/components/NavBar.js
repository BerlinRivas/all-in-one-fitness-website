import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxjiQtxn.6QmVPwxtrrJQShD4m2kpZI7l4sVSN0ZOZF_ImpwLfl_ugprnI8XkyZCjDnu7iDV6o4kzdRfWC712fRc-&format=source" alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <Link to="/exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</Link>
      <Link to="/diet-plan" style={{ textDecoration: 'none', color: '#3A1212' }}>Diet Plan</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#3A1212' }}>About</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: '#3A1212' }}>Contact</Link>
    </Stack>
  </Stack>
);

export default Navbar;