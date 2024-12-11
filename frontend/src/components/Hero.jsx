import { Paper, Box, Container, Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://source.unsplash.com/random?courthouse)',
        height: { xs: '300px', sm: '400px' },
        width: '100%',
        borderRadius: 0
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Container maxWidth={false} sx={{ 
        position: 'relative', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        px: { xs: 2, sm: 4, md: 6, lg: 8 }
      }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
            lineHeight: { xs: 1.2, sm: 1.1 }
          }}
        >
          National Moot Court Competition 2024
        </Typography>
        <Typography 
          variant="h5"
          sx={{
            fontSize: { xs: '1.2rem', sm: '1.5rem' }
          }}
        >
          January 10-15, 2024
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ 
            mt: { xs: 2, sm: 4 }, 
            width: 'fit-content',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          View Latest Notices
        </Button>
      </Container>
    </Paper>
  );
} 