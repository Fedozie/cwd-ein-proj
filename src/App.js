import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/globalStyles";
import AppRoutes from "./routes/appRoutes"


function App() {
  const theme = {
    colors: {
      priLilac: "#572bdf",
      secLilac: "#180266",
      priColor: "#FAF5F0",
      white: "#FFFFFF",
      tintPriLilac: "#e8e6f0"
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
