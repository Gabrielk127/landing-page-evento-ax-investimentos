import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "AX Negócios, Créditos e Investimentos",
  description: "Consultoria Financeira Gratuita!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
