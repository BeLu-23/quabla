import { Album, Group, Home, Mail, Mic, PlayCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { header } from "../utility/contentStrings";

interface NavMenuProps {
    isSmallWindow: boolean;
}

const NavMenu = ({isSmallWindow}: NavMenuProps) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement >(null);

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
                sx={{ 
                    mr: isSmallWindow ? 3 : 2, 
                    mt: isSmallWindow ? 1 : 0,
                }}
                onClick={handleMenu}
            >
                <MenuIcon 
                    // fontSize="large" 
                />
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
        </>
    );
};

export default NavMenu;