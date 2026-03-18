import type { Metadata } from "next";
import { Geist, Geist_Mono, Google_Sans, Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const google = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuš kabine po meri",
  description: "Sve što treba da znate o tuš kabinama po meri...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-631851238"></script>
      <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-631851238');
          `,
        }} />     
      </head>
      <body
        className={`${google.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
