import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import TerminalIcon from '@mui/icons-material/Terminal';
import BugReportIcon from '@mui/icons-material/BugReport';
import SpeedIcon from '@mui/icons-material/Speed';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'transparent',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at top right, ${theme.palette.primary.main}15, transparent 50%),
                radial-gradient(circle at bottom left, ${theme.palette.secondary.main}15, transparent 50%)`,
    zIndex: 0,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(203, 213, 225, 0.4)',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 600,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
}));

const CodeBlock = styled(Box)(({ theme }) => ({
  background: 'rgba(17, 34, 64, 0.95)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  fontFamily: '"Fira Code", monospace',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },
}));

const CodeLine = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  '& .line-number': {
    color: theme.palette.text.secondary,
    opacity: 0.5,
    minWidth: '20px',
  },
  '& .code-content': {
    color: theme.palette.text.primary,
  },
  '& .keyword': {
    color: '#ff79c6',
  },
  '& .string': {
    color: '#f1fa8c',
  },
  '& .comment': {
    color: '#6272a4',
  },
  '& .function': {
    color: '#50fa7b',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const IconWrapper = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  border: '1px solid rgba(203, 213, 225, 0.4)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
}));

const IconLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '0.875rem',
  fontWeight: 500,
}));

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const icons = [
    { icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />, label: 'Clean Code' },
    { icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />, label: 'Backend' },
    { icon: <DevicesIcon sx={{ fontSize: 40, color: 'primary.main' }} />, label: 'Responsive' },
    { icon: <TerminalIcon sx={{ fontSize: 40, color: 'primary.main' }} />, label: 'CLI' },
    { icon: <BugReportIcon sx={{ fontSize: 40, color: 'primary.main' }} />, label: 'Debugging' },
    { icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />, label: 'Performance' },
  ];

  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <HeroContent>
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                    color: 'text.primary',
                  }}
                >
                  Hi, I'm{' '}
                  <GradientText>Ajith Koli</GradientText>
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    color: 'text.secondary',
                    mb: 4,
                  }}
                >
                  Full Stack Developer
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: 'text.secondary',
                    mb: 4,
                    maxWidth: '600px',
                  }}
                >
                  I build modern web applications with a focus on user experience and clean code.
                  Specializing in React, Node.js, and cloud technologies.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <StyledButton
                    variant="contained"
                    color="primary"
                    href="#projects"
                    sx={(theme) => ({
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      '&:hover': {
                        background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                      },
                    })}
                  >
                    View Projects
                  </StyledButton>
                  <StyledButton
                    variant="outlined"
                    color="primary"
                    href="#contact"
                    sx={(theme) => ({
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        borderColor: theme.palette.primary.dark,
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                      },
                    })}
                  >
                    Contact Me
                  </StyledButton>
                </Box>
              </HeroContent>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Box
                    component="img"
                    src="/images/ajithpic.png"
                    alt="Ajith Koli"
                    sx={{
                      width: '100%',
                      maxWidth: 300,
                      height: 'auto',
                      borderRadius: 4,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      border: '4px solid white',
                      objectFit: 'cover',
                      aspectRatio: '3/4',
                      margin: '0 auto',
                      marginTop: 8,
                    }}
                  />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <IconContainer>
                    {icons.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      >
                        <IconWrapper
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.icon}
                          <IconLabel>{item.label}</IconLabel>
                        </IconWrapper>
                      </motion.div>
                    ))}
                  </IconContainer>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero; 