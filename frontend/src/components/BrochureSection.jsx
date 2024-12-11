import { Box, Typography, Button } from '@mui/material';

export default function BrochureSection() {
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h5" gutterBottom>
        Download Competition Brochure
      </Typography>
      <Button variant="contained" color="primary">
        Download PDF
      </Button>
    </Box>
  );
} 