import { Box, IconButton, Typography } from "@mui/material";
import { ariaLabels } from "../utility/contentStrings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { SiApplemusic } from "react-icons/si";
import { useTranslation } from "react-i18next";

const AudioIcons = () => {

    const { t } = useTranslation();

    return ( 
        <Box 
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}
        >
            <IconButton
                size="large"
                color="primary"
                aria-label={ariaLabels.spotify}
                href="https://open.spotify.com/intl-de/album/3nUKbudJ3WSClN0qQQlHZE"
                target="_blank"
                sx={{
                    flexDirection: "column",
                }}
            >
                <FontAwesomeIcon icon={faSpotify} style={{fontSize: "25px"}} />
                <Typography 
                    variant="body1"
                    component="div"
                    sx={{
                        mt: 1,
                    }}
                >
                    {t('spotify')}
                </Typography>
            </IconButton>
            <IconButton
                size="large"
                color="primary"
                aria-label={ariaLabels.bandcamp}
                href="https://tfjb.bandcamp.com/album/bogisland"
                target="_blank"
                sx={{
                    flexDirection: "column",
                }}
            >
                <FontAwesomeIcon icon={faBandcamp} style={{fontSize: "25px"}} />
                <Typography 
                    variant="body1"
                    component="div"
                    sx={{
                        mt: 1,
                    }}
                >
                    {t('bandcamp')}
                </Typography>
            </IconButton>
            <IconButton
                size="large"
                color="primary"
                aria-label={ariaLabels.appleMusic}
                href="https://music.apple.com/us/artist/tones-for-joans-bones/1597645375"
                target="_blank"
                sx={{
                    flexDirection: "column",
                }}
            >
                <SiApplemusic style={{fontSize: "25px"}}/>
                <Typography 
                    variant="body1"
                    component="div"
                    sx={{
                        mt: 1,
                    }}
                >
                    {t('appleMusic')}
                </Typography>
            </IconButton>
        </Box>
     );
}
 
export default AudioIcons;