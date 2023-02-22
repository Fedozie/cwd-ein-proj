import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/globalStyles";
import AppRoutes from "./routes/appRoutes"
// import MainPage from "./pages/mainPage";

function App() {
  const theme = {
    colors: {
      priLilac: "rgb(87, 43, 223)",
      secLilac: "#180266",
      priColor: "#FAF5F0",
      white: "#FFFFFF"
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes/>
    </ThemeProvider>
   
  );
}

export default App;
