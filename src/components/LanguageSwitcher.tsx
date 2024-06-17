import { Avatar, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

interface LanguageSwitcherProps {
    isSmallWindow: boolean;
}

const LanguageSwitcher = ({ isSmallWindow }: LanguageSwitcherProps) => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'de' : 'en';
        const newPath = `/${newLanguage}${location.pathname.substring(3)}`;
        i18n.changeLanguage(newLanguage);
        navigate(newPath);
    };

    return (
        <Box 
            onClick={changeLanguage}
            sx={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', 
                marginTop: isSmallWindow ? 1 : 0,
                marginLeft: 2,
                mr: 2,
            }}
        >
            <Avatar 
                src={ i18n.language === 'en' 
                    ? "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" 
                    : "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg" }
                alt="Sprachauswahl" 
                sx={{ height: '20px', width: '20px' }}
            />
        </Box>
    );
};

export default LanguageSwitcher;