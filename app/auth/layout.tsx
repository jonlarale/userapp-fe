import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User App - Auth",
  description: "Ejemplo de app para gestionar usuarios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-8 md:px-48">{children}</div>;
}
