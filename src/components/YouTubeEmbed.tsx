import Box from '@mui/material/Box';
import theme from './theme';
import { Typography } from '@mui/material';

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  const sectionStyle = { backgroundColor: theme.palette.tertiary.main || 'transparent' };

  const handleScroll = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Box
      id="video"
      sx={{
        ...sectionStyle,
        // height: '100vh',
        width: '100vw',
        paddingTop: '64px',
        paddingBottom: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Zentriere den Inhalt horizontal
        alignItems: 'center', // Zentriere den Inhalt vertikal
      }}
    >
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            color: theme.palette.secondary.main, 
            mt: 2 
          }}
        >
            Check mal unser Video
        </Typography>
        <div
            style={{
                position: 'relative',
                width: '70%', // Breite auf 80% begrenzen
                height: '0',
                maxWidth: 1600,
                paddingBottom: '39%', // Höhe basierend auf dem Verhältnis 16:9 anpassen
                background: '#000',
                overflow: 'hidden',
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
            }}
        >
            <iframe
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%' 
                }}
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
            />
        </div>
        <Box sx={{
            position: 'relative',
            width: '70%', // Breite auf 80% begrenzen
            background: theme.palette.secondary.main,
            overflow: 'hidden',
            textAlign: 'center', 
            paddingX: 3, 
            paddingY: 2,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            }}
        > 
            <Typography 
              variant="h5" 
              component="div" 
              gutterBottom 
              sx={{ 
                color: theme.palette.primary.main 
              }}
            >
                Quabla - With You 
            </Typography>
            <Typography 
              variant="body1" 
              component="div" 
              sx={{ 
                color: theme.palette.primary.main 
              }}
            >
                Unser Song "With You" live auf dem 48h Wilhelmsburg Festival in 2023. 
                <br/>
                <br />
                Du hättest dabei sein können. Aber es gibt bestimmt ein nächstes Mal. Schau doch mal bei unseren <a onClick={() => handleScroll("auftritte")} style={{ color: theme.palette.tertiary.main, cursor: 'pointer', textDecoration: 'underline' }}>kommende Auftritten</a>! 
            </Typography>
        </Box>
    </Box>
  );
};

export default YouTubeEmbed;