import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "/styles/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gehry",
  description: "Generated by create next app",
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden bg-my_color_1 text-my_color_9`}
      >
        {/* <Navigation /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
