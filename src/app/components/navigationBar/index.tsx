import { AppBar, Toolbar, Typography } from '@mui/material';

function NavigationBar() {
  return (
    <AppBar position="relative" sx={{ bgcolor: '#A67B5B' }}>
      <Toolbar variant="dense">
        <Typography mr={2}> home </Typography>
        <Typography mr={2}> about </Typography>
        <Typography mr={2}> archive </Typography>
        <Typography> contact </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
