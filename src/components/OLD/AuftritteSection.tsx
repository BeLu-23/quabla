import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Section from "./Section";
import theme from "../../utility/theme";
import { useEffect, useState } from "react";
import { header } from "../../utility/header";

const AuftritteSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isLargeWindow = () => {
    if (windowWidth < 600) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section 
      id={header.gigs} 
      backgroundColor={theme.palette.secondary.main}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            mt: 2,
            fontWeight: "bold",
          }}
        >
          Kommende Auftritte
        </Typography>
        <Card
          sx={{
            maxWidth: 600,
            margin: 2,
            marginBottom: isLargeWindow() ? 4 : 0,
            width: "100%",
            boxShadow: "none",
            background: "inherit",
          }}
        >
          <CardMedia
            component="img"
            image="/quabla/ssf_2024_1.png"
            alt="Kommender Auftritt"
            sx={{
              height: "auto",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: 300,
            }}
          />
          <CardContent
            sx={{
              backgroundColor: theme.palette.tertiary.main,
            }}
          >
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              Sternstunden Festival an der Sternwarte in Bergedorf
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              Datum: 20. Juli 2024
              <br />
              Zeit: 12.30 Uhr
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{
                mt: 2,
                color: theme.palette.primary.main,
              }}
            >
              Unsere Band wird live im Stadtpark auftreten! Kommt und genießt
              eine unvergessliche Nacht voller Musik und guter Stimmung. Wir
              freuen uns darauf, euch alle dort zu sehen!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Section>
  );
};

export default AuftritteSection;
