import type { Metadata } from "next";
import {Figtree} from "next/font/google";
import "./globals.css";
import SupabaseProvider from "./Providers/SupabaseProvider";
import UserProvider from "./Providers/UserProvider";
import ModalProvider from "./Providers/ModalProvider";
import Sidebar from "./components/Sidebar";
import ToasterProvider from "./Providers/ToasterProvider";

const font = Figtree({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listening to music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       {/* <head>
        <meta charSet="UTF-8" />
      </head> */}
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
              <Sidebar>
                {children}
              </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
