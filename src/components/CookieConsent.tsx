import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Typography } from "@mui/material";
import React from "react";
import theme from "../utility/theme";
import { Link as RouterLink } from "react-router-dom";
import { cookieBannerString } from "../utility/otherContent";

interface CookieConsentProps {
    giveCookieConsent: () => void;
  }

const CookieConsent = ({giveCookieConsent}: CookieConsentProps) => {

    const [open, setOpen] = React.useState(true);

  const handleClose = (answer: string) => {
    if (answer === cookieBannerString.agree) {
        giveCookieConsent();
    }
    setOpen(false);
  };

    return ( 
        <Dialog open={open} 
            PaperProps={{ style: { backgroundColor:  theme.palette.tertiary.main,}}}
        >
        <DialogTitle>{cookieBannerString.header}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {cookieBannerString.content}
            <Typography
                component="span"
                sx={{
                    cursor: "pointer",
                    textDecoration: "underline",
                }}
            >
                <Link sx={{color: theme.palette.primary.main}} component={RouterLink} to="/datenschutz/" color="inherit">
                    {cookieBannerString.link}
                </Link>
            </Typography>
            {cookieBannerString.dot}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button 
                    onClick={() => {handleClose(cookieBannerString.disagree)}} 
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                    }}
            >{cookieBannerString.disagree}
            </Button>
            <Button 
                    onClick={() => {handleClose(cookieBannerString.agree)}} 
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                    }}
            >{cookieBannerString.agree}
            </Button>
        </DialogActions>
        </Dialog>
     );
}
 
export default CookieConsent;