import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Section from "./Section";
import theme from "./theme";

const AlbenSection = () => {
  return (
    <Section id='alben' className='section4' backgroundColor={theme.palette.tertiary.main}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                Unser Album
            </Typography>
            <Card 
                sx={{ 
                    maxWidth: 600, 
                    margin: 2, 
                    width: '100%', 
                    boxShadow: 'none', 
                    background: 'inherit',
                    cursor: 'pointer'
                }}
                onClick={() => window.open('https://open.spotify.com/intl-de/album/3nUKbudJ3WSClN0qQQlHZE', '_blank')}
            >
                <CardMedia
                    component="img"
                    image="/quabla/albumPic.jpg"
                    alt="Album Cover"
                    sx={{
                        height: 'auto',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
                <CardContent sx={{ backgroundColor: theme.palette.secondary.main }}>
                    <Typography variant="h5" component="div" gutterBottom sx={{ color: theme.palette.primary.main }}>
                        Bogisland
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ color: theme.palette.primary.main }}>
                        Check unser erstes Album aus. Hier noch unter einem anderen Namen, aber die selbe Mukke.
                        <br /><br />
                        Jetzt auf Spotify verfügbar!
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </Section>
);
}
 
export default AlbenSection;