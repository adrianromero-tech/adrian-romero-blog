import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  IconButton,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useState } from 'react';
import './index.css';

function NavigationBar() {
  const isDesktopScreen = useMediaQuery('(min-width:600px)');
  return isDesktopScreen ? <DesktopNavigationBar /> : <MobileNavigationBar />;
}

function DesktopNavigationBar() {
  return (
    <AppBar position="relative" sx={{ bgcolor: '#6F4E37' }}>
      <Toolbar variant="dense">
        <NavigationTab dest="/home"> home </NavigationTab>
        <NavigationTab dest="/about"> about </NavigationTab>
        <NavigationTab dest="/archive"> archive </NavigationTab>
        <NavigationTab dest="/contact"> contact </NavigationTab>
      </Toolbar>
    </AppBar>
  );
}

function MobileNavigationBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container className={`mobile-nav-bar ${open ? 'visible' : ''}`}>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        <NavigationTab dest="/home"> home </NavigationTab>
        <NavigationTab dest="/about"> about </NavigationTab>
        <NavigationTab dest="/archive"> archive </NavigationTab>
        <NavigationTab dest="/contact"> contact </NavigationTab>
      </Container>
      <AppBar position="fixed" sx={{ bgcolor: '#6F4E37' }}>
        <Toolbar variant="dense">
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon sx={{ color: 'seashell' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

function NavigationTab({ children, dest }: { children: string; dest: string }) {
  return (
    <Button color="inherit" href={dest}>
      <Typography textTransform={'lowercase'}>{children}</Typography>
    </Button>
  );
}

export default NavigationBar;
