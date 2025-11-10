'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)', // on va lier ça au font Next.js
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // bleu un peu Tailwind vibes
    },
    secondary: {
      main: '#22c55e',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
