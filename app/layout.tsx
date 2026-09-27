import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dripping Art | Personalised Resin Art by Rashmi Tomar",
  description:
    "Hand-poured resin wall clocks, keychains, photo frames, wedding mala preservation and more, personalised to order by Rashmi Tomar. Based in Sanjay Nagar, Ghaziabad.",
  keywords: [
    "resin art",
    "personalised resin art",
    "resin wall clock",
    "resin keychain",
    "wedding mala preservation",
    "bouquet preservation resin",
    "Ghaziabad resin artist",
    "Dripping Art",
  ],
  openGraph: {
    title: "Dripping Art | Personalised Resin Art Pieces",
    description:
      "Hand-poured resin wall clocks, keychains, photo frames, wedding mala preservation and more, made to order by Rashmi Tomar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="font-body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
