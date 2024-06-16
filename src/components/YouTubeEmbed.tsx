import Box from "@mui/material/Box";
import theme from "../utility/theme";
import { Typography } from "@mui/material";
import { ariaLabels, header } from "../utility/contentStrings";

interface YouTubeEmbedProps {
  videoId: string;
  getWindowSizeInfo: () => {
    isLargeWindow: boolean;
    isMediumWindow: boolean;
    isSmallWindow: boolean;
    size: string;
  };
  cookie: {
    cookieConsent?: boolean;
  };
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, getWindowSizeInfo, cookie }) => {

  const secondary = theme.palette.secondary.main;
  const tertiary = theme.palette.tertiary.main;
  const cookieUrlString = cookie.cookieConsent ? '' : '-nocookie';
  const windowSizeInfo = getWindowSizeInfo();

  return (
    <Box
      id={header.video}
      sx={{
        backgroundColor: tertiary,
        width: "100vw",
        pt: "64px",
        mt: "64px",
        pb: windowSizeInfo.size == "small" ? 0 : 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      role="region"
      aria-label={ariaLabels.youtube}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          color: secondary,
          mt: 2,
          fontWeight: "bold",
        }}
      >
        {header.video}
      </Typography>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1600,
          height: 0,
          paddingBottom: "39%",
          background: "#000",
          overflow: "hidden",
          borderTopRightRadius: windowSizeInfo.isLargeWindow ? 6 : 0,
          borderTopLeftRadius: windowSizeInfo.isLargeWindow ? 6 : 0,
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={`https://www.youtube${cookieUrlString}.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
          aria-label={ariaLabels.video}
        />
      </div>
    </Box>
  );
};

export default YouTubeEmbed;