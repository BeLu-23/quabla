import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Section from "./Section";
import theme from "./theme";

const AboutUsSection = () => {
    return (
        <Section id='ueberUns' className='section4' backgroundColor={theme.palette.secondary.main}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: theme.palette.primary.main }}>
                    Über Uns
                </Typography>
                <Card sx={{ maxWidth: 600, margin: 2, width: '100%' }}>
                    <CardMedia
                        component="img"
                        image='aboutUsPic.jpg'
                        alt="Über Uns"
                        sx={{
                            height: 'auto',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                    <CardContent sx={{backgroundColor: theme.palette.tertiary.main}}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ color: theme.palette.primary.main }}>
                            Unsere Band
                        </Typography>
                        <Typography variant="body1" component="div" sx={{ color: theme.palette.primary.main }}>
                            Wir sind eine leidenschaftliche Band aus [Stadt], die sich der Musik verschrieben hat. Unsere Reise begann im Jahr [Jahr], und seitdem haben wir zahlreiche Auftritte und Alben veröffentlicht.
                            Wir sind eine leidenschaftliche Band aus [Stadt], die sich der Musik verschrieben hat. Unsere Reise begann im Jahr [Jahr], und seitdem haben wir zahlreiche Auftritte und Alben veröffentlicht.
                            <br /><br />
                            Unser Stil ist vielseitig und reicht von [Genre 1] bis [Genre 2]. Jedes Bandmitglied bringt seine einzigartige Erfahrung und Leidenschaft in die Gruppe ein, was unsere Musik so besonders macht.
                            <br /><br />
                            Wir freuen uns darauf, euch bei unseren kommenden Auftritten zu sehen und mit euch unvergessliche Momente zu teilen.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Section>
    );
}
 
export default AboutUsSection;