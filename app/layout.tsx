import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import ReduxProvider from "@/lib/Provider";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Session from "@/providers/Session";
import connectDB from "@/lib/connectDB";

export const metadata: Metadata = {
  title: "Welcome to Zepto",
  icons: {
    icon: "/icon.ico",
  },
};
export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connectDB();

  return (
    <Session>
      <html suppressHydrationWarning data-theme="light" lang="en">
        <head>
          <style>{`
          html{
            visibility: hidden;
          }
        `}</style>
        </head>
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased ",
            fontSans.variable
          )}
        >
          <ReduxProvider>
            <div className="relative flex flex-col !text-black">
              <ToastContainer />
              <Navbar />
              <main className="">{children}</main>
              <Footer />
            </div>
          </ReduxProvider>
        </body>
      </html>
    </Session>
  );
}
