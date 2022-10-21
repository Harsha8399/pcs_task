import "./App.css";
import Container from "@mui/material/Container";
import Topbar from "./components/topbar";
import PermanentDrawerLeft from "./components/leftdrawer";
import { Box, CssBaseline, GlobalStyles, Stack } from "@mui/material";
import BasicCard from "./components/Dashcards";
import Activity from "./components/Activity";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
import { blue, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "90caf9",
    },
    secondary: purple,
  },
  background: "90caf9",
});

const globals = (
  <GlobalStyles
    styles={{
      body: { backgroundColor: "90caf9" },
    }}
  />
);

function App() {
  return (
    // <ThemeProvider theme={globals}>
    <>
    {globals}
      <CssBaseline />
      <Container>
        <PermanentDrawerLeft />
        <Stack justifyContent="flex-start">
          <Stack
            display="flex"
            position="absolute"
            justifyContent="space-between"
          >
            <BasicCard></BasicCard>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                position: "inherit",
              }}
              ml={115}
            >
              <Activity />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default App;
