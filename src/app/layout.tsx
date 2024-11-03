import type { Metadata } from "next";
import {Figtree} from "next/font/google";
import "./globals.css";
import SupabaseProvider from "./Providers/SupabaseProvider";
import UserProvider from "./Providers/UserProvider";
import ModalProvider from "./Providers/ModalProvider";
import Sidebar from "./components/Sidebar";
import ToasterProvider from "./Providers/ToasterProvider";
import getSongsByUserId from "./actions/getSongsByUserId";

const font = Figtree({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listening to music",
};

export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
              <Sidebar songs={userSongs}>
                {children}
              </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
