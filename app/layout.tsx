import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/session";
import AppShell from "./AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "FS Comp",
  description: "Laptop second bergaransi, rakit PC custom, aksesoris, dan servis profesional — FS Comp Wiradesa Pekalongan."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = getCurrentUser();

  return (
    <html lang="id">
      <body>
        <AppShell
          currentUserName={currentUser?.name}
          currentUserRole={currentUser?.role}
          isLoggedIn={Boolean(currentUser)}
          isAdmin={currentUser?.role === 'admin'}
          isMagang={currentUser?.role === 'magang'}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
