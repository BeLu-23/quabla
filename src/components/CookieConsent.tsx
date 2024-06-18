import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Typography } from "@mui/material";
import React from "react";
import theme from "../utility/theme";
import { Link as RouterLink, useParams } from "react-router-dom";
import { ariaLabels } from "../utility/contentStrings";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface CookieConsentProps {
    giveCookieConsent: (accepted: boolean) => void;
    isSmallWindow: boolean;
}

const CookieConsent = ({ giveCookieConsent, isSmallWindow }: CookieConsentProps) => {

    const { t } = useTranslation();
    const { lang } = useParams<{ lang: string }>();
    const [open, setOpen] = React.useState(true);
    const privacyPolicyLink = '/' + lang + '/' + 'privacy-policy';

    const handleClose = (answer: boolean) => {
        giveCookieConsent(answer);
        setOpen(false);
      };

    return ( 
        <Dialog 
            open={open} 
            PaperProps={{ style: { backgroundColor: theme.palette.tertiary.main }}}
            aria-labelledby={ariaLabels.cookieTitle}
            aria-describedby={ariaLabels.cookieDescription}
        >
            <DialogTitle id="cookie-consent-dialog-title"
                sx={{display: 'flex', justifyContent: 'space-between'}}>
                { t('CookieHeader') }
                <LanguageSwitcher isSmallWindow={isSmallWindow}/>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="cookie-consent-dialog-description">
                    { t('CookieContent') }
                    <Typography
                        component="span"
                        sx={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        <Link sx={{color: theme.palette.primary.main}} component={RouterLink} to={privacyPolicyLink} color="inherit">
                            { t('CookieLink') }
                        </Link>
                    </Typography>
                    { t('Dot') }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button 
                    // onClick={() => { handleClose(t('CookieDisagree')) }} 
                    onClick={() => { handleClose(false) }} 
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                    }}
                    aria-label={ariaLabels.cookieDecline}
                >
                    { t('CookieDisagree') }
                </Button>
                <Button 
                    // onClick={() => { handleClose(t('CookieAgree')) }}
                    onClick={() => { handleClose(true) }} 
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                    }}
                    aria-label={ariaLabels.cookieAccept}
                >
                    { t('CookieAgree') }
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CookieConsent;