import { Box } from "@mui/material";
import { header } from "../utility/header";

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
  const sectionStyle = {
    backgroundImage: windowSizeInfo.isLargeWindow ? `url(/title-large.jpg)` : windowSizeInfo.isMediumWindow ? `url(/title-medium.jpg)` : `url(/title-small.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundColor: "transparent",
    width: "100vw",
    pt: "64px",
  };

  return (
      <Box
        id={header.home}
        sx={{
          ...sectionStyle,
        }}
      />
  );
};

export default TitleImageSection;
