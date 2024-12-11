import { Typography, Grid } from '@mui/material';
import NoticeCard from './NoticeCard';

export default function NoticesSection({ notices }) {
  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        Latest Updates
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {notices.map((notice) => (
          <Grid item xs={12} md={4} key={notice.id}>
            <NoticeCard {...notice} />
          </Grid>
        ))}
      </Grid>
    </>
  );
} 