import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledEngineProvider } from "@mui/material/styles";

const newsreader = Newsreader({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techwatt AI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={newsreader.className}>
        {/* <AppRouterCacheProvider options={{ enableCssLayer: true }}> */}
          <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
        {/* </AppRouterCacheProvider> */}
      </body>
    </html>
  );
}
