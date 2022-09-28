import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Repositories from "./pages/repositories";
import Issues from "./pages/issues";
import RelayEnvironment from "./relay-environment";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Container component={Box} p={2}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Repositories />} />
              <Route path=":repo" element={<Issues />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </RelayEnvironmentProvider>
    </ThemeProvider>
  );
};

export default App;
