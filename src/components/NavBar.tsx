import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import React from "react";


const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement >(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{backgroundColor: "#48C6A9"}}>
                <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <ScrollLink to="home" smooth={true} offset={-70}>
                Home
              </ScrollLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ScrollLink to="video" smooth={true} offset={-70}>
                Video
              </ScrollLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ScrollLink to="auftritte" smooth={true} offset={-70}>
                Auftritte
              </ScrollLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ScrollLink to="uber-uns" smooth={true} offset={-70}>
                Über uns
              </ScrollLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ScrollLink to="kontakt" smooth={true} offset={-70}>
                Kontakt
              </ScrollLink>
            </MenuItem>
          </Menu>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Band Webseite
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
     );
}
 
export default NavBar;