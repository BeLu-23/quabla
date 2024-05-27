import React from "react";
import '../App.css';
import { Box} from "@mui/material";

interface SectionProps {
    id: string;
    children?: React.ReactNode;
    backgroundImage?: string;
    backgroundColor?: string;
}

const Section = ({id,children, backgroundImage, backgroundColor}: SectionProps) => {

    const sectionStyle = backgroundImage
    ? { 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    }
    : { 
        backgroundColor: backgroundColor || 'transparent', 
        height: 'auto' 
    };
    
    return ( 
        <Box 
            id={id}
            sx={{ 
                ...sectionStyle, 
                backgroundColor: backgroundColor || 'transparent', 
                width: '100vw', paddingTop: '64px',
                paddingBottom: 2
            }}
        >
            {children}
        </Box>
     );
}
 
export default Section;