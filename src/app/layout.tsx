import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-display',
  weight: ['400', '700'] 
});

const lato = Lato({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  weight: ['400', '700'] 
});

export const metadata: Metadata = {
  title: "RCCG Divine Presence Parish",
  description: "RCCG Divine Presence Parish Lomé, Togo - official website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
