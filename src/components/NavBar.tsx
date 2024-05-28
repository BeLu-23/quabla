import { AppBar, Box, Toolbar} from "@mui/material";
import NavMenu from "./NavMenu";
import NavIcons from "./NavIcons";


const NavBar = () => {

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
                  />
                  <NavMenu />

                </Toolbar>
            </AppBar>
        </Box>
     );
}
 
export default NavBar;