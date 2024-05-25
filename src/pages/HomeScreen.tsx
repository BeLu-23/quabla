import { Container, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import theme from "../components/theme";
import Footer from "../components/Footer";

const HomeScreen = () => {
    return ( 
        <div className='App'>

        <NavBar />

        <Section id='home' className='section1' backgroundImage='Titelbild-Webpage-temp.png' />

        <Section id='video' className='section2' backgroundColor={theme.palette.tertiary.main}
        
        >
          
        <Container sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          
          <Typography variant="h5" component="h1" color={"secondary"}>
            Hör dir unsere Musik an...
          </Typography>
          <br />
            <iframe 
              width="100%"
              height="100%" 
              src="https://www.youtube-nocookie.com/embed/OyokKLWtczA?si=lBXrCvu0uFruAXhk" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
                >
            </iframe>
        </Container>


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

        <Footer />

      </div>
     );
}
 
export default HomeScreen;