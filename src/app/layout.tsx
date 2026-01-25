import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/components/Header";
import {Fraunces, Source_Sans_3} from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif"
})

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "Melissa's Playground",
  description: "A portfolio and a place to experiment within the realm of software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={sourceSans3.className}>
        <header>
          <Header/>
        </header>
        <div style={{flexGrow: 1, width: '80%', padding: '20px', alignSelf: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {children}
        </div>
      </body>
    </html>
  );
}
