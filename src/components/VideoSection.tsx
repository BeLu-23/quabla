// import { Container, Typography } from "@mui/material";
// import Section from "./Section";
// import theme from "./theme";

// const VideoSection = () => {
//     return ( 
//         <Section id='video' className='section2' backgroundColor={theme.palette.tertiary.main}
        
//         >
          
//         <Container sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          
//           <Typography variant="h5" component="h1" color={"secondary"}>
//             Hör dir unsere Musik an...
//           </Typography>
//           <br />
//             <iframe 
//               width="100%"
//               height="100%" 
//               src="https://www.youtube-nocookie.com/embed/OyokKLWtczA?si=lBXrCvu0uFruAXhk" 
//               title="YouTube video player" 
//               frameBorder="0" 
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
//               referrerPolicy="strict-origin-when-cross-origin" 
//               allowFullScreen
//                 >
//             </iframe>
//         </Container>


//         </Section>
//     );
// }
 
// export default VideoSection;



// import { Box, Typography, Card, CardContent } from "@mui/material";
// import Section from "./Section";
// import theme from "./theme";

// const VideoSection = () => {
//     return ( 
//         <Section id='video' className='section2' backgroundColor={theme.palette.tertiary.main}>
//             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 4 }}>
//                 <Typography variant="h4" component="h2" gutterBottom sx={{ color: theme.palette.secondary.main }}>
//                     Hör dir unsere Musik an...
//                 </Typography>
//                 <Card sx={{ maxWidth: 1200, margin: 2, width: '100%', boxShadow: 'none', background: 'inherit' }}>
//                     <CardContent>
//                         <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
//                             <iframe 
//                                 width="100%"
//                                 height="100%" 
//                                 src="https://www.youtube-nocookie.com/embed/OyokKLWtczA?si=lBXrCvu0uFruAXhk" 
//                                 title="YouTube video player" 
//                                 frameBorder="0" 
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
//                                 referrerPolicy="strict-origin-when-cross-origin" 
//                                 allowFullScreen
//                                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
//                             ></iframe>
//                         </Box>
//                     </CardContent>
//                 </Card>
//             </Box>
//         </Section>
//     );
// }
 
// export default VideoSection;




import { Box, Typography, Card, CardContent } from "@mui/material";
import Section from "./Section";
import theme from "./theme";

const VideoSection = () => {
    return ( 
        <Section id='video' className='section2' backgroundColor={theme.palette.tertiary.main}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                    Hör dir unsere Musik an...
                </Typography>
                <Card sx={{ maxWidth: 1200, margin: 2, width: '100%', boxShadow: 'none', background: 'inherit' }}>
                    <CardContent>
                        <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                            <iframe 
                                width="100%"
                                height="100%" 
                                src="https://www.youtube-nocookie.com/embed/OyokKLWtczA?si=lBXrCvu0uFruAXhk" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            ></iframe>
                        </Box>
                    </CardContent>
                </Card>
                <CardContent sx={{ maxWidth: 1200, margin: 2, width: '100%', backgroundColor: theme.palette.secondary.main }}>
                    <Typography variant="body1" component="div" sx={{ color: theme.palette.primary.main }}>
                        Genieße unser neuestes Musikvideo und lass dich von den Klängen unserer Band verzaubern.
                        Wir sind stolz darauf, unsere Musik mit dir zu teilen und hoffen, dass du genauso viel Freude daran hast wie wir.
                        Bleib dran für mehr spannende Inhalte und Auftritte!
                    </Typography>
                </CardContent>
            </Box>
        </Section>
    );
}
 
export default VideoSection;
