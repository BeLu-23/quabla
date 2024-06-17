import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Datenschutz = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.focus();
            containerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <Container
            id="datenOBEN"
            maxWidth="md"
            sx={{ padding: 4 }}
            tabIndex={-1}
            ref={containerRef}
            aria-label="Datenschutzerklärung Container"
        >
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                aria-label="Datenschutzerklärung"
            >
                {t('datenschutzTitle')}
            </Typography>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('datenschutz1')}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom>
                    {t('datenschutz2')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('datenschutz3')}
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('datenschutz4')}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom>
                    {t('datenschutz5')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('datenschutz6')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('datenschutz7')}
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('datenschutz8')}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom>
                    {t('datenschutz9')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('datenschutz10')}
                </Typography>
                <List>
                    <ListItem>{t('datenschutz11')}</ListItem>
                    <ListItem>{t('datenschutz12')}</ListItem>
                    <ListItem>{t('datenschutz13')}</ListItem>
                    <ListItem>{t('datenschutz14')}</ListItem>
                    <ListItem>{t('datenschutz15')}</ListItem>
                    <ListItem>{t('datenschutz16')}</ListItem>
                </List>
                <Typography variant="body1" paragraph>
                    {t('datenschutz17')}
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('datenschutz18')}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom>
                    {t('datenschutz19')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('datenschutz20')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('datenschutz21')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('datenschutz22')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('datenschutz23')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('datenschutz24')}
                    <a href="https://policies.google.com/privacy?hl=de">{t('datenschutz25')}</a>.
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('datenschutz26')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('datenschutz27')}
                </Typography>
            </Box>
        </Container>
    );
}

export default Datenschutz;