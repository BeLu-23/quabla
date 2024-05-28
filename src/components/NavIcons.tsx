import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

interface NavIconsProps {
    flexGrow?: number;
    marginBottom?: number;
    justifyContent?: string;
    fontSize?: "medium" | "small" | "inherit" | "large";
}

const NavIcons = ({ flexGrow, marginBottom, justifyContent, fontSize}: NavIconsProps) => {

    const iconFontSize = fontSize ? fontSize : "medium";
    const navIconsStyle = { 
        flexGrow: flexGrow,
        marginBottom: marginBottom,
        justifyContent: justifyContent,
    }
    
    return ( 
        <Box 
            sx={{
                display: 'flex',
                ...navIconsStyle,
            }}
        >
            <IconButton
                size="large"
                color="inherit"
                aria-label="facebook"
                href="https://www.facebook.com/quablaband"
                target="_blank"
            >
                <Facebook fontSize={iconFontSize} />
            </IconButton>
            <IconButton
                size="large"
                color="inherit"
                aria-label="twitter"
                href="https://www.instagram.com/quabla_band/"
                target="_blank"
            >
                <Instagram fontSize={iconFontSize} />
            </IconButton>
            <IconButton
                size="large"
                color="inherit"
                aria-label="twitter"
                href="https://www.youtube.com/channel/UCzAPef7M6fuDDJbktj-YJIg"
                target="_blank"
            >
                <YouTube fontSize={iconFontSize} />
            </IconButton>
        </Box>
     );
}

export default NavIcons;