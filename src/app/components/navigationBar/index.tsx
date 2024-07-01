import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function NavigationBar() {
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

function NavigationTab({ children, dest }: { children: string; dest: string }) {
  return (
    <Button color="inherit" href={dest}>
      <Typography textTransform={'lowercase'}>{children}</Typography>
    </Button>
  );
}

export default NavigationBar;
