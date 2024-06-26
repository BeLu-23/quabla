import { AppBar, Box, Toolbar } from "@mui/material";
import NavMenu from "./NavMenu";
import NavIcons from "./NavIcons";
import theme from "../utility/theme";
import { ariaLabels } from "../utility/contentStrings";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavBarProps {
  getWindowSizeInfo: () => {
    isLargeWindow: boolean;
    isMediumWindow: boolean;
    isSmallWindow: boolean;
    size: string;
  };
}

const NavBar = ({ getWindowSizeInfo }: NavBarProps) => {

  const windowInfo = getWindowSizeInfo();

  return (
    <Box 
      sx={{ flexGrow: 1 }}
      role="navigation"
      aria-label={ariaLabels.navBar}
    >
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: theme.palette.info.main, 
          height: '64px'
        }}
      >
        <Toolbar 
          sx={{
            justifyContent: 'flex-end'
          }}
        >
          <NavIcons 
            flexGrow={1} 
            fontSize="medium" 
            isSmallWindow={windowInfo.isSmallWindow}
          />
          <LanguageSwitcher isSmallWindow={windowInfo.isSmallWindow} />
          <NavMenu isSmallWindow={windowInfo.isSmallWindow} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;