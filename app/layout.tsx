import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ReactNode } from "react";
import { DarkLightSwitchBtn } from "@/components/common";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hotel Manager",
  description: "A simple hotel management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative">
            {children}
            <div className="absolute right-5 bottom-5 flex items-center gap-2">
              <DarkLightSwitchBtn />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
