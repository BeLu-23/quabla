import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AuftritteSection from "../components/AuftritteSection";
import AlbenSection from "../components/AlbenSection";
import AboutUsSection from "../components/AboutUsSection";
import KontaktSection from "../components/KontaktSection";
import TitleImageSection from "../components/TitleImageSection";
import YouTubeEmbed from "../components/YouTubeEmbed";

const HomeScreen = () => {
    return ( 
      <div className='App'>
        <NavBar />
        <TitleImageSection />
        {/* <VideoSection /> */}
        <YouTubeEmbed videoId="OyokKLWtczA?si=lBXrCvu0uFruAXhk" />
        <AuftritteSection />
        <AlbenSection /> 
        <AboutUsSection />
        <KontaktSection />
        <Footer />
      </div>
     );
}
 
export default HomeScreen;