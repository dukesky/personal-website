import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tian Zhang - Data Scientist & ML Engineer",
  description: "Personal website of Tian Zhang, Data Scientist at JM Eagle and USC graduate. Specializing in machine learning, data science, and cloud deployment.",
  keywords: ["Tian Zhang", "Data Scientist", "Machine Learning", "USC", "JM Eagle"],
  authors: [{ name: "Tian Zhang" }],
  openGraph: {
    title: "Tian Zhang - Data Scientist & ML Engineer",
    description: "Personal website of Tian Zhang, Data Scientist at JM Eagle and USC graduate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
