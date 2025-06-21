import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import BookCallSection from "@/components/book-call";
import FooterSection from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudioQ - Premium Design Subscription",
  description:
    "Unlimited design at an unbeatable price. Pause or cancel anytime.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                  let shouldBeDark = false;
                  if (savedTheme) {
                    shouldBeDark = savedTheme === 'dark';
                  } else {
                    shouldBeDark = systemPrefersDark;
                  }

                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
       
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" />
      </body>
    </html>
  );
}
