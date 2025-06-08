import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Blue 600
      light: '#3b82f6', // Blue 500
      dark: '#1d4ed8', // Blue 700
    },
    secondary: {
      main: '#7c3aed', // Violet 600
      light: '#8b5cf6', // Violet 500
      dark: '#6d28d9', // Violet 700
    },
    background: {
      default: '#f8fafc', // Slate 50
      paper: '#ffffff', // White
    },
    text: {
      primary: '#0f172a', // Slate 900
      secondary: '#334155', // Slate 700
    },
    error: {
      main: '#dc2626', // Red 600
    },
    warning: {
      main: '#d97706', // Amber 600
    },
    info: {
      main: '#0284c7', // Sky 600
    },
    success: {
      main: '#059669', // Emerald 600
    },
  },
  typography: {
    fontFamily: '"Inter", "Plus Jakarta Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#0f172a', // Slate 900
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#0f172a', // Slate 900
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#0f172a', // Slate 900
    },
    h4: {
      fontWeight: 500,
      color: '#0f172a', // Slate 900
    },
    h5: {
      fontWeight: 500,
      color: '#0f172a', // Slate 900
    },
    h6: {
      fontWeight: 500,
      color: '#0f172a', // Slate 900
    },
    body1: {
      letterSpacing: '0.01em',
      color: '#334155', // Slate 700
    },
    body2: {
      letterSpacing: '0.01em',
      color: '#334155', // Slate 700
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#f8fafc', // Slate 50
          backgroundImage: `
            radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.08) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(124, 58, 237, 0.08) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(37, 99, 235, 0.08) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(124, 58, 237, 0.08) 0px, transparent 50%)
          `,
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
          background: 'rgba(37, 99, 235, 0.1)',
          border: '1px solid rgba(37, 99, 235, 0.2)',
          backdropFilter: 'blur(8px)',
          color: '#0f172a', // Slate 900
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            background: 'rgba(37, 99, 235, 0.15)',
            border: '1px solid rgba(37, 99, 235, 0.3)',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          backdropFilter: 'blur(10px)',
          borderRadius: 12,
          border: '1px solid rgba(203, 213, 225, 0.4)', // Slate 300 with transparency
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          backdropFilter: 'blur(10px)',
          borderRadius: 12,
          border: '1px solid rgba(203, 213, 225, 0.4)', // Slate 300 with transparency
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#0f172a', // Slate 900
          '& .MuiInputBase-input': {
            color: '#0f172a', // Slate 900
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(203, 213, 225, 0.4)', // Slate 300 with transparency
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(37, 99, 235, 0.2)',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#334155', // Slate 700
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}>
        <Navbar />
        <Box component="main">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Activities />
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 