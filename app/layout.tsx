import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNavbar from "./components/MobileNavbar";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "FlowThink",
  description: "Landing page FlowThink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col pt-20 md:pt-0`} suppressHydrationWarning>
        <div className="flex-1">
          {children}
        </div>
        <MobileNavbar />
      </body>
    </html>
  );
}
