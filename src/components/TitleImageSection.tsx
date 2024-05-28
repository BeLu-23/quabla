import { Box } from "@mui/material";
import { header } from "../utility/header";

const TitleImageSection = () => {
  const sectionStyle = {
    backgroundImage: `url(/quabla/Quabla_Title_Dummy2.jpg)`,
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
