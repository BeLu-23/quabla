import { Box } from "@mui/material";
import { header } from "../utility/header";
import Carousel from "react-material-ui-carousel";

interface TitleImageSectionProps {
  getWindowSizeInfo: () => {
      isLargeWindow: boolean;
      isMediumWindow: boolean;
      isSmallWindow: boolean;
      size: string;
    };
}

const TitleImageSection = ({getWindowSizeInfo}: TitleImageSectionProps) => {

  const windowSizeInfo = getWindowSizeInfo();
  // const sectionStyle = {
  //   backgroundImage: windowSizeInfo.isLargeWindow ? `url(/title-large.jpg)` : windowSizeInfo.isMediumWindow ? `url(/title-medium.jpg)` : `url(/title-small.jpg)`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   height: "100vh",
  //   backgroundColor: "transparent",
  //   width: "100vw",
  //   pt: "64px",
  // };

  const images = {
    large: ["/title-large-1.jpg", "/title-large-2.jpg", "/title-large-3.jpg"],
    small: ["/title-small-1.jpg", "/title-small-2.jpg", "/title-small-3.jpg", "/title-small-4.jpg"],
  };

  const selectedImages = windowSizeInfo.isLargeWindow
    ? images.large
    : images.small;

  return (
    <Box
      id={header.home}
      sx={{
        // height: "100vh",
        height: "calc(100vh - 64px)",
        width: "100vw",
        // pt: "64px",
        mb: "64px",
      }}
    >
      <Carousel
        autoPlay={true}
        interval={3500}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        fullHeightHover={false}
        // timeout={5000}
      >
        {selectedImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100vw",
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default TitleImageSection;
