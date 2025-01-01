import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/component/Header";
import Footer from "@/components/component/Footer";
import NavBarContext from "../context/NavBarContext";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-black text-white`}>
        <NavBarContext>
          <Header />
        </NavBarContext>
        {children}
        <Footer />
      </body>
    </html>
  );
}