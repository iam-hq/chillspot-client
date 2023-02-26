import { Box, InputBase, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Search, Settings, SendRounded } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useState } from "react";
import io from "socket.io-client";
import IncomingMessage from "components/IncomingMessage";
import OutgoingMessage from "components/OutgoingMessage";

const socket = io.connect("https://thechillspot-api.onrender.com");

const Messages = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const theme = useTheme();
    const [message, setMessage] = useState("");
    
    const handleSendMessage = () => {
        alert("Message:" + message);
        setMessage("")
    }

    const joinRoom = () => {
        socket.emit("join_chat", {userId: "isadfnakfafkl"});
    }

    return <>
        <Box
            width={isNonMobileScreens ? "60%" : "93%"}
            m="2rem auto"
            borderRadius="9px"
            backgroundColor={theme.palette.background.main}
            display="grid"
            gap="0"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
                "& > div": { gridColumn: isNonMobileScreens ? undefined : "span 4" },
            }}
        >
            <Box borderRadius="9px 0 0 9px" sx={{ gridColumn: "span 1" }} backgroundColor={theme.palette.background.alt}>
                <FlexBetween
                    backgroundColor={theme.palette.neutral.light}
                    borderRadius="9px 0 0 0"
                    gap="3rem"
                    padding="0.3rem 0.3rem 0.3rem 0.7rem"
                    height={50}
                >
                    <InputBase placeholder="Search..." />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
                
            </Box>
            <Box borderRadius="0 9px 9px 0" sx={{ gridColumn: "span 3"}} backgroundColor={theme.palette.neutral.medium}>
                <FlexBetween
                    backgroundColor={theme.palette.neutral.light}
                    borderRadius="0 9px 0 0"
                    gap="3rem"
                    padding="0.3rem 0.3rem 0.3rem 1.5rem"
                    height={50}
                >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>John Doe</Typography>
                    <IconButton onClick={joinRoom}>
                        <Settings />
                    </IconButton>
                </FlexBetween>
                <Box sx={{ minHeight: "60vh" }}>
                    <IncomingMessage 
                        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ab! Unde, enim culpa reiciendis assumenda ullam ducimus ad sapiente quos repellendus iure excepturi, doloribus a. Nam facilis suscipit similique error!"
                        time="30/05/2019 15:30" />
                    <OutgoingMessage
                        message="Dolore, ab! Unde, enim culpa reiciendis assumenda ullam ducimus ad sapiente quos repellendus iure excepturi, doloribus a."
                        time="30/05/2019 15:30" />
                    <OutgoingMessage
                        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam facilis suscipit similique error!"
                        time="30/05/2019 15:30" />
                    <IncomingMessage 
                        message="Dolore, ab! Unde, enim culpa reiciendis assumenda ullam ducimus ad sapiente quos repellendus iure excepturi, doloribus a. Nam facilis suscipit similique error!"
                        time="30/05/2019 15:30" />
                </Box>
                <FlexBetween
                    backgroundColor={theme.palette.neutral.light}
                    borderRadius="0 0 9px 0"
                    padding="0.3rem 0.3rem 0.3rem 0.7rem"
                >
                    <InputBase
                        value={message}
                        multiline
                        maxRows={6}
                        placeholder="Type Message Here..." 
                        style={{ width: "100%", outline: 0 }}
                        onChange={(e) => setMessage(e.target.value)} />
                    <IconButton onClick={handleSendMessage}>
                        <SendRounded />
                    </IconButton>
                </FlexBetween>
            </Box>
        </Box>
    </>;
}
 
export default Messages;