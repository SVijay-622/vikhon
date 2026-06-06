import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "VIKHON — Where Service Meets The Extraordinary",
    template: "%s | VIKHON",
  },
  description:
    "VIKHON is a premium digital agency offering Web Development, UI/UX Design, Mobile Apps, and Digital Marketing. Based in Chennai, India.",
  keywords: ["web development", "UI/UX design", "mobile apps", "digital marketing", "digital agency", "VIKHON", "Chennai"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "VIKHON",
    title: "VIKHON — Where Service Meets The Extraordinary",
    description: "Premium digital agency offering extraordinary services.",
  },
};

/* Inline script runs before paint — prevents flash of wrong theme */
const themeScript = `
  try {
    var t = localStorage.getItem('vikhon-theme');
    if (t === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
