import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none',
  borderBottom: scrolled ? '1px solid rgba(203, 213, 225, 0.4)' : 'none',
  transition: 'all 0.3s ease-in-out',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(0, 1),
  '&:hover': {
    background: 'rgba(37, 99, 235, 0.1)',
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  letterSpacing: '-0.5px',
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const ResumeButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '4px',
  padding: '0.75rem 1.5rem',
  fontSize: '0.875rem',
  fontFamily: '"Fira Code", monospace',
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.main,
    width: '250px',
    padding: theme.spacing(2),
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    color: theme.palette.text.primary,
    fontFamily: '"Fira Code", monospace',
    fontSize: '0.875rem',
  },
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    '& .MuiListItemText-primary': {
      color: theme.palette.secondary.main,
    },
  },
}));

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                background: 'rgba(37, 99, 235, 0.1)',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                color: theme.palette.text.primary,
                textAlign: 'center',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledAppBar position="fixed" scrolled={scrolled}>
        <Toolbar>
          <Logo variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ajith Koli
          </Logo>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navItems.map((item) => (
                <NavButton
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </NavButton>
              ))}
            </Box>
          )}
          <ResumeButton
            variant="outlined"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            Resume
          </ResumeButton>
        </Toolbar>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderLeft: '1px solid rgba(203, 213, 225, 0.4)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </motion.div>
  );
};

export default Navbar; 