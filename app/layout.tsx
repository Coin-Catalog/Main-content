import "./styles/globals.css";
import { Viewport } from "next";

import { Providers } from "./providers";

import Footer from "./components/footer";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers themeProps={{ attribute: "class" }}>
          <main className="pt-16 px-6 flex-grow">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
