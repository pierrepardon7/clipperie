import type { ReactNode } from "react";

export const metadata = {
  title: "Clipperie",
  description: "Un live de deux heures devient trente clips verticaux.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
