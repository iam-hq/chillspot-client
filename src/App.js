import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Navbar from "scenes/navbar";
import { QueryClientProvider, QueryClient } from "react-query";
import Error404 from "scenes/errorPage";
import Messages from "scenes/messagesPage";

// const socket = io.connect("https://thechillspot-api.onrender.com");

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  const queryClient = new QueryClient();

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            
            {!isAuth ? (
              <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
              >
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                  The ChillSpot
                </Typography>
              </Box>
            ) : (
              <Navbar />
            )}
            <Routes>
              <Route path="/" element={!isAuth ? <LoginPage /> : <Navigate to="/home" />} />
              <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
              <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
              <Route path="/messages" element={isAuth ? <Messages /> : <Navigate to="/" />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
