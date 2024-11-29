import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});
export const metadata: Metadata = {
  title: "Planify | Smarter Task Management",
  description:
    "Planify is the ultimate task management tool designed for individuals and teams. Organize, prioritize, and collaborate effortlessly to achieve more every day. Try NextTask for free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen w-full-screen overflow-x-hidden text-xs lg:text-base xl:text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
