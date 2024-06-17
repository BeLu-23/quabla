import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TitleImageSection from "../components/TitleImageSection";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { useEffect, useState } from "react";
import RespSection from "../components/RespSection";
import { useCookies } from "react-cookie";
import CookieConsent from "../components/CookieConsent";
import { header } from "../utility/contentStrings";
import { t } from "i18next";

const HomeScreen = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [secNumbers, setSecNumbers] = useState([2, 3, 4, 5, 6]);

  const [cookies, setCookies] = useCookies(["cookieConsent"]);

  const videoId = 'OyokKLWtczA?si=lBXrCvu0uFruAXhk';
  const gigsPic= 'https://github.com/BeLu-23/quablaBandImages/blob/master/ssf_2024_1.png?raw=true';
  const recordingsPic = 'https://github.com/BeLu-23/quablaBandImages/blob/master/albumPic.jpg?raw=true';
  const aboutUsPic = 'https://github.com/BeLu-23/quablaBandImages/blob/master/aboutUsPic.jpg?raw=true';
  const contactPic = 'https://github.com/BeLu-23/quablaBandImages/blob/master/kontaktPic2-compressed.jpg?raw=true';

  // const gigsPic= "/ssf_2024_1.png";
  // const recordingsPic = "/albumPic.jpg";
  // const aboutUsPic = "/aboutUsPic.jpg";
  // const contactPic = "/kontaktPic2-compressed.jpg";
  


  const giveCookieConsent = () => {
    setCookies("cookieConsent", true, {path: "/"});
  }

  const getWindowSizeInfo = () => {
    const sizeInfo = {
      isLargeWindow: windowWidth >= 1600,
      isMediumWindow: windowWidth >= 650 && windowWidth < 1600,
      isSmallWindow: windowWidth < 650,
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
      {!cookies.cookieConsent && (
        <CookieConsent giveCookieConsent={giveCookieConsent} isSmallWindow={getWindowSizeInfo().isSmallWindow} />
      )}
      <NavBar getWindowSizeInfo={getWindowSizeInfo} />
      <TitleImageSection getWindowSizeInfo={getWindowSizeInfo} />
      <YouTubeEmbed
        videoId={videoId}
        getWindowSizeInfo={getWindowSizeInfo}
        cookie={cookies}
      />
      <RespSection
        headerValue={header.gigs}
        imageUrl={gigsPic}
        secNumber={secNumbers[0]}
        getWindowSizeInfo={getWindowSizeInfo}
        imageAlt={t('headergigs')}
      />
      <RespSection
        headerValue={header.recordings}
        imageUrl={recordingsPic}
        secNumber={secNumbers[1]}
        getWindowSizeInfo={getWindowSizeInfo}
        imageAlt={header.recordings}
      />
      <RespSection
        headerValue={header.aboutUs}
        imageUrl={aboutUsPic}
        secNumber={secNumbers[2]}
        getWindowSizeInfo={getWindowSizeInfo}
        imageAlt={header.aboutUs}
      />
      <RespSection
        headerValue={header.contact}
        imageUrl={contactPic}
        secNumber={secNumbers[3]}
        getWindowSizeInfo={getWindowSizeInfo}
        imageAlt={header.contact}
      />
      <Footer isSmallWindow={getWindowSizeInfo().isSmallWindow} />
    </div>
  );
};

export default HomeScreen;