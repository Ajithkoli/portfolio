import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "RV College of Engineering",
      duration: "2021 - Present",
      details: "CGPA: 9.18",
    },
    {
      degree: "Pre-University Education",
      institution: "Science Stream",
      duration: "2019 - 2021",
      details: "Strong foundation in science and mathematics",
    },
  ];

  return (
    <Box
      id="education"
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
              mb: 6,
            }}
          >
            Education
          </Typography>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  mb: 3,
                  borderRadius: 2,
                  backgroundColor: 'white',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolIcon sx={{ color: 'primary.main', mr: 2, fontSize: 30 }} />
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                    {edu.degree}
                  </Typography>
                </Box>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {edu.institution}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {edu.duration}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {edu.details}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 