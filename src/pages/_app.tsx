import { api } from "~/utils/api";
import "~/styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};
export default api.withTRPC(MyApp);
