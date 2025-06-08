import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  color: theme.palette.text.primary,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -16,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 60,
    height: 4,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: 2,
  },
}));

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(203, 213, 225, 0.4)',
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
}));

const SkillHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  gap: theme.spacing(2),
}));

const SkillIcon = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: '#ffffff',
  fontSize: '1.5rem',
}));

const SkillTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '1.25rem',
}));

const SkillList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

const SkillItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
  background: 'rgba(203, 213, 225, 0.2)',
  color: theme.palette.text.primary,
  fontSize: '0.875rem',
  fontWeight: 500,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    background: `linear-gradient(90deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
    transform: 'translateY(-2px)',
  },
}));

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    {
      title: 'Programming Languages and Tools',
      skills: ['C', 'Java', 'JavaScript', 'Git'],
      icon: <CodeIcon />,
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
      icon: <StorageIcon />,
    },
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      icon: <WebIcon />,
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        background: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle variant="h2" component="h2">
          Technical Skills
        </SectionTitle>

        <Grid container spacing={4}>
          {skillsData.map((skill, index) => (
            <Grid item xs={12} md={4} key={skill.title}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <SkillCard>
                  <SkillHeader>
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillTitle variant="h5" component="h3">
                      {skill.title}
                    </SkillTitle>
                  </SkillHeader>
                  <SkillList>
                    {skill.skills.map((item) => (
                      <SkillItem key={item}>{item}</SkillItem>
                    ))}
                  </SkillList>
                </SkillCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 