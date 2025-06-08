import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              textAlign: 'center',
              mb: 4,
            }}
          >
            About Me
          </Typography>
          
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 3,
            }}
          >
            Computer Science Engineering Student at RV College of Engineering
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 3,
            }}
          >
            I am a passionate and motivated Computer Science Engineering student with a strong academic record (CGPA: 9.18) and a deep enthusiasm for creating impactful software solutions. My expertise spans both backend and frontend development, with a particular focus on building scalable and user-friendly applications.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.secondary',
            }}
          >
            With proficiency in modern technologies like Node.js, Express.js, React.js, and MongoDB, I combine technical skills with creative problem-solving to develop innovative solutions. My interests extend to emerging technologies, particularly in machine learning and IoT, where I've successfully implemented real-world projects that demonstrate practical applications of these technologies.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 