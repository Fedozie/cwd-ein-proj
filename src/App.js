import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/globalStyles";
import AppRoutes from "./routes/appRoutes";
import { DataProvider } from "./components/contexts/dataContext";


function App() {
  const theme = {
    colors: {
      priLilac: "#572bdf",
      secLilac: "#180266",
      priColor: "#FAF5F0",
      white: "#FFFFFF",
      tintPriLilac: "#e8e6f0"
    },
    breakpoints: {
      smMd: '425px',
      midMd: '600px',
      md: '768px',
      lg: '1024px'
    }
  }

  return (

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DataProvider>
        <AppRoutes />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
