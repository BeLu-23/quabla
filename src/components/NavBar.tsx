import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Album, Facebook, Group, Home, Instagram, Mail, Mic, PlayCircle, YouTube} from "@mui/icons-material";


const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement >(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleClose2 = (section: string) => {
      setAnchorEl(null);
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{backgroundColor: "#48C6A9"}}>
                <Toolbar sx={{justifyContent: 'flex-end'}}>

                  <Box sx={{flexGrow: 1, display: 'flex'}}>
                    <IconButton
                      size="large"
                      color="inherit"
                      aria-label="facebook"
                      href="https://www.facebook.com/quablaband"
                      target="_blank"
                    >
                      <Facebook />
                    </IconButton>
                    <IconButton
                      size="large"
                      color="inherit"
                      aria-label="twitter"
                      href="https://www.instagram.com/quabla_band/"
                      target="_blank"
                    >
                      <Instagram/>
                    </IconButton>
                    <IconButton
                      size="large"
                      color="inherit"
                      aria-label="twitter"
                      href="https://www.youtube.com/channel/UCzAPef7M6fuDDJbktj-YJIg"
                      target="_blank"
                    >
                      <YouTube/>
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
                    <MenuIcon />
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
                  <MenuItem onClick={() => handleClose2('home')}>
                      <Home sx={{paddingRight: "10%"}} /> Home
                  </MenuItem>
                  <MenuItem onClick={() => handleClose2('video')}>
                    <PlayCircle sx={{paddingRight: "10%"}} /> Video
                  </MenuItem>
                  <MenuItem onClick={() => handleClose2('auftritte')}>
                   <Mic sx={{paddingRight: "10%"}} /> Auftritte
                  </MenuItem>
                  <MenuItem onClick={() => handleClose2('alben')}>
                    <Album sx={{paddingRight: "10%"}} /> Alben
                  </MenuItem>
                  <MenuItem onClick={() => handleClose2('ueberUns')}>
                    <Group sx={{paddingRight: "10%"}} /> Über Uns
                  </MenuItem>
                  <MenuItem onClick={() => handleClose2('kontakt')}>
                    <Mail sx={{paddingRight: "10%"}} /> Kontakt
                  </MenuItem>
                </Menu>
        </Toolbar>
      </AppBar>
    </Box>
     );
}
 
export default NavBar;