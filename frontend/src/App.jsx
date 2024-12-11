import { Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NoticesSection from './components/NoticesSection';
import BrochureSection from './components/BrochureSection';
import Footer from './components/Footer';

function App() {
  const notices = [
    {
      id: 1,
      title: "Registration Deadline Extended",
      date: "2024-01-15",
      summary: "The registration deadline has been extended to January 30th, 2024."
    },
    {
      id: 2,
      title: "New Competition Schedule",
      date: "2024-01-14",
      summary: "Updated schedule for preliminary rounds now available."
    },
    {
      id: 3,
      title: "Judges Panel Announced",
      date: "2024-01-13",
      summary: "Distinguished panel of judges announced for the final rounds."
    }
  ];

  return (
    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <NoticesSection notices={notices} />
        <BrochureSection />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;