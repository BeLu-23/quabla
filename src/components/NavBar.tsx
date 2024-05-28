import { AppBar, Box, Toolbar} from "@mui/material";
import NavMenu from "./NavMenu";
import NavIcons from "./NavIcons";

interface NavBarProps {
  getWindowSizeInfo: () => {
    isLargeWindow: boolean;
    isMediumWindow: boolean;
    isSmallWindow: boolean;
    size: string;
  };
}

const NavBar = (
  {getWindowSizeInfo}: NavBarProps
) => {

    const windowInfo = getWindowSizeInfo();

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

                  <NavIcons 
                      flexGrow={1} 
                      fontSize="medium" 
                      isSmallWindow={windowInfo.isSmallWindow}
                  />
                  <NavMenu isSmallWindow={windowInfo.isSmallWindow} />

                </Toolbar>
            </AppBar>
        </Box>
     );
}
 
export default NavBar;