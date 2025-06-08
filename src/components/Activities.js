import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Activities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activities = [
    {
      title: 'Tech Tank Hackathon',
      description: 'Participated in the prestigious Tech Tank Hackathon, showcasing innovative problem-solving skills and technical expertise.',
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'All India Thal Sainik Camp',
      description: 'Successfully completed the All India Thal Sainik Camp, demonstrating exceptional leadership qualities and discipline.',
      icon: <MilitaryTechIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Lakshya 2024 Shooting Competition',
      description: 'Led the organization of the Lakshya 2024 shooting competition, highlighting strong event management and teamwork capabilities.',
      icon: <GroupsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
  ];

  return (
    <Box
      id="activities"
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
            Extracurricular Activities & Leadership
          </Typography>

          <Grid container spacing={4}>
            {activities.map((activity, index) => (
              <Grid item xs={12} md={4} key={activity.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={3}
                    sx={(theme) => ({
                      p: 3,
                      height: '100%',
                      borderRadius: 2,
                      backgroundColor: 'background.default',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        borderColor: theme.palette.primary.dark,
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                      },
                    })}
                  >
                    <Box sx={{ mb: 2 }}>{activity.icon}</Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {activity.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary' }}
                    >
                      {activity.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Activities; 