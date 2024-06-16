import { Box, Container, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Impressum = () => {
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
            id="imprOBEN" 
            maxWidth="md" 
            sx={{ padding: 4 }} 
            tabIndex={-1} 
            ref={containerRef}
            aria-label="Impressum Container"
        >
            <Typography variant="h4" component="h1" gutterBottom>
                {t('impressumTitle')}
            </Typography>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('impressum1')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('impressum2')}<br />
                    {t('impressum3')}<br />
                    {t('impressum4')}<br />
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('impressum5')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('impressum6')}<br />
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('impressum7')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('impressum8')}
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('impressum9')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('impressum10')}
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {t('impressum11')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('impressum12')}
                </Typography>
            </Box>
        </Container>
     );
}
 
export default Impressum;