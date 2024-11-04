import { Outlet } from "react-router-dom";
import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff3933",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
