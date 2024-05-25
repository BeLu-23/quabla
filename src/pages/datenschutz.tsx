import { Box, Container, List, ListItem, Typography } from "@mui/material";

const Datenschutz = () => {
    return ( 
        <Container maxWidth="md" sx={{ padding: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
            Datenschutzerklärung
        </Typography>

        <Box mb={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                1. Datenschutz auf einen Blick
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
                Allgemeine Hinweise
            </Typography>
            <Typography variant="body1" paragraph>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </Typography>
        </Box>

        <Box mb={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                2. Allgemeine Hinweise und Pflichtinformationen
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
                Datenschutz
            </Typography>
            <Typography variant="body1" paragraph>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </Typography>
            <Typography variant="body1" paragraph>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </Typography>
        </Box>

        <Box mb={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                3. Datenerfassung auf unserer Website
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
                Server-Log-Dateien
            </Typography>
            <Typography variant="body1" paragraph>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </Typography>
            <List>
                <ListItem>Browsertyp und Browserversion</ListItem>
                <ListItem>verwendetes Betriebssystem</ListItem>
                <ListItem>Referrer URL</ListItem>
                <ListItem>Hostname des zugreifenden Rechners</ListItem>
                <ListItem>Uhrzeit der Serveranfrage</ListItem>
                <ListItem>IP-Adresse</ListItem>
            </List>
            <Typography variant="body1" paragraph>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </Typography>
        </Box>

        <Box mb={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                4. Soziale Medien
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
                YouTube
            </Typography>
            <Typography variant="body1" paragraph>
                Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
            </Typography>
            <Typography variant="body1" paragraph>
                Wir verwenden YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt, dass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video ansehen. Eine Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich ein Video ansehen – eine Verbindung zum Google DoubleClick-Netzwerk her.
            </Typography>
            <Typography variant="body1" paragraph>
                Wenn Sie ein YouTube-Video auf unserer Seite starten, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
            </Typography>
            <Typography variant="body1" paragraph>
                Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </Typography>
            <Typography variant="body1" paragraph>
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: <a href="https://policies.google.com/privacy?hl=de">https://policies.google.com/privacy?hl=de</a>.
            </Typography>
        </Box>
    </Container>
     );
}
 
export default Datenschutz;