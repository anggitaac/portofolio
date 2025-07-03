import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const publications = [
  {
    title: "Analysis of Coral Life Form Based on Oceanographic Parameters in Ayer Island, Thousand Islands",
    url: "https://jurnal.oso.ac.id/index.php/jkp/article/view/97/78",
    journal: "Jurnal Kelautan dan Pesisir, 2025",
  },
  {
    title: "Optimizing The Potential Of Marine Tourism With Assistance In Creating A Website At The Yayasan Konservasi Alam Bawah Laut Sukarame",
    url: "https://jurnal.unmabanten.ac.id/index.php/jppm/article/view/1133/558",
    journal: "Jurnal Pengabdian Pada Masyarakat, 2025",
  },
  {
    title: "Analysis of The Causes of Mangrove Ecosystem Damage in Ecotourism Development Efforts in Banten Province",
    url: "https://proceedings.upi.edu/index.php/INCOMA/article/view/3503/3144",
    journal: "Jurnal Pengabdian Pada Masyarakat, 2025",
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
