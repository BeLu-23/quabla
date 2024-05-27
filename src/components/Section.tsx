import React from "react";
import '../App.css';
import { Box} from "@mui/material";

interface SectionProps {
    id: string;
    children?: React.ReactNode;
    className?: string;
    backgroundImage?: string;
    backgroundColor?: string;
}

const Section = ({id,children, className, backgroundImage, backgroundColor}: SectionProps) => {

    const sectionStyle = backgroundImage
    ? { 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
    }
    : { backgroundColor: backgroundColor || 'transparent' };
    
    return ( 
        <Box 
            id={id}
            sx={{ ...sectionStyle, backgroundColor: backgroundColor || 'transparent', height: '100vh', width: '100vw', paddingTop: '64px',
            //  borderStyle: 'solid', borderWidth: 2, borderColor: 'red' 
            }}
            className={`section ${className}`} 
            >
            {children}
        </Box>
     );
}
 
export default Section;