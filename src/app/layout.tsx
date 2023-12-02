import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookshelf",
  icons: "/images/bookshelf.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <div className="bg-light max-w-screen max-h-screen background">
          {children}
        </div>
      </body>
    </html>
  );
}
