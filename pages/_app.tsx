import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navigation from "../components/Navigation/Navigation";
import HNav from "../components/HNav/HNav";
import Provider from "../context/Provider";
import MainSection from "../components/MainSection/MainSection";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Provider>
        <div className="bg-kani dark:bg-black min-h-screen">
          <Navigation />
          <div className="flex">
            <HNav />
            <MainSection>
              <Component {...pageProps} />
            </MainSection>
          </div>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
