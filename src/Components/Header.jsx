import './Header.css';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Separator = styled('span')({
  backgroundColor: '#FFFFFF',
  padding: '0 6px',

});
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  height: '25px', // Fixed height for alignment
  display: 'flex', // Ensures proper alignment for flex items
  alignItems: 'center', // Vertically align children
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(4),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1), // Reduce padding if needed for horizontal alignment
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  height: '100%', // Ensure the input takes up full height of the parent
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 1, 0, `calc(1em + ${theme.spacing(2)})`), // Align input padding
    height: '100%', // Full height
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25ch',
    },
  },
}));




export default function Header() {


  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: '#FFFFFF', color: '#4C4A57' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

            {/* Phone Number and Email - Hidden on mobile */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="caption" noWrap display="flex" alignItems="center">
                <PhoneIcon fontSize="small" sx={{ marginRight: '5px' }} />
                <span>+251964773386</span>
                <Separator> | </Separator>
                <Email fontSize="small" sx={{ marginLeft: '5px' }} />
                <span>Ebrahimyesuf111@gmail.com</span>
              </Typography>
            </Box>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{
                  'aria-label':
                    'search'
                }}
                sx={{
                  flexGrow: 1, width: '100%'
                }} // Expand on mobile
              />
            </Search>

            <Box sx={{ flexGrow: 1 }} />

            {/* Social Media Icons */}
            <Box sx={{ display: { xs: 'flex', md: 'flex' }, justifyContent: { xs: 'flex-end' }, width: { xs: '100%' } }}>
              <IconButton size="small" aria-label="Facebook" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" aria-label="Twitter" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" aria-label="Telegram" color="inherit">
                <TelegramIcon />
              </IconButton>
            </Box>

          </Toolbar>
        </AppBar>
      </Box>
    </div>


  );
}


