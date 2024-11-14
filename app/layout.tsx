import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import clsx from "clsx";

export const metadata: Metadata = {
  title: 'Welcome to Zepto',
  icons: {
    icon: '/icon.ico',
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" data-theme='light'>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable,
        )}
      >
          <div className="relative flex flex-col !text-black">
            <Navbar />
            <main className="">
              {children}
            </main>
            <Footer/>
          </div>

      </body>
    </html>
  );
}
