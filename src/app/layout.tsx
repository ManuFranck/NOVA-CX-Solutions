import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NOVA CX Solutions — CX & Chatbots",
  description:
    "Chatbots intelligents et Customer Experience pour les entreprises en Guinée. WhatsApp, Web, Messenger, Telegram, SMS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
