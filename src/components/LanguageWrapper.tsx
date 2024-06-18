import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

interface LanguageWrapperProps {
    children: React.ReactNode;
  }
  
const LanguageWrapper: React.FC<LanguageWrapperProps> = ({ children }) => {
    const { i18n } = useTranslation();
    const { lang } = useParams<{ lang?: string }>();
    const navigate = useNavigate();
  
    useEffect(() => {
      const supportedLangs = ['de', 'en'];
      const browserLang = navigator.language.split('-')[0]; // Ermittelt 'en' aus 'en-US'
      const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'en';
  
      if (!lang) {
        navigate(`/${defaultLang}`, { replace: true });
        return;
      }
  
      const language = supportedLangs.includes(lang) ? lang : 'en'; // Fallback auf Deutsch
      if (i18n.language !== language) {
        i18n.changeLanguage(language);
      }
    }, [lang, i18n, navigate]);
  
    return children;
  };
  
  export default LanguageWrapper;