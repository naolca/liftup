
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import StoreProviderComponent from '../components/ui/store-provider-component';
import { BrowserRouter as Router } from 'react-router-dom';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* Make sure to come back and fix the theme thing */

    <html lang="en" className="min-w-fit min-h-full">
      <body className={`${inter.className} w-full h-full`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <StoreProviderComponent>{children}</StoreProviderComponent>
      </ThemeProvider>
        </body>
    </html>

  );
}
