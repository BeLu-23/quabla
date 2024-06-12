import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import theme from "../utility/theme";
import { ariaLabels, contentStrings, header } from "../utility/contentStrings";

interface RespSectionProps {
    headerValue: string;
    imageUrl: string;
    imageAlt: string;
    secNumber?: number;
    getWindowSizeInfo: () => {
        isLargeWindow: boolean;
        isMediumWindow: boolean;
        isSmallWindow: boolean;
        size: string;
    };
}

const RespSection = ({ headerValue, imageUrl, imageAlt, secNumber, getWindowSizeInfo }: RespSectionProps) => {

    const headerKey = Object.keys(header).find(key => header[key as keyof typeof header] === headerValue) as keyof typeof contentStrings | undefined;
    const windowSizeInfo = getWindowSizeInfo();

    const isEven = (num: number | undefined) => {
        if (num) {
            return num % 2 === 0;
        } else {
            return false;
        }
    }

    const backgroundColor = windowSizeInfo.isSmallWindow 
                            ? theme.palette.tertiary.main
                            : isEven(secNumber) 
                            ? theme.palette.secondary.main
                            : theme.palette.tertiary.main;

    const backgroundColorCard = windowSizeInfo.isSmallWindow 
                            ? theme.palette.secondary.main
                            : isEven(secNumber) 
                            ? theme.palette.tertiary.main
                            : theme.palette.secondary.main;
        
    const textColorTop = backgroundColor === theme.palette.tertiary.main
                            ? theme.palette.secondary.main
                            : theme.palette.primary.main;

    const textColorCard = theme.palette.primary.main;

    if (!headerKey) {
        return null;
    }
    const content = contentStrings[headerKey];
    const isRecordingSection = headerKey === "recordings";

    const generateHtmlContent = (content: string, color: string): string => {
        return content.replace('{color}', color);
    };

    const htmlContent = generateHtmlContent(content.content, backgroundColor);

    const respSectionStyle = { 
        backgroundColor: backgroundColor || 'transparent', 
        height: 'auto',
        width: '100vw', 
        pt: '64px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center", 
    };

    return ( 
        <Box 
            id={headerValue}
            sx={{ 
                ...respSectionStyle,  
            }}
            aria-label={`${headerValue} section`}
        >
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                    color: textColorTop,
                    mt: 2,
                    fontWeight: "bold",
                }}
            >
                {headerValue}
            </Typography>
            <Card
                sx={{
                    maxWidth: 600,
                    margin: 2,
                    marginBottom: windowSizeInfo.isSmallWindow ? 0 : 4,
                    width: "100%",
                    boxShadow: "none",
                    background: "inherit",
                    borderRadius:  windowSizeInfo.isSmallWindow ? 0 : undefined,
                    cursor: isRecordingSection ? "pointer" : "default",
                }}
                onClick={() =>
                    isRecordingSection
                    ? window.open(
                        "https://open.spotify.com/intl-de/album/3nUKbudJ3WSClN0qQQlHZE",
                        "_blank"
                      )
                    : undefined
                  }
                role={isRecordingSection ? "button" : undefined}
                tabIndex={isRecordingSection ? 0 : undefined}
                aria-label={isRecordingSection ? ariaLabels.recordings : undefined}
            >
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={`${imageAlt} image`}
                    sx={{
                        height: "auto",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        maxHeight: isRecordingSection ? 'none' : 400,
                    }}
                />
                <CardContent
                    sx={{
                        backgroundColor: backgroundColorCard,
                    }}
                >
                    <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        sx={{
                            color: textColorCard,
                        }}
                        dangerouslySetInnerHTML={{ __html: content.header }}
                    />
                    {content.subtitle && 
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{
                                color: textColorCard,
                            }}
                            dangerouslySetInnerHTML={{ __html: content.subtitle }}
                        />
                    }
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{
                            mt: 2,
                            color: textColorCard,
                        }}
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </CardContent>
            </Card>
        </Box>
     );
}

export default RespSection;