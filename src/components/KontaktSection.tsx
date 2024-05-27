import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Section from "./Section";
import theme from "./theme";

const KontaktSection = () => {
    return (
        <Section id='kontakt' className='section4' backgroundColor={theme.palette.tertiary.main}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                    Kontakt
                </Typography>
                <Card sx={{ maxWidth: 600, margin: 2, width: '100%' }}>
                    <CardMedia
                        component="img"
                        image='kontaktPic.jpg'
                        alt="Über Uns"
                        sx={{
                            height: 'auto',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                    <CardContent sx={{backgroundColor: theme.palette.secondary.main}}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ color: theme.palette.primary.main }}>
                        So erreichst du uns
                        </Typography>
                        <Typography variant="body1" component="div" sx={{ color: theme.palette.primary.main }}>
                            Schreib uns doch gerne eine Mail, falls du uns buchen oder einfach auch mal nur quatschen möchtest:
                            <br /><br />
                            E-Mail: <a href="mailto:tonesforjoansbones@gmail.com" style={{ color: theme.palette.primary.main }}>tonesforjoansbones@gmail.com</a>
                            <br /><br />
                            Wir freuen uns über eure Nachrichten und werden uns so schnell wie möglich bei euch melden.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Section>
    );
}
 
export default KontaktSection;