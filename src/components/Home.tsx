import { Box } from "@mui/material";
// import {backgroundImage} from './assets/Titelbild-Webpage-temp.png';
import styled from "@emotion/styled/macro";

const HomeSection = styled(Box)`
  height: 100vh;
  background-image: '../assets/Titelbild-Webpage-temp.png';  
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// background-image: url(${backgroundImage});

const Home = () => {
    // const homeStyle = {
    //     height: '100vh',
    //     backgroundImage: url(${backgroundImage}),  // Replace with your image path
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    //   };

    return ( 
        <HomeSection id="home" />
     );
}
 
export default Home;