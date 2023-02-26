import { Box, Typography, useTheme } from "@mui/material";

const IncomingMessage = ({message, time}) => {
    const theme = useTheme();

    return <>
        <Box 
            style={{ 
                backgroundColor: theme.palette.primary.light,
                margin: "0.5rem 3rem 0.5rem 0.4rem",
                padding: "0.5rem 1rem",
                borderRadius: "9px 9px 9px 0" 
            }}
        >
            <Typography>
                {message}
            </Typography>
            <Typography smt="5px"
                style={{ fontSize: "10px", fontStyle: "italic", fontWeight: "bold" }}>
               {time}
            </Typography>
        </Box>
    </>;
}
 
export default IncomingMessage;