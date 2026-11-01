import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthonia Akouete | Operations & Customer Support",
  description:
    "Portfolio of Anthonia Akouete, a bilingual operations and customer support assistant based in Lagos, Nigeria.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
