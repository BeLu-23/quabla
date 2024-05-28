import Box from "@mui/material/Box";
import theme from "../utility/theme";
import { Typography } from "@mui/material";
import { header } from "../utility/header";
import { contentStrings } from "../utility/contentStrings";

interface YouTubeEmbedProps {
  videoId: string;
  getWindowSizeInfo: () => {
    isLargeWindow: boolean;
    isMediumWindow: boolean;
    isSmallWindow: boolean;
    size: string;
  };
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, getWindowSizeInfo }) => {

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const tertiary = theme.palette.tertiary.main;

  const generateHtmlContent = (content: string, color: string): string => {
    return content.replace('{color}', color)
                  .replace('{section}', header.gigs);
  };
  const htmlContent = generateHtmlContent(contentStrings.video.content, tertiary);

  const windowSizeInfo = getWindowSizeInfo();

  return (
    <Box
      id={header.video}
      sx={{
        backgroundColor: tertiary,
        width: "100vw",
        pt: "64px",
        pb: windowSizeInfo.size == "small" ? 0 : 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Zentriere den Inhalt horizontal
        alignItems: "center", // Zentriere den Inhalt vertikal
      }}
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
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        />
      </div>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1600,
          background: secondary,
          overflow: "hidden",
          textAlign: "center",
          paddingX: 3,
          paddingY: 2,
          borderBottomRightRadius: windowSizeInfo.isLargeWindow ? 5 : 0,
          borderBottomLeftRadius: windowSizeInfo.isLargeWindow ? 5 : 0,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            color: primary,
          }}
        >
          {contentStrings.video.header}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: primary,
          }}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </Box>
    </Box>
  );
};

export default YouTubeEmbed;
