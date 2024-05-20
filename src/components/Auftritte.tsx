import { Box, Typography } from "@mui/material";

interface SectionProps {
    id: string;
  }

const Auftritte = (props: SectionProps) => {
    return ( 
        <Box id={props.id} sx={{ py: 4 }}>
            <Typography variant="h4" component="h2">
                Auftritte
            </Typography>
            <Typography variant="body1" component="p">
                Hier finden Sie Informationen zu unseren kommenden Auftritten...
            </Typography>
        </Box>
     );
}
 
export default Auftritte;