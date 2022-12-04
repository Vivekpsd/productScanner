import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#e1f5fe', color:'#333'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home" style={{color:'#333', textDecoration:'none'}}>
                Product Scanner
            </Link>
            </Typography>
            <Link to="/home" style={{color:'#333', textDecoration:'none'}}><Button color="inherit">Home</Button></Link>
          <Link to="/generate" style={{color:'#333', textDecoration:'none'}}><Button color="inherit">Generate</Button></Link>
          <Link to="/scan" style={{color:'#333', textDecoration:'none'}}><Button color="inherit">Scan</Button></Link>
          <Link to="/login" style={{color:'#333', textDecoration:'none'}}><Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
    
  );
}

// import { Outlet, Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/scan">Scan</Link>
//           </li>
//           <li>
//             <Link to="/generate">Generate</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Navbar;