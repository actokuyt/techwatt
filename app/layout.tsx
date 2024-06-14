import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import MobileNav from "@/components/mobile-nav";
import DesktopNav from "@/components/desktop-nav";
import Footer from "@/components/footer";

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
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <body className={newsreader.className}>
          <MobileNav />
          <DesktopNav />
          {children}
          <Footer />
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
