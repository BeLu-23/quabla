import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import theme from "../utility/theme";
import NavIcons from "./NavIcons";

interface FooterProps {
  isSmallWindow: boolean;
}

const Footer = ({isSmallWindow}: FooterProps) => {
  return (
    <Box
      sx={{
        backgroundColor: isSmallWindow 
                            ? theme.palette.tertiary.main
                            : theme.palette.secondary.main,
        color: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        textAlign: "center",
      }}
    >
      <NavIcons justifyContent="center" marginBottom={2} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        <Typography
          component="span"
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
            marginRight: 2,
          }}
        >
          <Link component={RouterLink} to="/impressum/" color="inherit">
            Impressum
          </Link>
        </Typography>
        <Typography
          component="span"
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          <Link component={RouterLink} to="/datenschutz/" color="inherit">
            Datenschutz
          </Link>
        </Typography>
      </Box>

      <Typography
        sx={{
          marginTop: 2,
        }}
      >
        © {new Date().getFullYear()} Quabla. Alle Rechte vorbehalten.
      </Typography>
    </Box>
  );
};

export default Footer;
