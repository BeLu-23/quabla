import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { Link as RouterLink} from 'react-router-dom'
import theme from "./theme";

const Footer = () => {

    return ( 
        <Box className='impressum'
             sx={{
                 backgroundColor: theme.palette.secondary.main,
                 color: theme.palette.primary.main,
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 padding: 2,
                 textAlign: 'center'
             }}>

            {/* Social Media Links */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
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
                    aria-label="instagram"
                    href="https://www.instagram.com/quabla_band/"
                    target="_blank"
                >
                    <Instagram />
                </IconButton>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="youtube"
                    href="https://www.youtube.com/channel/UCzAPef7M6fuDDJbktj-YJIg"
                    target="_blank"
                >
                    <YouTube />
                </IconButton>
            </Box>

            {/* Impressum und Datenschutz Links */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                <Typography component="span" sx={{ cursor: 'pointer', textDecoration: 'underline', marginRight: 2 }}>
                    <Link component={RouterLink} to="/impressum/" color="inherit">
                        Impressum
                    </Link>
                </Typography>
                <Typography component="span" sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
                    <Link component={RouterLink} to="/datenschutz/" color="inherit">
                        Datenschutz
                    </Link>
                </Typography>
            </Box>

            {/* Copyright */}
            <Typography sx={{ marginTop: 2 }}>
                © {new Date().getFullYear()} Quabla. Alle Rechte vorbehalten.
            </Typography>
        </Box>
     );
}
 
export default Footer;