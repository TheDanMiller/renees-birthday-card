import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => (
    <AppBar position="fixed" sx={{ top: 0, width: '100%' }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Renee's Birthday Card
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
