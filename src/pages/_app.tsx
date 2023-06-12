import { api } from "~/utils/api";
import "~/styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default api.withTRPC(MyApp);
