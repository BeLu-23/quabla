import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Section from "./Section";
import theme from "./theme";

const VideoSection = () => {

    const handleScroll = (section: string) => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }

    return ( 
      <Section id='video' className='section1' backgroundColor={theme.palette.tertiary.main}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: theme.palette.secondary.main,
              //  borderStyle: 'solid', borderWidth: 2, borderColor: 'red' 
            }}>
                Unser Album
            </Typography>
            <Card 
                sx={{ 
                    maxWidth: 600, 
                    margin: 2,
                    width: '100%', 
                    boxShadow: 'none', 
                    background: 'inherit',
                    // cursor: 'pointer',
                    // borderStyle: 'solid', borderWidth: 2, borderColor: 'yellow'
                }}
            >
                    <CardMedia
                        component="iframe"
                        src="https://www.youtube-nocookie.com/embed/OyokKLWtczA?si=lBXrCvu0uFruAXhk"
                        title="YouTube video player"
                        sx={{ 
                          width: '100%',
                          height: '100%',
                          aspectRatio: '16/9',
                          border: 'none',
                          cursor: 'pointer',
                          // borderStyle: 'solid', borderWidth: 2, borderColor: 'red'
                      }}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />

                            
                <CardContent sx={{ backgroundColor: theme.palette.secondary.main }}>
                  <Typography variant="h5" component="div" gutterBottom sx={{ color: theme.palette.primary.main }}>
                        Quabla - With You 
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ color: theme.palette.primary.main }}>
                        Unser Song "With You" live auf dem 48h Wilhelmsburg Festival in 2023.
                        Du hättest dabei sein können. Aber es gibt bestimmt ein nächstes Mal. Schau doch mal bei unseren <a onClick={() => handleScroll("auftritte")} style={{ color: theme.palette.tertiary.main, cursor: 'pointer', textDecoration: 'underline' }}>kommende Auftritten</a>! 
                    </Typography>
                  </CardContent>
            </Card>
        </Box>
    </Section>
    );
}
 
export default VideoSection;
