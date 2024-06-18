import { Instagram, YouTube } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { ariaLabels } from "../utility/contentStrings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

interface NavIconsProps {
  flexGrow?: number;
  marginBottom?: number;
  justifyContent?: string;
  fontSize?: "medium" | "small" | "inherit" | "large";
  isSmallWindow?: boolean;
}

const NavIcons = ({ 
  flexGrow, 
  marginBottom, 
  justifyContent, 
  fontSize, 
  isSmallWindow 
}: NavIconsProps) => {

  const iconFontSize = fontSize ? fontSize : "medium";
  const navIconsStyle = { 
    flexGrow: flexGrow,
    marginBottom: marginBottom,
    justifyContent: justifyContent,
    marginTop: isSmallWindow ? 1 : 0,
    marginLeft: isSmallWindow ? 1 : 0,
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
        aria-label={ariaLabels.instagram}
        href="https://www.instagram.com/quabla_band/"
        target="_blank"
      >
        <Instagram fontSize={iconFontSize} />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        aria-label={ariaLabels.iconYoutube}
        href="https://www.youtube.com/channel/UCzAPef7M6fuDDJbktj-YJIg"
        target="_blank"
      >
        <YouTube fontSize={iconFontSize} />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        aria-label={ariaLabels.spotify}
        href="https://open.spotify.com/intl-de/album/3nUKbudJ3WSClN0qQQlHZE"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSpotify} style={{fontSize: "20px"}} />
      </IconButton>
    </Box>
  );
}

export default NavIcons;