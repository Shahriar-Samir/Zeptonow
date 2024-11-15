import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import clsx from "clsx";
import ReduxProvider from "@/lib/Provider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

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
    <html suppressHydrationWarning lang="en" >
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable,
        )}
      >
         <ReduxProvider>
         <div className="relative flex flex-col !text-black">
          <ToastContainer/>
            <Navbar />
            <main className="">
              {children}
            </main>
            <Footer/>
          </div>
         </ReduxProvider>

      </body>
    </html>
  );
}
