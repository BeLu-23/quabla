import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import theme from "../utility/theme";
import { ariaLabels, header } from "../utility/contentStrings";
import { useTranslation } from "react-i18next";

interface TitleImageSectionProps {
  getWindowSizeInfo: () => {
    isLargeWindow: boolean;
    isMediumWindow: boolean;
    isSmallWindow: boolean;
    size: string;
  };
}

const TitleImageSection = ({ getWindowSizeInfo }: TitleImageSectionProps) => {

  const windowSizeInfo = getWindowSizeInfo();
  const { t } = useTranslation();

  const images = {
    large: ["/title-large-1-compressed.jpg", "/title-large-2-compressed.jpg", "/title-large-3-compressed.jpg"],
    small: ["/title-small-1-compressed.jpg", "/title-small-2-compressed.jpg", "/title-small-3-compressed.jpg", "/title-small-4-compressed.jpg"],
  };

  const selectedImages = windowSizeInfo.isSmallWindow ? images.small : images.large;

  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id={header.home}
      sx={{
        height: "calc(100vh - 64px)",
        width: "100vw",
        pt: "64px",
        backgroundColor: theme.palette.tertiary.main,
        position: "relative",
      }}
      role="region"
      aria-label={ariaLabels.title}
    >
      <Box 
        sx={{
          position: "absolute",
          zIndex: 10,
          bottom: '-30px',
          left: "50%",
          transform: "translateX(-50%)",
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Button 
          onClick={() => { handleClick(header.recordings) }} 
          sx={{
            border: '3px solid',
            color: theme.palette.tertiary.main,
            backgroundColor: theme.palette.primary.main,
            mb: '10px',
            padding: { xs: '6px 12px', sm: '8px 18px', md: '8px 18px' },
            '&:hover': {
              backgroundColor: theme.palette.tertiary.main,
              color: theme.palette.primary.main,
            },
            '&:active': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.tertiary.main,
            },
          }}
          aria-label={ariaLabels.scrollRecordings}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: '14px', sm: '16px', md: '16px' },
            }}
          >
            {/* {titlePageButton.recordings} */}
            {t('titleButtonRecording')}
          </Typography>
        </Button>

        <Button 
          onClick={() => { handleClick(header.video) }} 
          sx={{
            border: '3px solid',
            color: theme.palette.tertiary.main,
            backgroundColor: theme.palette.primary.main,
            padding: { xs: '6px 12px', sm: '8px 18px', md: '8px 18px' },
            '&:hover': {
              backgroundColor: theme.palette.tertiary.main,
              color: theme.palette.primary.main,
            },
            '&:active': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.tertiary.main,
            },
          }}
          aria-label={ariaLabels.scrollVideo}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: '14px', sm: '16px', md: '16px' },
            }}
          >
            {/* {titlePageButton.video} */}
            {t('titleButtonVideo')}
          </Typography>
        </Button>
      </Box>
      
      <Carousel
        autoPlay={true}
        interval={3500}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        fullHeightHover={false}
        aria-label={ariaLabels.carousel}
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
            role="img"
            aria-label={`${ariaLabels.carouselImage} ${index + 1}`}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default TitleImageSection;