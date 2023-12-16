import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions App - Auth",
  description: "Consulta las transacciones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-8 md:px-48">{children}</div>;
}
