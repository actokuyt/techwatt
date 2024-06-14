import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { BlogArticlesFetchProvider } from "@/contexts/fetch-contexts/blog-articles-fetch-context";

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
        {/* <BlogArticlesFetchProvider> */}
          <body className={newsreader.className}>{children}</body>
        {/* </BlogArticlesFetchProvider> */}
      </AppRouterCacheProvider>
    </html>
  );
}
