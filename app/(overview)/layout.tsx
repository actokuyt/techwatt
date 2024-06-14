import MobileNav from "@/components/mobile-nav";
import DesktopNav from "@/components/desktop-nav";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
      {children}
      <Footer />
    </div>
  );
}
