import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/components/Header";

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
      <body>
        <Header/>
        <div style={{flexGrow: 1, width: '80%', padding: '20px', alignSelf: 'center'}}>
          {children}
        </div>
      </body>
    </html>
  );
}
