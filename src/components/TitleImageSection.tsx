import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import theme from "../utility/theme";
import { header } from "../utility/contentStrings";

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

  const images = {
    large: ["/title-large-1-compressed.jpg", "/title-large-2-compressed.jpg", "/title-large-3-compressed.jpg"],
    small: ["/title-small-1-compressed.jpg", "/title-small-2-compressed.jpg", "/title-small-3-compressed.jpg", "/title-small-4-compressed.jpg"],
  };

  const selectedImages = windowSizeInfo.isSmallWindow
    ? images.small
    : images.large;

  return (
    <Box
      id={header.home}
      sx={{
        height: "calc(100vh - 64px)",
        width: "100vw",
        pt: "64px",
        backgroundColor: theme.palette.tertiary.main,
      }}
    >
      <Carousel
        autoPlay={true}
        interval={3500}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        fullHeightHover={false}
      >
        {selectedImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "calc(100vh - 64px)",
              width: "100vw",
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default TitleImageSection;
