import { Box } from "@mui/material";
import { header } from "../utility/header";

const TitleImageSection = () => {
  const sectionStyle = {
    // backgroundImage: `url(/quabla/Quabla_Title_Dummy2.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundColor: "transparent",
    width: "100vw",
    pt: "64px",
  };

  return (
    <>
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP0.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/kontaktPic.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP1.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP2.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP3.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP4.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP5.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP6.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP8.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP9.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP10.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP11.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP12.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/TP13.jpg)`,
          ...sectionStyle,
        }}
      />
    </>
  );
};

export default TitleImageSection;
