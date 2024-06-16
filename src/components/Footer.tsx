import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import theme from "../utility/theme";
import NavIcons from "./NavIcons";
import { ariaLabels } from "../utility/contentStrings";
import { useTranslation } from "react-i18next";

interface FooterProps {
  isSmallWindow: boolean;
}

const Footer = ({ isSmallWindow }: FooterProps) => {

  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const impressumLink = '/' + lang + '/' + 'impressum';
  const privacyPolicyLink = '/' + lang + '/' + 'privacy-policy';



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
      role="contentinfo"
      aria-label={ariaLabels.footer}
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
          <Link
            component={RouterLink}
            to={impressumLink}
            color="inherit"
            aria-label={ariaLabels.impressum}
          >
            {t('impressum')}
          </Link>
        </Typography>
        <Typography
          component="span"
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          <Link
            component={RouterLink}
            to={privacyPolicyLink}
            color="inherit"
            aria-label={ariaLabels.datenschutz}
          >
            {t('datenschutz')}
          </Link>
        </Typography>
      </Box>

      <Typography
        sx={{
          marginTop: 2,
        }}
      >
        {t('footerC') + new Date().getFullYear() + t('footerRights')}
      </Typography>
    </Box>
  );
};

export default Footer;