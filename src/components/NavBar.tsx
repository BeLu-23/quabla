import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Album, Facebook, Group, Home, Instagram, Mail, Mic, PlayCircle, YouTube} from "@mui/icons-material";
import { header } from "../utility/header";


const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement >(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (section: string) => {
      setAnchorEl(null);
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

    return ( 
        <Box 
          sx={{ 
            flexGrow: 1 
          }}
        >
            <AppBar 
              position="fixed" 
              sx={{
                backgroundColor: "#48C6A9", 
                height: '64px'
              }}
            >
                <Toolbar 
                  sx={{
                    justifyContent: 'flex-end'
                  }}
                >
                    <Box 
                      sx={{
                        flexGrow: 1, 
                        display: 'flex'
                      }}
                    >
                      <IconButton
                          size="large"
                          color="inherit"
                          aria-label="facebook"
                          href="https://www.facebook.com/quablaband"
                          target="_blank"
                        >
                          <Facebook fontSize="large" />
                        </IconButton>
                        <IconButton
                          size="large"
                          color="inherit"
                          aria-label="twitter"
                          href="https://www.instagram.com/quabla_band/"
                          target="_blank"
                        >
                          <Instagram fontSize="large" />
                        </IconButton>
                        <IconButton
                          size="large"
                          color="inherit"
                          aria-label="twitter"
                          href="https://www.youtube.com/channel/UCzAPef7M6fuDDJbktj-YJIg"
                          target="_blank"
                        >
                          <YouTube fontSize="large" />
                        </IconButton>
                    </Box>

                    <IconButton
                        size="large"
                        edge="end"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMenu}
                      >
                        <MenuIcon fontSize="large" />
                      </IconButton>

                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={() => handleClose(header.home)}>
                          <Home fontSize="large" sx={{pr: "10%"}} /> {header.home}
                      </MenuItem>
                      <MenuItem onClick={() => handleClose(header.video)}>
                        <PlayCircle fontSize="large" sx={{pr: "10%"}} /> {header.video}
                      </MenuItem>
                      <MenuItem onClick={() => handleClose(header.gigs)}>
                      <Mic fontSize="large" sx={{pr: "10%"}} /> {header.gigs}
                      </MenuItem>
                      <MenuItem onClick={() => handleClose(header.recordings)}>
                        <Album fontSize="large" sx={{pr: "10%"}} /> {header.recordings}
                      </MenuItem>
                      <MenuItem onClick={() => handleClose(header.aboutUs)}>
                        <Group fontSize="large" sx={{pr: "10%"}} /> {header.aboutUs}
                      </MenuItem>
                      <MenuItem onClick={() => handleClose(header.contact)}>
                        <Mail fontSize="large" sx={{pr: "10%"}} /> {header.contact}
                      </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
     );
}
 
export default NavBar;