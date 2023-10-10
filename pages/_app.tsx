import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          transition: "all 200ms ease-in",
          padding: "0.75rem 1rem",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#0052d6",
          },
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
