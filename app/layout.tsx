import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Aside from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Aside />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
