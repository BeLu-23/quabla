import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";

const Impressum = () => {
    
    useEffect(() => {
        document.getElementById("imprOBEN")?.scrollIntoView({ behavior: 'smooth' })
      }, []);

    return ( 
        <Container id="imprOBEN" maxWidth="md" sx={{ padding: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Impressum
            </Typography>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Angaben gemäß § 5 TMG
                </Typography>
                <Typography variant="body1" paragraph>
                    Benjamin Lutz<br />
                    Heideweg 15<br />
                    22085 Hamburg<br />
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Kontakt
                </Typography>
                <Typography variant="body1" paragraph>
                    Telefon: +49 (0) 176 86965979<br />
                    E-Mail: tonesforjoansbones@gmail.com<br />
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </Typography>
                <Typography variant="body1" paragraph>
                    Benjamin Lutz<br />
                    Heideweg 15<br />
                    22085 Hamburg<br />
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Haftung für Inhalte
                </Typography>
                <Typography variant="body1" paragraph>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Haftung für Links
                </Typography>
                <Typography variant="body1" paragraph>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Urheberrecht
                </Typography>
                <Typography variant="body1" paragraph>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </Typography>
            </Box>
        </Container>
     );
}
 
export default Impressum;