import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getNavigation, getFooter } from "@/services/api-services";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LogRocketInit from "@/components/integrations/LogRocketInit";
import GoogleAnalytics from "@/components/integrations/GoogleAnalytics";
import TawktoChat from "@/components/integrations/TawktoChat";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISR Website",
  description: "Next.js ISR website with Strapi CMS",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navigationData, footerData] = await Promise.all([
    getNavigation(),
    getFooter(),
  ]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <LogRocketInit />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID} />
        )} */}
        <Header navigation={navigationData.data} />
        <main>{children}</main>
        <Footer footer={footerData.data} />
        {/* <TawktoChat /> */}
      </body>
    </html>
  );
}