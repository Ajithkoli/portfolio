import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(203, 213, 225, 0.4)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
    border: `1px solid ${theme.palette.primary.main}40`,
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    },
  },
}));

const ProjectMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  transition: 'transform 0.3s ease-in-out',
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  background: `rgba(${theme.palette.primary.main}, 0.1)`,
  color: theme.palette.primary.main,
  '&:hover': {
    background: `rgba(${theme.palette.primary.main}, 0.2)`,
  },
}));

const projectsData = [
  {
    title: 'Campus Connect',
    description: 'A student marketplace platform for buying and selling items within the campus community.',
    image: '/images/camp.jpeg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
    github: 'https://github.com/Ajithkoli/Hostel-trade.git',
    live: 'https://campus-connect.vercel.app',
    features: [
      'User authentication and profile management',
      'Real-time messaging between buyers and sellers',
      'Secure payment integration with Stripe',
      'Image upload and management',
      'Search and filter functionality',
      'Responsive design for all devices',
    ],
  },
  {
    title: 'Real-Time Acoustic Motor Fault Detection',
    description: 'An edge ML project using Raspberry Pi for real-time industrial motor fault detection.',
    image: '/images/rasp.jpg',
    technologies: ['Python', 'TensorFlow', 'Raspberry Pi', 'Firebase', 'React'],
    github: 'https://github.com/Ajithkoli/Raspberry-Pi-Motor-Fault-Detection.git',
    live: 'https://motor-fault-detection.vercel.app',
    features: [
      'Real-time audio processing and analysis',
      'Machine learning model for fault classification',
      'Firebase integration for data storage',
      'Web dashboard for monitoring and alerts',
      'Edge computing implementation',
      'Automated reporting system',
    ],
  },
  {
    title: 'Smart Medicine Dispenser',
    description: 'An IoT device for automating medicine dispensing with reminders and tracking.',
    image: '/images/smartmed.webp',
    technologies: ['Arduino', 'Python', 'Firebase', 'React', 'Node.js'],
    github: 'https://github.com/Ajithkoli/Automatic-Med-Dispenser.git',
    live: 'https://smart-medicine-dispenser.vercel.app',
    features: [
      'Automated medicine dispensing',
      'Mobile app for medication reminders',
      'Dosage tracking and history',
      'Caregiver monitoring system',
      'Emergency alerts',
      'Battery backup system',
    ],
  },
  {
    title: 'Smart Waste Segregator',
    description: 'An IoT system using computer vision for automatic waste segregation.',
    image: '/images/waste.jpg',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Raspberry Pi', 'React'],
    github: 'https://github.com/yourusername/smart-waste-segregator',
    live: 'https://smart-waste-segregator.vercel.app',
    features: [
      'Computer vision for waste classification',
      'Automated sorting mechanism',
      'Real-time monitoring dashboard',
      'Waste analytics and reporting',
      'Mobile app for status updates',
      'Environmental impact tracking',
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        background: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle variant="h2" component="h2">
          Projects
        </SectionTitle>
        <Grid container spacing={4}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ProjectCard>
                <ProjectMedia
                  image={project.image}
                  title={project.title}
                />
                <CardContent>
                  <ProjectTitle variant="h5" component="h3">
                    {project.title}
                  </ProjectTitle>
                  <ProjectDescription variant="body1">
                    {project.description}
                  </ProjectDescription>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <TechChip
                        key={techIndex}
                        label={tech}
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ mt: 'auto', p: 2 }}>
                  <Button
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    size="small"
                    startIcon={<LaunchIcon />}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleOpenDialog(project)}
                    sx={{ ml: 'auto' }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={Boolean(selectedProject)}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          {selectedProject && (
            <>
              <DialogTitle>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  {selectedProject.title}
                  <IconButton onClick={handleCloseDialog} size="small">
                    <CloseIcon />
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Box sx={{ mb: 3 }}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      borderRadius: 8,
                    }}
                  />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Project Features
                </Typography>
                <List>
                  {selectedProject.features.map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Technologies Used
                  </Typography>
                  <Box>
                    {selectedProject.technologies.map((tech, index) => (
                      <TechChip
                        key={index}
                        label={tech}
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  startIcon={<GitHubIcon />}
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
                <Button
                  startIcon={<LaunchIcon />}
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                >
                  Live Demo
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects; 