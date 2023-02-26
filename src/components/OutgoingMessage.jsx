import { Box, Typography, useTheme } from "@mui/material";

const OutgoingMessage = ({message, time}) => {
    const theme = useTheme();

    return <>
        <Box 
            style={{ 
                backgroundColor: theme.palette.primary.main,
                margin: "0.5rem 0.4rem 0.5rem 3rem",
                padding: "0.5rem 1rem",
                borderRadius: "9px 9px 0 9px"
            }}
        >
            <Typography>
                {message}
            </Typography>
            <Typography 
                mt="5px"
                style={{ fontSize: "10px", fontStyle: "italic", fontWeight: "bold" }}
            >
                {time}
            </Typography>
        </Box>
    </>;
}
 
export default OutgoingMessage;