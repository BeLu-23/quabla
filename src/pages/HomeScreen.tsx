import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import AuftritteSection from "../components/AuftritteSection";
import AlbenSection from "../components/AlbenSection";
import AboutUsSection from "../components/AboutUsSection";
import KontaktSection from "../components/KontaktSection";
import TitleImageSection from "../components/TitleImageSection";

const HomeScreen = () => {
    return ( 
      <div className='App'>
        <NavBar />
        <TitleImageSection />
        <VideoSection />
        <AuftritteSection />
        <AlbenSection /> 
        <AboutUsSection />
        <KontaktSection />
        <Footer />
      </div>
     );
}
 
export default HomeScreen;