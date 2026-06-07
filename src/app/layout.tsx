import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIKHON — Premium Digital Agency | Where Service Meets The Extraordinary",
  description:
    "Premium digital agency in Chennai, India. Web Development, UI/UX Design, Mobile Apps, Graphic Design, and Digital Marketing. World-class quality at startup-friendly prices.",
  keywords: [
    "digital agency",
    "web development",
    "UI/UX design",
    "mobile apps",
    "graphic design",
    "Chennai",
    "Tamil Nadu",
    "India",
    "React",
    "Next.js",
    "premium agency",
    "VIKHON",
  ],
  metadataBase: new URL("https://vikhon.com"),
  alternates: {
    canonical: "https://vikhon.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vikhon.com",
    siteName: "VIKHON",
    title: "VIKHON — Premium Digital Agency | Where Service Meets The Extraordinary",
    description:
      "Premium digital agency in Chennai, India. Web Development, UI/UX Design, Mobile Apps, Graphic Design, and Digital Marketing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIKHON — Premium Digital Agency",
    description: "Where Service Meets The Extraordinary. Premium digital agency based in Chennai, India.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "VIKHON",
  url: "https://vikhon.com",
  logo: "https://vikhon.com/favicon.ico",
  description:
    "Premium digital agency in Chennai, India offering Web Development, UI/UX Design, Mobile App Development, Graphic Design, and Digital Marketing.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  email: "hello@vikhon.com",
  sameAs: [
    "https://instagram.com/vikhon.studio",
    "https://linkedin.com/company/vikhon",
    "https://github.com/vikhon",
    "https://fiverr.com/vijayandiran",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
    ],
  },
  areaServed: "Worldwide",
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body
        className="antialiased bg-[#0A0A0A] text-white"
        style={{ fontFamily: "var(--font-plus-jakarta), var(--font-inter), sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
