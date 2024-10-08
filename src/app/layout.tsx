import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./fontawesome";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "BertoStudio",
  description: "My portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          (roboto.className, `bg-fixed bg-cover bg-center h-screen bg-gray-600`)
        }
        style={{ backgroundImage: "url('/images/bg4.jpg')" }}>
        {children}
      </body>
    </html>
  );
}
