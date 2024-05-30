import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TitleImageSection from "../components/TitleImageSection";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { useEffect, useState } from "react";
import RespSection from "../components/RespSection";
import { header } from "../utility/header";

const HomeScreen = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [secNumbers, setSecNumbers] = useState([2, 3, 4, 5, 6]);

  const getWindowSizeInfo = () => {
    const sizeInfo = {
      isLargeWindow: windowWidth >= 1600,
      isMediumWindow: windowWidth >= 600 && windowWidth < 1600,
      isSmallWindow: windowWidth < 600,
    };

    let size = "large";
    if (sizeInfo.isSmallWindow) {
      size = "small";
    } else if (sizeInfo.isMediumWindow) {
      size = "medium";
    }

    return { ...sizeInfo, size };
  };

  const updateArray = () => {
    if (getWindowSizeInfo().isSmallWindow) {
      setSecNumbers([1, 2, 3, 4, 5]);
    } else {
      setSecNumbers([2, 3, 4, 5, 6]);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateArray();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <NavBar getWindowSizeInfo={getWindowSizeInfo} />
      <TitleImageSection />
      <YouTubeEmbed
        videoId="OyokKLWtczA?si=lBXrCvu0uFruAXhk"
        getWindowSizeInfo={getWindowSizeInfo}
      />
      <RespSection
        headerValue={header.gigs}
        imageUrl="/ssf_2024_1.png"
        secNumber={secNumbers[0]}
        getWindowSizeInfo={getWindowSizeInfo}
      />
      <RespSection
        headerValue={header.recordings}
        imageUrl="/albumPic.jpg"
        secNumber={secNumbers[1]}
        getWindowSizeInfo={getWindowSizeInfo}
      />
      <RespSection
        headerValue={header.aboutUs}
        imageUrl="/aboutUsPic.jpg"
        secNumber={secNumbers[2]}
        getWindowSizeInfo={getWindowSizeInfo}
      />
      <RespSection
        headerValue={header.contact}
        imageUrl="/kontaktPic2.jpg"
        secNumber={secNumbers[3]}
        getWindowSizeInfo={getWindowSizeInfo}
      />
      <Footer isSmallWindow={getWindowSizeInfo().isSmallWindow} />
    </div>
  );
};

export default HomeScreen;
