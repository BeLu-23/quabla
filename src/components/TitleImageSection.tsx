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
          backgroundImage: `url(/quabla/TP0.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/kontaktPic.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP1.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP2.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP3.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP4.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP5.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP6.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP8.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP9.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP10.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP11.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP12.jpg)`,
          ...sectionStyle,
        }}
      />
      <Box
        id={header.home}
        sx={{
          backgroundImage: `url(/quabla/TP13.jpg)`,
          ...sectionStyle,
        }}
      />
    </>
  );
};

export default TitleImageSection;
