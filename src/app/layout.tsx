import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Starfield } from "@/components/background/starfield";
import { GlobalSceneWrapper } from "@/components/3d/global-scene-wrapper";
import { Navbar } from "@/components/navigation/navbar";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celestia Creative | Designing Digital Experiences Beyond Imagination",
  description: "Premium digital product agency — UI/UX, mobile & web app design, SaaS dashboards.",
  openGraph: {
    title: "Celestia Creative",
    description: "Designing Digital Experiences Beyond Imagination. Premium digital product agency.",
    url: "https://celestiacreative.com",
    siteName: "Celestia Creative",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Celestia Creative",
    description: "Designing Digital Experiences Beyond Imagination.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
        <Starfield />
        <GlobalSceneWrapper />
        <Navbar />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
