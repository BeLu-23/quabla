import { Box, CssBaseline, IconButton, ThemeProvider, Typography } from '@mui/material'
import './App.css'
import theme from './components/theme'
import Section from './components/Section'
import NavBar from './components/NavBar'
import { Facebook, Instagram, YouTube } from '@mui/icons-material'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className='App'>

        <NavBar />

        <Section id='home' className='section1' backgroundImage='Titelbild-Webpage-temp.png' />

        <Section id='video' className='section2' backgroundColor={theme.palette.tertiary.main}>
          {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: "200%", overflow: 'hidden', width: '100%'}}>
            <iframe 
              // width="560" 
              // height="315" 
              width="100%"
              height="100%" 
              src="https://www.youtube.com/embed/OyokKLWtczA?si=lBXrCvu0uFruAXhk" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </Box> */}
          {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <Box sx={{ 
              position: 'relative', 
              // paddingBottom: '56.25%', 
              width: '40%', 
              height: "80%",
              padding: 0,
                  margin: 0,
              borderWidth: '2px',
              borderColor: 'red',
              borderStyle: 'solid'
              }}>
              <iframe 
                src="https://www.youtube.com/embed/OyokKLWtczA?si=lBXrCvu0uFruAXhk" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                style={{
                  // position: 'absolute',
                  // top: 0,
                  // left: 0,
                  width: '120%',
                  padding: 0,
                  margin: 0,
                  // height: '100%',
                  borderWidth: '2px',
                  // display: 'flex',
                  // alignItems: 'center',
                  // justifyContent: 'center',
                  borderColor: 'red',
                  borderStyle: 'solid'
                }}
              ></iframe>
            </Box>
          </Box> */}

<div className="video-container">
    <div className="video-wrapper">
      <iframe 
        className='videowrapper'
        src="https://www.youtube.com/embed/OyokKLWtczA" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  </div>



        </Section>

        <Section id='auftritte' className='section3' backgroundColor={theme.palette.secondary.main}>
          <Typography color="primary">Auftritte</Typography>
        </Section>

        <Section id='alben' className='section4' backgroundColor={theme.palette.tertiary.main}>
          <Typography style={{ backgroundColor: theme.palette.tertiary.main}}>Alben</Typography>
        </Section> 

        <Section id='ueberUns' className='section4' backgroundColor={theme.palette.secondary.main}>
          <Typography color="primary">Über Uns</Typography>
        </Section> 

        <Section id='kontakt' className='section5' backgroundColor={theme.palette.tertiary.main}>
          <Typography style={{ backgroundColor: theme.palette.tertiary.main}}>Kontakt</Typography>
        </Section> 

        <Box className='impressum' sx={{backgroundColor: theme.palette.secondary.main, color: theme.palette.primary.main}}>
          Links, Impressum, Datenschutz, Copyright usw.....
          <Box sx={{flexGrow: 1, display: 'flex'}}>
                    <IconButton
                      size="large"
                      color="inherit"
                      aria-label="facebook"
                      href="https://www.facebook.com/quablaband"
                      target="_blank"
                    >
                      <Facebook />
                    </IconButton>
                    <IconButton
                      size="large"
                      color="inherit"
                      aria-label="twitter"
                      href="https://www.instagram.com/quabla_band/"
                      target="_blank"
                    >
                      <Instagram/>
                    </IconButton>
                    <IconButton
                      size="large"
                      color="inherit"
                      aria-label="twitter"
                      href="https://www.youtube.com/channel/UCzAPef7M6fuDDJbktj-YJIg"
                      target="_blank"
                    >
                      <YouTube/>
                    </IconButton>
                  </Box>
        </Box>

      </div>
    </ThemeProvider>
  )
}

export default App
