import type { ReactNode } from "react";
import { Fraunces } from "next/font/google";

const titre = Fraunces({
  subsets: ["latin"],
  variable: "--font-titre",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://clipperie-livid.vercel.app"),
  title: "Clipperie : un live de deux heures devient trente clips verticaux",
  description:
    "Dépose ton live ou ton podcast. Reçois 30 clips verticaux sous-titrés, prêts à publier, sous 48 h.",
  openGraph: {
    title: "Clipperie : un live de deux heures devient trente clips verticaux",
    description:
      "30 clips verticaux sous-titrés, prêts à publier, sous 48 h.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={titre.variable}>
      <body
        style={{
          margin: 0,
          background: "#F5EFE3",
          color: "#1B1612",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          lineHeight: 1.5,
        }}
      >
        {children}
      </body>
    </html>
  );
}
