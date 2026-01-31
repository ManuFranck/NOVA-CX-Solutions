
import "./globals.css";

export const metadata = {
  title: "NOVA CX Solutions",
  description: "Friendly customer experience & smart chatbots for Africa"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
