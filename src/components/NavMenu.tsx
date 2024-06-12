import { Album, Group, Home, Mail, Mic, PlayCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { header } from "../utility/contentStrings";

interface NavMenuProps {
  isSmallWindow: boolean;
}

const NavMenu = ({ isSmallWindow }: NavMenuProps) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = (section: string) => {
    setAnchorEl(null);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        color="secondary"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        sx={{ 
          mr: isSmallWindow ? 3 : 2, 
          mt: isSmallWindow ? 1 : 0,
        }}
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
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleClose(header.home)} aria-label="Home">
          <Home fontSize="large" sx={{ pr: "10%" }} /> {header.home}
        </MenuItem>
        <MenuItem onClick={() => handleClose(header.video)} aria-label="Video">
          <PlayCircle fontSize="large" sx={{ pr: "10%" }} /> {header.video}
        </MenuItem>
        <MenuItem onClick={() => handleClose(header.gigs)} aria-label="Gigs">
          <Mic fontSize="large" sx={{ pr: "10%" }} /> {header.gigs}
        </MenuItem>
        <MenuItem onClick={() => handleClose(header.recordings)} aria-label="Recordings">
          <Album fontSize="large" sx={{ pr: "10%" }} /> {header.recordings}
        </MenuItem>
        <MenuItem onClick={() => handleClose(header.aboutUs)} aria-label="About Us">
          <Group fontSize="large" sx={{ pr: "10%" }} /> {header.aboutUs}
        </MenuItem>
        <MenuItem onClick={() => handleClose(header.contact)} aria-label="Contact">
          <Mail fontSize="large" sx={{ pr: "10%" }} /> {header.contact}
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavMenu;