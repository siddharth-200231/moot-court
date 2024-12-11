import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper', 
        py: 6, 
        mt: 4,
        width: '100%'
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Typography variant="h6" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Email: contact@mootcourt.com | Phone: +1234567890
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          Moot Court Competition {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
} 