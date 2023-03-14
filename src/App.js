import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/globalStyles";
import AppRoutes from "./routes/appRoutes";
import { DataProvider } from "./components/contexts/dataContext";


function App() {
  const theme = {
    colors: {
      priLilac: "#572BDF",
      secLilac: "#180266",
      priColor: "#FAF5F0",
      white: "#FFFFFF",
      tintPriLilac: "#E8E6F0",
      dltColor: "#ED5651"
    },
    breakpoints: {
      mbl: '425px',
      tbt: '768px',
      dsk: '1024px',
      lgDsk: '1440px'
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
