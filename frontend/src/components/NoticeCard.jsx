import { Card, CardContent, Typography, Button, Box } from '@mui/material';

export default function NoticeCard({ title, date, summary }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
          variant="h6" 
          gutterBottom
          sx={{ 
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
            lineHeight: 1.3
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          gutterBottom
          sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
        >
          {date}
        </Typography>
        <Typography 
          variant="body1"
          sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
        >
          {summary}
        </Typography>
        <Box sx={{ mt: 2, textAlign: 'right' }}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ 
              fontSize: { xs: '0.8rem', sm: '0.875rem' }
            }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
} 